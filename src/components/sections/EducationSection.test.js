import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import EducationSection from './EducationSection';
import { lightTheme } from '../../theme/theme';

describe('EducationSection', () => {
  it('shows the two universities and one combined school row, with the research line on the master course', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <EducationSection />
      </ThemeProvider>
    );
    const schools = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(schools).toEqual(['東京理科大学大学院', '東京理科大学', '本郷中学校・高等学校']);
    expect(screen.getByText('災害の写真から建物の壊れ具合を判定する AI の研究')).toBeInTheDocument();
    // 高校・中学校はデータには残すが、トップページには出さない
    // 中学・高校は1行にまとめ、学科名と語学留学の補足はトップページに出さない
    expect(screen.getByText('本郷中学校・高等学校')).toBeInTheDocument();
    expect(screen.getByText('2014年4月〜2020年3月')).toBeInTheDocument();
    expect(screen.getByText('中高一貫課程')).toBeInTheDocument();
    expect(screen.queryByText('本郷高等学校')).not.toBeInTheDocument();
    expect(screen.queryByText(/語学留学/)).not.toBeInTheDocument();
    expect(screen.queryByText('普通科')).not.toBeInTheDocument();
  });
});
