import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import SkillsSection from './SkillsSection';
import skills from '../../data/skills';
import { lightTheme } from '../../theme/theme';

const renderSection = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <SkillsSection />
    </ThemeProvider>
  );

describe('SkillsSection', () => {
  it('opens with the four core groups only', () => {
    renderSection();
    const groups = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(groups).toEqual(['Core', 'LLM', 'Vision', 'Production']);
    expect(screen.getByText('Computer Vision')).toBeInTheDocument();
    expect(screen.getByText('GRPO')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    // 折りたたみの中の項目は出ていない
    expect(screen.queryByText('Terraform')).not.toBeInTheDocument();
    expect(screen.queryByText('Django')).not.toBeInTheDocument();
  });

  it('expands Other Technologies in place', () => {
    renderSection();
    const toggle = screen.getByRole('button', { name: /Other Technologies/ });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    skills
      .filter((g) => !g.core)
      .forEach((g) => {
        expect(screen.getByText(new RegExp(g.category))).toBeInTheDocument();
        g.items.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());
      });
  });
});
