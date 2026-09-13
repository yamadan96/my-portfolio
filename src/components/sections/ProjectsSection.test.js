import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ProjectsSection, { FILTERS, filterFor, firstSentence } from './ProjectsSection';
import projects from '../../data/projects';
import { lightTheme } from '../../theme/theme';

const renderSection = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <ProjectsSection />
    </ThemeProvider>
  );

const cardTitles = () =>
  screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);

describe('ProjectsSection (/work)', () => {
  it('shows every project as a collapsed card with the one-line 作ったもの and one result sentence', () => {
    renderSection();
    expect(cardTitles()).toEqual(projects.map((p) => p.title));
    projects.forEach((p) => {
      const built = p.story ? p.headline : p.summary.built;
      expect(screen.getByText(built)).toBeInTheDocument();
      const result = firstSentence(p.story ? p.story.results : p.summary.result);
      expect(screen.getAllByText(result).length).toBeGreaterThan(0);
    });
    // 課題・担当・技術は「詳しく」を開くまで出さない
    expect(screen.queryByText('課題')).not.toBeInTheDocument();
    expect(screen.queryByText('担当')).not.toBeInTheDocument();
    const triggers = screen.getAllByRole('button', { name: '詳しく' });
    expect(triggers).toHaveLength(projects.length);
    triggers.forEach((t) => expect(t).toHaveAttribute('aria-expanded', 'false'));
  });

  it('keeps the 詳細 → link to the project page on every card', () => {
    renderSection();
    const links = screen.getAllByRole('link', { name: '詳細 →' });
    expect(links.map((a) => a.getAttribute('href'))).toEqual(
      projects.map((p) => `/projects/${p.id}`)
    );
  });

  it('expands 課題 → 担当 → 技術 → 結果 → システム構成 in place', () => {
    renderSection();
    const trigger = screen.getAllByRole('button', { name: '詳しく' })[0];
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    expect(panel).not.toHaveAttribute('hidden');
    expect(panel).toHaveAttribute('role', 'region');
    const labels = Array.from(panel.querySelectorAll('dt')).map((dt) => dt.textContent);
    expect(labels).toEqual(['課題', '担当', '技術', '結果']);
    expect(within(panel).getByText('システム構成')).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('maps every project to exactly one filter besides All', () => {
    const ids = FILTERS.filter((f) => f.id !== 'all').map((f) => f.id);
    projects.forEach((p) => expect(ids).toContain(filterFor(p)));
    const total = ids.reduce((n, id) => n + projects.filter((p) => filterFor(p) === id).length, 0);
    expect(total).toBe(projects.length);
    // 代表的な置き場所
    expect(filterFor(projects.find((p) => p.id === 'project-llm-finetune'))).toBe('llm');
    expect(filterFor(projects.find((p) => p.id === 'project-local-claude-code'))).toBe('llm');
    expect(filterFor(projects.find((p) => p.id === 'project-vit-scratch'))).toBe('cv');
    expect(filterFor(projects.find((p) => p.id === 'steel-pipe-counting'))).toBe('cv');
    expect(filterFor(projects.find((p) => p.id === 'project-arxiv-ingest'))).toBe('tool');
    expect(filterFor(projects.find((p) => p.id === 'project-musclemon'))).toBe('product');
  });

  it('filters the grid and returns to the full list with All', () => {
    renderSection();
    const group = screen.getByRole('group', { name: 'プロジェクトの絞り込み' });
    expect(within(group).getAllByRole('button').map((b) => b.textContent)).toEqual(
      FILTERS.map((f) => f.label)
    );

    fireEvent.click(within(group).getByRole('button', { name: 'Computer Vision' }));
    const cv = projects.filter((p) => filterFor(p) === 'cv');
    expect(cardTitles()).toEqual(cv.map((p) => p.title));
    expect(within(group).getByRole('button', { name: 'Computer Vision' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    fireEvent.click(within(group).getByRole('button', { name: 'All' }));
    expect(cardTitles()).toEqual(projects.map((p) => p.title));
  });
});
