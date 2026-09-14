import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ProjectDetail from './ProjectDetail';
import { lightTheme } from '../theme/theme';

const renderProject = (id) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter initialEntries={[`/projects/${id}`]}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

describe('ProjectDetail (story shape)', () => {
  it('shows the project title and the way back to the Airion experience', () => {
    renderProject('steel-pipe-counting');
    expect(
      screen.getByRole('heading', { level: 1, name: /工場の鉄パイプを画像から自動で数える AI/ })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '← 株式会社Airion の経歴へ' })).toHaveAttribute(
      'href',
      '/experience/airion'
    );
    expect(screen.getByRole('link', { name: /All Work へ戻る/ })).toHaveAttribute('href', '/work');
  });

  it('puts the one-line headline right under the title', () => {
    renderProject('steel-pipe-counting');
    const h1 = screen.getByRole('heading', { level: 1 });
    const strip = h1.nextElementSibling;
    expect(strip.textContent).toMatch(/従来：撮影〜計算で1枚8秒・束単位の計数が不安定/);
    expect(strip.textContent).toMatch(/束単位96\.6%・推論0\.2秒\/枚（社内評価）/);
  });

  it('renders the six story sections in order', () => {
    renderProject('steel-pipe-counting');
    const labels = Array.from(document.querySelectorAll('dt')).map((dt) => dt.textContent);
    expect(labels).toEqual(['課題', '制約', '担当', 'アプローチ', '結果', '学び']);
  });

  it('keeps the evidence-level technical section after the story', () => {
    renderProject('steel-pipe-counting');
    const learned = screen.getByText('学び');
    const technical = screen.getByText('技術詳細');
    // 学び（story の最後）→ 技術詳細 の順で並ぶ
    expect(learned.compareDocumentPosition(technical) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    // 担当内容の長文（旧 responsibilities）は個別ページ側に置く
    expect(screen.getByText(/CenterNet\/FCOS/)).toBeInTheDocument();
  });

  it('lists media links when the project has them', () => {
    renderProject('realtime-speech-synthesis');
    expect(screen.getByRole('link', { name: /トヨタイムズ YouTube/ })).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=xsmQ9Slnvds'
    );
  });
});

describe('ProjectDetail (summary shape)', () => {
  it('still opens an existing project with the five summary labels of the experience page', () => {
    renderProject('project-vit-scratch');
    expect(screen.getByRole('heading', { level: 1, name: /Vision Transformer/ })).toBeInTheDocument();
    ['何をしたか', 'なぜ必要だったか', '自分の担当', '使った技術', '結果'].forEach((label) =>
      expect(screen.getByText(label)).toBeInTheDocument()
    );
    expect(screen.getByText('技術詳細')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /の経歴へ/ })).not.toBeInTheDocument();
  });

  it('shows a not-found message with a way back for an unknown id', () => {
    renderProject('no-such-project');
    expect(screen.getByText(/見つかりません/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /All Work へ戻る/ })).toHaveAttribute('href', '/work');
  });
});
