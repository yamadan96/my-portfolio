// jest-dom adds custom matchers for asserting on DOM nodes, e.g.
// expect(element).toHaveTextContent(/react/i)
// The /vitest entry registers them on Vitest's expect.
import '@testing-library/jest-dom/vitest';

// framer-motion's whileInView needs IntersectionObserver, which jsdom lacks.
// Stubbing it here keeps every suite from having to repeat the shim.
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// jsdom には window.scrollTo の実装がなく「Not implemented」を console.error に出すため、
// ページ遷移時に先頭へ戻す処理がテストの出力を汚さないよう空実装にしておく。
window.scrollTo = () => {};
