import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ResearchSection from './ResearchSection';
import { darkTheme } from '../../theme/theme';

const renderSection = () =>
  render(
    <ThemeProvider theme={darkTheme}>
      <MemoryRouter>
        <ResearchSection />
      </MemoryRouter>
    </ThemeProvider>
  );

describe('ResearchSection (top page)', () => {
  it('keeps the "Research" heading and leads each row with what was found', () => {
    renderSection();
    expect(screen.getByRole('heading', { level: 2, name: 'Research' })).toBeInTheDocument();
    const findings = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(findings).toEqual([
      'DINOv2 が DINOv3 を +5.53pt 上回った',
      'Accuracy 68.99% → 71.04%、Macro F1 0.6366 → 0.6556',
      'LoRA で DINOv2 の Macro F1 0.37 → 0.56',
    ]);
    // 研究テーマは見出しではなくラベルとして残す
    expect(screen.getByText('視覚基盤モデルの比較')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'すべての発表・原稿・要旨を見る →' })).toBeInTheDocument();
  });

  it('puts the measurement conditions on their own line, next to the number', () => {
    renderSection();
    expect(screen.getByText('能登半島地震 · 学習832枚 · 6シード · Wilcoxon p=0.031')).toBeInTheDocument();
    expect(screen.getByText('能登半島地震 1,040枚 · 10シード平均 · 有意差検定は未実施')).toBeInTheDocument();
    expect(screen.getByText('能登半島地震 1,040枚 · 6クラス · 訓練832枚／評価208枚')).toBeInTheDocument();
    expect(screen.getByText('ConvNeXt の標準学習が最も安定')).toBeInTheDocument();
  });

  it('shows where each paper was presented, and in what form', () => {
    renderSection();
    expect(screen.getByText('映像情報メディア学会 2026年年次大会 · 口頭')).toBeInTheDocument();
    expect(screen.getByText('第1回 知覚AIフォーラム · ポスター')).toBeInTheDocument();
    expect(screen.getByText('IEICE2026 電子情報通信学会 総合大会 · 口頭')).toBeInTheDocument();
    expect(screen.getByText('FIT2025 第24回情報科学技術フォーラム · 口頭')).toBeInTheDocument();
    expect(screen.getByText('総合研究院フォーラム2025 · ポスター')).toBeInTheDocument();
    // 1つの研究を複数会場で発表するため、会場数はデータから数える
    expect(screen.getByText(/3件の研究を5会場で発表 · IWAIT 2027 投稿済み（査読中）/)).toBeInTheDocument();
    // 正式な発表題目も各行に出す
    expect(
      screen.getByText(/発表題目：視覚基盤モデルによる小・中規模被災建物画像データセットの分類性能の比較/)
    ).toBeInTheDocument();
  });

  it('keeps the thesis and the cross-paper numbers off the top page', () => {
    renderSection();
    const text = document.body.textContent;
    expect(text).not.toMatch(/動画異常検知/);
    ['79.87', '74.50', '99.53', '96.60', '83.86', '80.40'].forEach((n) => expect(text).not.toContain(n));
    expect(text).not.toMatch(/論文間比較/);
    expect(screen.queryByRole('link', { name: /原稿PDF/ })).not.toBeInTheDocument();
  });
});
