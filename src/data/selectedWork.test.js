import selectedWork from './selectedWork';
import experiences from './experiences';

describe('selected work data', () => {
  it('keeps the landing page to three items', () => {
    expect(selectedWork).toHaveLength(3);
  });

  it('gives every item the same three-part structure', () => {
    selectedWork.forEach((w) => {
      ['org', 'period', 'title', 'built', 'role'].forEach((k) => {
        expect(typeof w[k]).toBe('string');
        expect(w[k].length).toBeGreaterThan(0);
      });
      expect(w.outcome.value.length).toBeGreaterThan(0);
      expect(w.outcome.label.length).toBeGreaterThan(0);
    });
  });

  it('links every item to an existing detail page', () => {
    const ids = new Set(experiences.map((e) => e.id));
    selectedWork.forEach((w) => {
      const match = w.detailPath.match(/^\/experience\/(.+)$/);
      expect(match).not.toBeNull();
      expect(ids.has(match[1])).toBe(true);
    });
  });
});
