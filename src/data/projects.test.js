import projects from './projects';

// Mermaid syntax itself is validated by scripts/validate-diagrams.mjs at
// prebuild time — mermaid is ESM and CRA's jest cannot transform it.
describe('project data', () => {
  it('has a unique id for every entry', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('gives every project a level-1 summary with all five fields', () => {
    projects.forEach((p) => {
      expect(p.summary).toBeDefined();
      ['built', 'problem', 'role', 'tech', 'result'].forEach((k) => {
        expect(typeof p.summary[k]).toBe('string');
        expect(p.summary[k].length).toBeGreaterThan(0);
      });
    });
  });

  it('describes every diagram for screen readers', () => {
    projects.forEach((p) => {
      expect(p.diagram).toBeDefined();
      expect(p.diagram.alt.length).toBeGreaterThan(0);
      expect(p.diagram.caption.length).toBeGreaterThan(0);
    });
  });

  it('never links a private repository', () => {
    projects.forEach((p) => {
      if (p.github) expect(p.github).toMatch(/^https:\/\/github\.com\/yamadan96\//);
    });
  });

});
