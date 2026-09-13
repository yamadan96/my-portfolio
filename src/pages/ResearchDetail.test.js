import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ResearchDetail from './ResearchDetail';
import { lightTheme } from '../theme/theme';

const renderDetail = (id) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter initialEntries={[`/research/${id}`]}>
        <Routes>
          <Route path="/research/:id" element={<ResearchDetail />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

const SECTION_LABELS = [
  '研究課題（Research Question）',
  'データセット（Dataset）',
  '手法（Method）',
  '実験（Experiments）',
  '結果（Results）',
  '解釈（Interpretation）',
  '資料（Materials）',
];

describe('ResearchDetail (level 3, one paper per page)', () => {
  it('renders the seven sections in the fixed order under the full title', () => {
    renderDetail('pub-ite2026');
    expect(
      screen.getByRole('heading', { level: 1, name: '視覚基盤モデルによる小・中規模被災建物画像データセットの分類性能の比較' })
    ).toBeInTheDocument();
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual(SECTION_LABELS);
    expect(screen.getByRole('link', { name: '← Research へ戻る' })).toHaveAttribute('href', '/research');
  });

  it('keeps the caveats of the ITE paper visible in results and interpretation', () => {
    renderDetail('pub-ite2026');
    expect(screen.getAllByText(/実験条件の異なる論文間比較/).length).toBeGreaterThan(0);
    expect(
      screen.getByText(/論文ではこれを、低ランク制約が正則化として働く可能性を支持する結果と解釈している/)
    ).toBeInTheDocument();
    // 一覧ページから外した数値は、ここには残っていること
    const text = document.body.textContent;
    expect(text).toMatch(/Wilcoxon p=0\.031/);
    expect(text).toMatch(/約3\.04億パラメータ更新/);
    expect(text).toMatch(/LoRA r=8/);
    expect(text).toMatch(/Since datasets for training dedicated models/);
  });

  it('lists the materials, the presentation page and the citation line', () => {
    renderDetail('pub-ite2026');
    expect(screen.getByRole('link', { name: /発表ページ/ })).toHaveAttribute('href', 'https://www.ite.or.jp/annual/2026/');
    expect(screen.getByRole('link', { name: /原稿PDF/ })).toHaveAttribute('href', '/papers/ite2026-paper.pdf');
    expect(screen.getByRole('link', { name: /スライドPDF/ })).toHaveAttribute('href', '/papers/ite2026-slides.pdf');
    expect(screen.getByRole('link', { name: /ポスターPDF/ })).toHaveAttribute('href', '/papers/ite2026-poster.pdf');
    expect(screen.getByText(/映像情報メディア学会2026年年次大会講演予稿集/)).toBeInTheDocument();
  });

  it('keeps the IEICE caveat on the results', () => {
    renderDetail('pub-ieice2026');
    expect(screen.getAllByText(/差はいずれも1標準偏差以内、有意差検定は未実施/).length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /東理大研究業績DB/ })).toBeInTheDocument();
  });

  it('skips the sections the thesis does not have and links its repository', () => {
    renderDetail('pub-bachelor-thesis');
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual(SECTION_LABELS.filter((label) => label !== '解釈（Interpretation）'));
    expect(screen.getByRole('link', { name: /GitHub リポジトリ/ })).toHaveAttribute(
      'href',
      'https://github.com/yamadan96/cwvae-anomaly-detection-thesis'
    );
  });

  it('shows a not-found message with a way back for an unknown id', () => {
    renderDetail('no-such-paper');
    expect(screen.getByText(/見つかりません/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '← Research へ戻る' })).toHaveAttribute('href', '/research');
  });
});
