import publications, { conferencePapers, theses } from './publications';

const DETAIL_KEYS = ['question', 'dataset', 'method', 'experiments', 'results', 'interpretation'];

describe('publication data', () => {
  it('has a unique id for every entry', () => {
    const ids = publications.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('splits the entries into conference papers (newest first) and theses', () => {
    expect(conferencePapers.map((p) => p.id)).toEqual(['pub-ite2026', 'pub-ieice2026', 'pub-fit2025']);
    expect(theses.map((p) => p.id)).toEqual(['pub-bachelor-thesis']);
  });

  it('gives every paper a short title, a one-line claim, three result cards and the six detail fields', () => {
    conferencePapers.forEach((p) => {
      expect(p.shortTitle.length).toBeGreaterThan(0);
      expect(p.claim.length).toBeGreaterThan(0);
      expect(p.resultCards).toHaveLength(3);
      p.resultCards.forEach((card) => {
        expect(card.value.length).toBeGreaterThan(0);
        expect(card.label.length).toBeGreaterThan(0);
      });
      DETAIL_KEYS.forEach((k) => {
        expect(typeof p.detail[k]).toBe('string');
        expect(p.detail[k].length).toBeGreaterThan(0);
      });
    });
  });

  it('only puts numbers on the result cards that the description or metrics already contain', () => {
    conferencePapers.forEach((p) => {
      const source = [p.description, ...p.metrics.map((m) => `${m.value} ${m.label}`)].join(' ');
      p.resultCards.forEach((card) => {
        (card.value.match(/\d[\d,.]*/g) || []).forEach((n) => expect(source).toContain(n));
      });
    });
  });

  it('gives the thesis a short title and keywords for its list row', () => {
    theses.forEach((p) => {
      expect(p.shortTitle.length).toBeGreaterThan(0);
      expect(p.keywords.length).toBeGreaterThan(0);
    });
  });
});
