import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ExperienceDetail from './ExperienceDetail';
import { lightTheme } from '../theme/theme';

// カードからの遷移先（/projects/:id）は中身を描画せず、到達した id だけを出す
const ProjectRouteProbe = () => {
  const { id } = useParams();
  return <div data-testid="project-route">{id}</div>;
};

const renderDetail = (id) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter initialEntries={[`/experience/${id}`]}>
        <Routes>
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/projects/:id" element={<ProjectRouteProbe />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

describe('ExperienceDetail two-tier layout', () => {
  it('shows the plain-language summary up front', () => {
    renderDetail('legalon');
    ['何をしたか', 'なぜ必要だったか', '自分の担当', '使った技術', '結果'].forEach((label) =>
      expect(screen.getByText(label)).toBeInTheDocument()
    );
  });

  it('keeps the jargon-heavy responsibilities collapsed until asked', () => {
    renderDetail('legalon');
    const trigger = screen.getByRole('button', { name: /担当内容の詳細を見る/ });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    expect(panel.textContent).toMatch(/プロンプトエンジニアリング/);
  });
});

describe('ExperienceDetail highlights layout (airion)', () => {
  it('renders exactly four blocks: role, highlights, projects, tech stack', () => {
    renderDetail('airion');
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual(['役割', '代表実績', 'プロジェクト一覧（6件）', '技術スタック']);
  });

  it('keeps the role block to "what" and "own role" only', () => {
    renderDetail('airion');
    expect(screen.getByText('何をしたか')).toBeInTheDocument();
    expect(screen.getByText('自分の担当')).toBeInTheDocument();
    expect(screen.getByText(/4名チームのエンジニア兼テックリードを担当/)).toBeInTheDocument();
    ['なぜ必要だったか', '使った技術', '結果'].forEach((label) =>
      expect(screen.queryByText(label)).not.toBeInTheDocument()
    );
  });

  it('shows the three highlights', () => {
    renderDetail('airion');
    expect(screen.getByText('代表実績')).toBeInTheDocument();
    ['鉄パイプ自動計数', 'コミュニケーションロボット向け音声合成', '製造業向け AI システム'].forEach((title) =>
      expect(screen.getByText(title)).toBeInTheDocument()
    );
  });

  it('no longer renders the long responsibilities text on the experience page', () => {
    renderDetail('airion');
    expect(screen.queryByRole('button', { name: /担当内容の詳細を見る/ })).not.toBeInTheDocument();
    // 旧 responsibilities（音声合成の4ブロック）に固有の語句が出ていないこと
    expect(document.body.textContent).not.toMatch(/WavLMDiscriminator/);
    expect(document.body.textContent).not.toMatch(/日本語のみ約800時間/);
  });

  it('sends a card with a projectId to its own page', () => {
    renderDetail('airion');
    fireEvent.click(screen.getByText('工場の鉄パイプを画像から自動で数えるAI'));
    expect(screen.getByTestId('project-route')).toHaveTextContent('steel-pipe-counting');
  });

  it('keeps the modal for a card without a projectId', () => {
    renderDetail('airion');
    fireEvent.click(screen.getByText('製造業向けラダープログラムの自動要約生成 LLM と検索システム'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.queryByTestId('project-route')).not.toBeInTheDocument();
  });
});
