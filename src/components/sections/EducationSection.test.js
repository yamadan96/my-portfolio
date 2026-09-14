import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import EducationSection from './EducationSection';
import { lightTheme } from '../../theme/theme';

describe('EducationSection', () => {
  it('shows the two universities only, with the research line on the master course', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <EducationSection />
      </ThemeProvider>
    );
    const schools = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(schools).toEqual(['東京理科大学大学院', '東京理科大学']);
    expect(screen.getByText('災害の写真から建物の壊れ具合を判定する AI の研究')).toBeInTheDocument();
    // 高校・中学校はデータには残すが、トップページには出さない
    expect(screen.queryByText('本郷高等学校')).not.toBeInTheDocument();
    expect(screen.queryByText(/語学留学/)).not.toBeInTheDocument();
    expect(screen.queryByText('本郷中学校')).not.toBeInTheDocument();
  });
});
