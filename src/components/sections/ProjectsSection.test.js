import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ProjectsSection from './ProjectsSection';
import projects from '../../data/projects';
import { lightTheme } from '../../theme/theme';

const renderSection = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <ProjectsSection />
    </ThemeProvider>
  );

describe('ProjectsSection', () => {
  it('renders the level-1 summary labels for every project', () => {
    renderSection();
    // Each project contributes one 作ったもの row; the label is what a
    // first-time reader scans for.
    expect(screen.getAllByText('作ったもの')).toHaveLength(projects.length);
    expect(screen.getAllByText('結果')).toHaveLength(projects.length);
  });

  it('keeps technical details collapsed until the reader opens them', () => {
    renderSection();
    const triggers = screen.getAllByRole('button', { name: /技術詳細を見る/ });
    expect(triggers).toHaveLength(projects.filter((p) => p.technical?.length).length);
    triggers.forEach((t) => expect(t).toHaveAttribute('aria-expanded', 'false'));
  });

  it('exposes the panel to assistive tech when expanded', () => {
    renderSection();
    const trigger = screen.getAllByRole('button', { name: /技術詳細を見る/ })[0];
    const panelId = trigger.getAttribute('aria-controls');

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const panel = document.getElementById(panelId);
    expect(panel).not.toHaveAttribute('hidden');
    expect(panel).toHaveAttribute('role', 'region');
    expect(panel.textContent.length).toBeGreaterThan(0);
  });

  it('collapses again on a second activation', () => {
    renderSection();
    const trigger = screen.getAllByRole('button', { name: /技術詳細を見る/ })[0];
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
