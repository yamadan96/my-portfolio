import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ProjectsGridSection from './ProjectsGridSection';
import projects from '../../data/projects';
import { lightTheme } from '../../theme/theme';

const renderSection = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter>
        <ProjectsGridSection />
      </MemoryRouter>
    </ThemeProvider>
  );

describe('ProjectsGridSection (top page)', () => {
  it('features exactly these four projects in this order', () => {
    renderSection();
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    const byId = (id) => projects.find((p) => p.id === id).title;
    expect(titles).toEqual([
      byId('project-llm-finetune'),
      byId('project-vit-scratch'),
      byId('project-disaster-app'),
      byId('project-local-claude-code'),
    ]);
    expect(projects.filter((p) => p.featured)).toHaveLength(4);
  });

  it('makes every card a link to its project page, and keeps the live demo link', () => {
    renderSection();
    expect(screen.getAllByRole('link', { name: '詳細を見る →' })).toHaveLength(4);
    expect(
      screen.getByRole('link', { name: projects.find((p) => p.id === 'project-disaster-app').title })
    ).toHaveAttribute('href', '/projects/project-disaster-app');
    expect(screen.getByRole('link', { name: 'Demo' })).toHaveAttribute(
      'href',
      'https://huggingface.co/spaces/yuto090612/disaster-app'
    );
  });

  it('keeps the links to /work and /more', () => {
    renderSection();
    expect(screen.getByRole('button', { name: /すべての個人開発と技術詳細を見る/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /OSS・技術記事を見る/ })).toBeInTheDocument();
  });
});
