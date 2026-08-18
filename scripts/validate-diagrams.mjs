// Parse every Mermaid chart in src/data/projects.js before the site is built.
// A malformed chart renders as an error box inside a collapsed panel, so the
// failure would otherwise stay invisible until a reader opened that one panel.
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><body></body>', { pretendToBeVisual: true });
global.window = dom.window;
global.document = dom.window.document;
Object.defineProperty(global, 'navigator', {
  value: dom.window.navigator,
  configurable: true,
});
global.Element = dom.window.Element;
global.SVGElement = dom.window.SVGElement;
global.Node = dom.window.Node;
global.DOMParser = dom.window.DOMParser;

const source = readFileSync(new URL('../src/data/projects.js', import.meta.url), 'utf8')
  .replace('export default projects;', '')
  .replace(/^const projects =/m, 'globalThis.__projects =');
// eslint-disable-next-line no-eval
eval(source);

const projects = globalThis.__projects;
const { default: mermaid } = await import('mermaid');
mermaid.initialize({ startOnLoad: false });

const failures = [];
for (const p of projects) {
  if (!p.diagram?.chart) {
    failures.push(`${p.id}: diagram missing`);
    continue;
  }
  try {
    await mermaid.parse(p.diagram.chart);
  } catch (err) {
    failures.push(`${p.id}: ${String(err.message).split('\n')[0]}`);
  }
}

if (failures.length > 0) {
  console.error(`Invalid Mermaid diagrams (${failures.length}):`);
  failures.forEach((f) => console.error('  ' + f));
  process.exit(1);
}
console.log(`All ${projects.length} Mermaid diagrams parse.`);
