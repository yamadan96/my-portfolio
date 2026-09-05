import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainPage from './MainPage';
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
    expect(headings).toEqual(['職務経歴', '研究・発表', 'スキル', 'プロフィール']);
  });

  it('offers exactly two calls to action in the hero', () => {
    renderMain();
    expect(screen.getByRole('button', { name: '職務経歴を見る' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'プロフィールを見る' })).toBeInTheDocument();
  });

  it('keeps every experience row to one line of description', () => {
    renderMain();
    // 6 rows, each with a 詳細 link and a short one-liner
    expect(screen.getAllByRole('button', { name: '詳細 →' })).toHaveLength(6);
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
