# yamadan96.github.io

Personal portfolio of Yuto Yamada (AI engineer / research engineer), published at
<https://yamadan96.github.io>.

## Information architecture

The landing page keeps the single-page layout of the July-2026 version (dark theme,
centred hero, vertical timeline, card grids). What changed is the amount of text: every
item is one or two lines, and anything longer lives on a sub page.

| Section | What it shows | Source data |
|---------|---------------|-------------|
| Hero | Name, rotating role titles, a two-line intro, profile icons, two calls to action | `src/data/profile.js` |
| About | Two short paragraphs, the 2027 position, three counts | `src/data/profile.js` |
| Experience | Timeline of the long-term positions (one line each) plus compact cards for shorter programmes | `src/data/experiences.js` |
| Research | Conference talks and theses, one line each, with links to PDF / slides / poster | `src/data/publications.js`, `src/data/research.js` |
| Skills | Seven categories of technologies actually used | `src/data/skills.js` |
| Education | Degrees and schools | `src/data/education.js` |
| Projects | Featured personal / research implementations, one line each | `src/data/projects.js` |
| Certifications | Certificates with links to the originals | `src/data/certifications.js` |
| Achievements | Awards, press and programmes | `src/data/profile.js` |
| Contact | E-mail | `src/data/profile.js` |

Sub pages:

| Route | Content |
|-------|---------|
| `/work` | All personal / research implementations with collapsible technical details and diagrams |
| `/research` | All talks and theses with abstracts, citations and materials |
| `/more` | Open-source repositories and selected articles |
| `/experience/:id` | Per-company detail pages |

Rule of thumb when editing copy: the hero intro states facts only, in two lines; model and library names belong in Skills / Research / Projects, not in
the hero or the bio; every item on the landing page is one or two lines; the profile icon
row appears only in the hero.

## Stack

React 18 · styled-components 6 · react-router-dom 6 · framer-motion · Create React App ·
GitHub Pages (`gh-pages`).

Design: dark theme by default (light available from the header toggle), Inter / Noto Sans JP,
gradient section titles and glass cards as in the July-2026 version.

## Development

```bash
npm install
npm start                       # http://localhost:3000
npm test -- --watchAll=false    # unit tests (jest + testing-library)
npm run build                   # validates Mermaid diagrams, then builds to build/
npm run deploy                  # build + publish build/ to the gh-pages branch
```

`scripts/validate-diagrams.mjs` runs before every build and fails it if any Mermaid
chart in `src/data/projects.js` does not parse.

## Layout of `src/`

```
src/
├── data/            content only – no JSX
├── components/
│   ├── layout/      Header, Footer, Section (page-width + reveal)
│   ├── sections/    one file per landing-page or sub-page section
│   └── ui/          SectionTitle, Card, Tag, Timeline, SocialIcons, Disclosure, …
├── pages/           MainPage, WorkPage, ResearchPage, MorePage, ExperienceDetail
├── theme/           colour / type tokens (light + dark) and the theme toggle
└── styles/          global CSS
```
