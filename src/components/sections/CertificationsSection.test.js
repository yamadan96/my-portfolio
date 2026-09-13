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
    expect(names()).toEqual([
      '東京大学松尾・岩澤研究室 講座「Physical AI 基礎編 2026」修了証',
      'G検定（JDLA Deep Learning for GENERAL 2026 #4）',
      '東京大学松尾研究室 集中講義「深層生成モデル」修了証',
      '東京大学松尾研究室 集中講義「画像認識」修了証',
      'Harvard CS50x: Introduction to Computer Science',
    ]);
    // 運転免許は折りたたみの中にだけある
    expect(screen.queryByText(/免許/)).not.toBeInTheDocument();
  });

  it('keeps the certificate links on the visible cards', () => {
    renderSection();
    expect(screen.getAllByRole('link', { name: '証明を見る →' }).length).toBeGreaterThanOrEqual(5);
  });

  it('expands the rest in place', () => {
    renderSection();
    const toggle = screen.getByRole('button', { name: 'その他の資格・修了証を見る →' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(names()).toHaveLength(certifications.length);
    expect(screen.getByText('普通自動車第一種免許（MT）')).toBeInTheDocument();
    expect(screen.getByText('日商簿記検定3級')).toBeInTheDocument();
  });
});
