import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Mock IntersectionObserver for jsdom
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders without crashing', () => {
  expect(() => render(<App />)).not.toThrow();
});
