import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import CertificationsSection from './CertificationsSection';
import certifications from '../../data/certifications';
import { lightTheme } from '../../theme/theme';

const renderSection = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <CertificationsSection />
    </ThemeProvider>
  );

const names = () => screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);

describe('CertificationsSection', () => {
  it('opens with exactly five certifications in this order', () => {
    renderSection();
    // 見出しは shortName（発行元は隣の行に分ける）
    expect(names()).toEqual([
      'Physical AI 基礎編 2026 修了',
      'G検定',
      '集中講義「深層生成モデル」修了',
      '集中講義「画像認識」修了',
      'CS50x: Introduction to Computer Science',
    ]);
    expect(screen.getAllByText('東京大学 松尾研究室')).toHaveLength(2);
    // 運転免許は折りたたみの中にだけある
    expect(screen.queryByText(/免許/)).not.toBeInTheDocument();
  });

  it('keeps the certificate links on the visible cards', () => {
    renderSection();
    expect(screen.getAllByRole('link', { name: /の証明$/ }).length).toBeGreaterThanOrEqual(5);
  });

  it('expands the rest in place', () => {
    renderSection();
    const toggle = screen.getByRole('button', { name: 'すべての資格・修了証を見る →' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(names()).toHaveLength(certifications.length);
    expect(screen.getByText('普通自動車第一種免許（MT）')).toBeInTheDocument();
    expect(screen.getByText('日商簿記検定3級')).toBeInTheDocument();
  });
});
