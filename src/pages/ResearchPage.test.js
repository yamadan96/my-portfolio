import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ResearchPage from './ResearchPage';
import { lightTheme } from '../theme/theme';

const renderPage = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter initialEntries={['/research']}>
        <ResearchPage />
      </MemoryRouter>
    </ThemeProvider>
  );

describe('ResearchPage (level 2 list)', () => {
  it('reads Research Focus → Publications → Thesis, in that order', () => {
    renderPage();
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual(['Research Focus', 'Publications', 'Thesis']);
    expect(
      screen.getByText(/少量の専門家ラベルしか得られない実世界画像認識を対象に.*災害画像解析と意匠画像検索に取り組んでいます/)
    ).toBeInTheDocument();
  });

  it('lists the three papers newest first, each with its one-line claim and a link to its own page', () => {
    renderPage();
    const links = screen.getAllByRole('link', { name: '詳細 →' });
    expect(links.map((a) => a.getAttribute('href'))).toEqual([
      '/research/pub-ite2026',
      '/research/pub-ieice2026',
      '/research/pub-fit2025',
      '/research/pub-bachelor-thesis',
    ]);
    // 5.53pt は能登半島地震の小規模データ（学習832枚）に限った結果として書く
    expect(
      screen.getByText(/能登半島地震の小規模データ（学習832枚）では DINOv2 が最新の DINOv3 を 5\.53pt 上回った/)
    ).toBeInTheDocument();
    expect(screen.getByText(/災害の種類・程度・有無を補助タスクにすると、10シード平均で精度が上がった/)).toBeInTheDocument();
    expect(screen.getByText(/少量データでも基盤モデルの一部だけを学習すれば精度が出る/)).toBeInTheDocument();
  });

  it('derives the presentation badge from the type', () => {
    renderPage();
    expect(screen.getByText('Oral / Poster')).toBeInTheDocument();
    expect(screen.getAllByText('Oral')).toHaveLength(2);
  });

  it('shows three result cards per paper with the numbers of the data file', () => {
    renderPage();
    ['+5.53pt', '68.99→71.04%', '0.77'].forEach((value) =>
      expect(screen.getByText(value)).toBeInTheDocument()
    );
    expect(screen.getAllByText('1,040枚')).toHaveLength(2);
  });

  it('shows the thesis as a single row', () => {
    renderPage();
    expect(screen.getByText('動画異常検知')).toBeInTheDocument();
    expect(screen.getByText('CW-VAE / OOPS!')).toBeInTheDocument();
  });

  it('keeps paper-level detail off the list page', () => {
    renderPage();
    const text = document.body.textContent;
    // 検定・パラメータ数・LoRA のランク・要旨・引用・論文間比較は個別ページにだけ置く
    expect(text).not.toMatch(/Wilcoxon/);
    expect(text).not.toMatch(/3\.04億/);
    expect(text).not.toMatch(/r=8/);
    expect(text).not.toMatch(/Since datasets/);
    expect(text).not.toMatch(/論文間比較/);
    // 先行報告との比較（論文間比較）の数字は一覧に出さない
    ['79.87', '74.50', '99.53', '96.60', '83.86', '80.40'].forEach((n) => expect(text).not.toContain(n));
    expect(text).not.toMatch(/講演予稿集/);
    expect(screen.queryByRole('link', { name: /原稿PDF/ })).not.toBeInTheDocument();
  });

  it('keeps the one-line note for the submitted paper', () => {
    renderPage();
    expect(screen.getByText(/国際会議へ投稿済み（査読中）— IWAIT 2027/)).toBeInTheDocument();
  });
});
