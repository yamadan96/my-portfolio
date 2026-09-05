# yamadan96.github.io

Personal portfolio of Yuto Yamada (AI engineer / research engineer), published at
<https://yamadan96.github.io>.

## Information architecture

The landing page is written to be read in about 30 seconds, top to bottom:

| # | Section | What it answers | Source data |
|---|---------|-----------------|-------------|
| – | Hero | Who this is, in one line + a 3-line intro, two calls to action | `src/data/profile.js` |
| 01 | Selected Work | Three industry projects: what was built, my role, the outcome | `src/data/selectedWork.js` |
| 02 | Research | Three conference papers with direct links to PDF / slides / poster | `src/data/publications.js`, `src/data/research.js` |
| 03 | Experience | Six long-term positions, one line each | `src/data/experiences.js` |
| 04 | Skills | Four domains, only technologies actually used | `src/data/skillsCore.js` |
| 05 | About / Contact | Two-paragraph bio, current affiliations, recognition, e-mail and profile links | `src/data/profile.js` |

Everything else lives one level down:

| Route | Content |
|-------|---------|
| `/work` | All personal / research implementations (`src/data/projects.js`) |
| `/research` | All talks and theses with abstracts and citations |
| `/more` | CV: all 17 companies, awards, full skill list, OSS, writing, education, certifications |
| `/experience/:id` | Per-company detail pages |

Rule of thumb when editing copy: the hero headline stays within 15–25 characters and
states facts only; model and library names belong in Skills / Research, not in the hero
or the bio; numbers are always preceded by the context that makes them readable.

## Stack

React 18 · styled-components 6 · react-router-dom 6 · framer-motion · Create React App ·
GitHub Pages (`gh-pages`).

Design: light theme by default (dark available from the header toggle), serif display
type for `h1`/`h2`, one accent colour for links, no gradients or glass effects.

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
│   └── ui/          SectionTitle, Editorial (shared card primitives), Disclosure, …
├── pages/           MainPage, WorkPage, ResearchPage, MorePage, ExperienceDetail
├── theme/           colour / type tokens (light + dark) and the theme toggle
└── styles/          global CSS
```
