// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// framer-motion's whileInView needs IntersectionObserver, which jsdom lacks.
// Stubbing it here keeps every suite from having to repeat the shim.
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
