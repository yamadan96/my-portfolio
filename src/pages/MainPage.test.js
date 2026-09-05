import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainPage from './MainPage';
import { darkTheme } from '../theme/theme';

const renderMain = () =>
  render(
    <ThemeProvider theme={darkTheme}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </ThemeProvider>
  );

describe('MainPage information architecture', () => {
  it('keeps the July-2026 section order', () => {
    renderMain();
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual([
      'About',
      'Experience',
      'Research',
      'Skills',
      'Education',
      'Projects',
      'Certifications',
      'Awards & Recognition',
      'Contact',
    ]);
  });

  it('offers the two hero calls to action', () => {
    renderMain();
    const hero = within(document.getElementById('hero'));
    expect(hero.getByText('経歴を見る')).toHaveAttribute('href', '#experience');
    expect(hero.getByText('お問い合わせ')).toHaveAttribute('href', '#contact');
  });

  it('shows the profile icon row once, in the hero only', () => {
    renderMain();
    const hero = document.getElementById('hero');
    const contact = document.getElementById('contact');
    expect(within(hero).getAllByRole('link', { name: /github/i })).toHaveLength(1);
    expect(within(contact).queryAllByRole('link', { name: /github/i })).toHaveLength(0);
    expect(within(contact).getByRole('link', { name: /yuto\.yamada0101@gmail\.com/ })).toHaveAttribute(
      'href',
      'mailto:yuto.yamada0101@gmail.com'
    );
  });
});
