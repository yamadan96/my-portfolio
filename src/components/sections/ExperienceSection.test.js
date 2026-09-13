import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ExperienceSection, { TOP_PAGE_COUNT } from './ExperienceSection';
import experiences from '../../data/experiences';
import { lightTheme } from '../../theme/theme';

const renderSection = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter>
        <ExperienceSection />
      </MemoryRouter>
    </ThemeProvider>
  );

describe('ExperienceSection', () => {
  const major = experiences.slice(0, TOP_PAGE_COUNT);
  const rest = experiences.slice(TOP_PAGE_COUNT);

  it('shows only the first five entries in the timeline', () => {
    renderSection();
    expect(TOP_PAGE_COUNT).toBe(5);
    const companies = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(companies).toEqual(major.map((e) => e.company));
    rest.forEach((e) => expect(screen.queryByText(e.description)).not.toBeInTheDocument());
    expect(screen.getByText('主要な経験')).toBeInTheDocument();
    expect(screen.queryByText(/長期・現職を中心とした/)).not.toBeInTheDocument();
  });

  it('expands the remaining entries in place with a computed count', () => {
    renderSection();
    const toggle = screen.getByRole('button', {
      name: `その他の実務・インターン経験（${rest.length}件）をすべて見る`,
    });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    rest.forEach((e) => expect(screen.getByText(e.description)).toBeInTheDocument());
    expect(screen.getByText('その他の実務経験')).toBeInTheDocument();
    expect(screen.getByText('短期インターン・ワークショップ')).toBeInTheDocument();
    // 「詳細を見る →」は開いた項目にも残す
    const detailLinks = screen.getAllByText('詳細を見る →');
    expect(detailLinks).toHaveLength(experiences.filter((e) => e.hasDetail).length);
  });
});
