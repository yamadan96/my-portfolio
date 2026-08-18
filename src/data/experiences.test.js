import experiences from './experiences';

describe('experience data', () => {
  it('has a unique id for every entry', () => {
    const ids = experiences.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('gives every entry a level-1 summary with all five fields', () => {
    experiences.forEach((e) => {
      expect(e.summary).toBeDefined();
      ['built', 'problem', 'role', 'tech', 'result'].forEach((k) => {
        expect(typeof e.summary[k]).toBe('string');
        expect(e.summary[k].length).toBeGreaterThan(0);
      });
    });
  });

  it('backs every detail page with the fields it renders', () => {
    experiences
      .filter((e) => e.hasDetail)
      .forEach((e) => {
        expect(e.details.overview.length).toBeGreaterThan(0);
        expect(e.details.achievements.length).toBeGreaterThan(0);
        expect(e.details.responsibilities.length).toBeGreaterThan(0);
        expect(e.details.techStack.length).toBeGreaterThan(0);
      });
  });

  it('names no client company that the employer has not disclosed itself', () => {
    // Airion's own press release anonymises this party as 設備メーカー, so the
    // portfolio must not be more specific than the company is.
    const blob = JSON.stringify(experiences);
    ['設備メーカー', 'equipment maker'].forEach((name) => expect(blob).not.toContain(name));
  });
});
