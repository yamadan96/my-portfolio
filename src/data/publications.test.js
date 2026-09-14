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

  it('gives every paper the top-page row fields, taken from what the entry already says', () => {
    conferencePapers.forEach((p) => {
      expect(p.finding.length).toBeGreaterThan(0);
      expect(p.conditions.length).toBeGreaterThan(0);
      // 行に出す数字は description / metrics にあるものだけ
      const source = [p.description, ...p.metrics.map((m) => `${m.value} ${m.label}`)].join(' ');
      `${p.finding} ${p.conditions}`
        .match(/\d[\d,.]*/g)
        ?.forEach((n) => expect(source).toContain(n));
      // 会場名と発表形式は venue / type の文字列から切り出す
      expect(p.presentations.length).toBeGreaterThan(0);
      p.presentations.forEach((pres) => {
        expect(p.venue).toContain(pres.venue);
        expect(`${p.type}${p.venue}`).toContain(pres.type);
      });
    });
  });

  it('ties the ITE2026 5.53pt result to the Noto dataset and labels the cross-paper comparison everywhere', () => {
    const ite = publications.find((p) => p.id === 'pub-ite2026');
    // (1) 5.53pt は能登半島地震の小規模データ（学習832枚）に限った結果として書く
    // トップページの行は finding（数字）と conditions（条件）の2行で1組にして出す
    [
      ite.claim,
      ite.highlight,
      ite.resultCards[2].label,
      ite.detail.results,
      `${ite.finding} ${ite.conditions}`,
    ].forEach((text) => {
      expect(text).toMatch(/能登/);
      expect(text).toMatch(/832/);
    });
    expect(ite.detail.results).toMatch(/PHI-Net.*0\.25/);
    expect(ite.detail.results).toMatch(/MEDIC.*消失/);
    expect(ite.detail.interpretation).toMatch(/全データセットに共通する結果ではない/);
    // (2) 先行報告との比較の数字が出る場所には必ず「実験条件の異なる論文間比較」を添える
    [ite.metricsNote, ite.detail.results, ite.detail.interpretation].forEach((text) =>
      expect(text).toMatch(/実験条件の異なる論文間比較/)
    );
    [
      ite.claim,
      ite.highlight,
      ite.finding,
      ite.conditions,
      ...ite.resultCards.map((c) => `${c.value} ${c.label}`),
    ].forEach((text) => {
      ['79.87', '74.50', '99.53', '96.60', '83.86', '80.40'].forEach((n) => expect(text).not.toContain(n));
    });
  });

  it('gives the thesis a short title and keywords for its list row', () => {
    theses.forEach((p) => {
      expect(p.shortTitle.length).toBeGreaterThan(0);
      expect(p.keywords.length).toBeGreaterThan(0);
    });
  });
});
