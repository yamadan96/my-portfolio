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
  it('orders the sections as who → what they can do → what proves it', () => {
    renderMain();
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual([
      'About',
      'Experience',
      'Research',
      'Projects',
      'Skills',
      'Education',
      'Certifications',
      'Awards & Recognition',
      'Contact',
    ]);
  });

  it('offers the two hero calls to action', () => {
    renderMain();
    const hero = within(document.getElementById('hero'));
    expect(hero.getByText('実務経験を見る')).toHaveAttribute('href', '#experience');
    expect(hero.getByRole('link', { name: 'GitHubを見る' })).toHaveAttribute(
      'href',
      'https://github.com/yamadan96'
    );
  });

  it('links each hero proof point to the experience it came from', () => {
    renderMain();
    const hero = within(document.getElementById('hero'));
    expect(hero.getByRole('link', { name: /検索 Recall/ })).toHaveAttribute(
      'href',
      '/experience/matsuo-institute-gui-rag'
    );
    expect(hero.getByRole('link', { name: /束単位の検出成功率/ })).toHaveAttribute(
      'href',
      '/experience/airion'
    );
  });

  it('shows the profile links once, in the hero only', () => {
    renderMain();
    const hero = document.getElementById('hero');
    const contact = document.getElementById('contact');
    // CTA の「GitHubを見る」と、その下の文字リンク「GitHub」の2本
    expect(within(hero).getAllByRole('link', { name: /github/i })).toHaveLength(2);
    expect(within(contact).queryAllByRole('link', { name: /github/i })).toHaveLength(0);
    // Contact is the July form (name / e-mail / message), not a mailto link
    expect(within(contact).getByLabelText('お名前')).toBeInTheDocument();
    expect(within(contact).getByLabelText('メールアドレス')).toBeInTheDocument();
    expect(within(contact).getByLabelText('メッセージ')).toBeInTheDocument();
  });
});
