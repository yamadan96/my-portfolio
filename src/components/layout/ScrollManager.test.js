import React from 'react';
import { act, render } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import ScrollManager from './ScrollManager';

let navigateRef;
const CaptureNavigate = () => {
  navigateRef = useNavigate();
  return null;
};

const renderWithRouter = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <ScrollManager />
      <CaptureNavigate />
    </MemoryRouter>
  );

const scrollWindowTo = (y) => {
  window.scrollY = y;
  window.dispatchEvent(new Event('scroll'));
};

describe('ScrollManager', () => {
  let scrollTo;

  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation((x, y) => {
      window.scrollY = y;
    });
  });

  afterEach(() => {
    scrollTo.mockRestore();
    vi.useRealTimers();
    window.scrollY = 0;
  });

  it('opens a newly visited page from the top', () => {
    renderWithRouter();
    scrollWindowTo(1800);
    scrollTo.mockClear();

    act(() => navigateRef('/work'));

    expect(scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('leaves hash links to the section jump', () => {
    renderWithRouter();
    scrollTo.mockClear();

    act(() => navigateRef({ pathname: '/', hash: 'experience' }));

    expect(scrollTo).not.toHaveBeenCalled();
  });

  it('returns to where the reader left the page when going back', () => {
    renderWithRouter();
    act(() => scrollWindowTo(1800));

    act(() => navigateRef('/experience/airion'));
    act(() => scrollWindowTo(300));
    scrollTo.mockClear();

    act(() => navigateRef(-1));

    expect(scrollTo).toHaveBeenLastCalledWith(0, 1800);
  });
});
