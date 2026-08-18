import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ExperienceDetail from './ExperienceDetail';
import { lightTheme } from '../theme/theme';

const renderDetail = (id) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter initialEntries={[`/experience/${id}`]}>
        <Routes>
          <Route path="/experience/:id" element={<ExperienceDetail />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

describe('ExperienceDetail two-tier layout', () => {
  it('shows the plain-language summary up front', () => {
    renderDetail('airion');
    ['何をしたか', 'なぜ必要だったか', '自分の担当', '使った技術', '結果'].forEach((label) =>
      expect(screen.getByText(label)).toBeInTheDocument()
    );
  });

  it('keeps the jargon-heavy responsibilities collapsed until asked', () => {
    renderDetail('airion');
    const trigger = screen.getByRole('button', { name: /担当内容の詳細を見る/ });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    expect(panel.textContent).toMatch(/鉄パイプ/);
  });
});
