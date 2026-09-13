import fs from 'node:fs';
import experiences from './experiences';
import projects from './projects';

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
        expect(e.details.techStack.length).toBeGreaterThan(0);
        if (e.details.highlights) {
          // 代表実績を持つ経歴は「役割 → 代表実績 → プロジェクト → 技術スタック」の構成。
          // 担当内容の長文は各プロジェクトの個別ページ側に移す
          expect(e.details.highlights).toHaveLength(3);
          e.details.highlights.forEach((h) => {
            ['axis', 'title', 'text'].forEach((k) => expect(h[k].length).toBeGreaterThan(0));
          });
          expect(e.details.projects.length).toBeGreaterThan(0);
          expect(e.details).not.toHaveProperty('responsibilities');
          return;
        }
        expect(e.details.overview.length).toBeGreaterThan(0);
        expect(e.details.achievements.length).toBeGreaterThan(0);
        expect(e.details.responsibilities.length).toBeGreaterThan(0);
      });
  });

  it('points every project card with a projectId at an existing project page', () => {
    const projectIds = new Set(projects.map((p) => p.id));
    experiences
      .filter((e) => e.details?.projects)
      .forEach((e) => {
        e.details.projects
          .filter((card) => card.projectId)
          .forEach((card) => {
            expect(projectIds.has(card.projectId)).toBe(true);
            // 個別ページ側からも経歴へ戻れること
            expect(projects.find((p) => p.id === card.projectId).experienceId).toBe(e.id);
          });
      });
  });

  it('keeps client identities out of the data', () => {
    const blob = JSON.stringify(experiences);
    // 顧客名を書くフィールド自体を持たない。敬称付きの社名（〜様）も出さない
    experiences.forEach((e) => expect(e).not.toHaveProperty('client'));
    expect(blob).not.toMatch(/様[）)]/);
    // ページの URL になる id にも社名を含めない（company に出している名前は除く）
    experiences.forEach((e) => {
      expect(e.id).toMatch(/^[a-z0-9-]+$/);
    });
    // 伏せた社名の一覧は git 管理外の .denylist.json に置く（あるときだけ検査する）
    const denylistPath = new URL('../../.denylist.json', import.meta.url);
    const denylist = fs.existsSync(denylistPath)
      ? JSON.parse(fs.readFileSync(denylistPath, 'utf8'))
      : [];
    denylist.forEach((name) => expect(blob).not.toContain(name));
  });
});
