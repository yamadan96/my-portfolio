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
  it('keeps the "Research" heading and shows the three papers as year · short title · claim', () => {
    renderSection();
    expect(screen.getByRole('heading', { level: 2, name: 'Research' })).toBeInTheDocument();
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(titles).toEqual(['視覚基盤モデルの比較', 'マルチタスク学習', 'LoRA による損傷度分類']);
    expect(
      screen.getByText(/能登半島地震の小規模データ（学習832枚）では DINOv2 が最新の DINOv3 を 5\.53pt 上回った/)
    ).toBeInTheDocument();
    expect(screen.getByText(/国際会議へ投稿済み（査読中）— IWAIT 2027/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'すべての発表・原稿・要旨を見る →' })).toBeInTheDocument();
  });

  it('keeps the thesis, the cross-paper numbers and the paper-level detail off the top page', () => {
    renderSection();
    const text = document.body.textContent;
    expect(text).not.toMatch(/動画異常検知/);
    ['79.87', '74.50', '99.53', '96.60', '83.86', '80.40'].forEach((n) => expect(text).not.toContain(n));
    expect(text).not.toMatch(/論文間比較/);
    expect(text).not.toMatch(/Wilcoxon/);
    expect(screen.queryByRole('link', { name: /原稿PDF/ })).not.toBeInTheDocument();
  });
});
