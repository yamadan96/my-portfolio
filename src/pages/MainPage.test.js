import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainPage from './MainPage';
import selectedWork from '../data/selectedWork';
import { lightTheme } from '../theme/theme';

const renderMain = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </ThemeProvider>
  );

describe('MainPage information architecture', () => {
  it('presents the sections in the order a first-time reader should meet them', () => {
    renderMain();
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual(['代表的な実績', '研究・発表', '職務経歴', 'スキル', 'プロフィール']);
  });

  it('offers exactly two calls to action in the hero', () => {
    renderMain();
    expect(screen.getByRole('button', { name: '代表実績を見る' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'プロフィールを見る' })).toBeInTheDocument();
  });

  it('shows three selected works, each with what / role / outcome', () => {
    renderMain();
    expect(selectedWork).toHaveLength(3);
    expect(screen.getAllByText('作ったもの')).toHaveLength(3);
    expect(screen.getAllByText('担当')).toHaveLength(3);
    expect(screen.getAllByText('成果')).toHaveLength(3);
  });

  it('lists the external profile links exactly once, in the contact block', () => {
    renderMain();
    expect(screen.getAllByRole('link', { name: 'GitHub' })).toHaveLength(1);
    expect(screen.getByRole('link', { name: /yuto\.yamada0101@gmail\.com/ })).toHaveAttribute(
      'href',
      'mailto:yuto.yamada0101@gmail.com'
    );
  });
});
