import projects from './projects';

// Mermaid syntax itself is validated by scripts/validate-diagrams.mjs at
// prebuild time (scripts/validate-diagrams.mjs); the unit tests stay data-only.
describe('project data', () => {
  it('has a unique id for every entry', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('gives every project a level-1 summary (five fields) or a story (six fields + headline)', () => {
    projects.forEach((p) => {
      if (p.story) {
        // 業務案件は story 形式。課題 → 制約 → 担当 → アプローチ → 結果 → 学び と1行の headline を必ず持つ
        ['problem', 'constraints', 'role', 'approach', 'results', 'learned'].forEach((k) => {
          expect(typeof p.story[k]).toBe('string');
          expect(p.story[k].length).toBeGreaterThan(0);
        });
        expect(p.headline.length).toBeGreaterThan(0);
        return;
      }
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
