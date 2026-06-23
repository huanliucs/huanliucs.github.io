# Huan Liu's Homepage

PhD Candidate, School of Cyberspace, Hangzhou Dianzi University

[Google Scholar](https://scholar.google.com/citations?user=n8r9x_kAAAAJ&hl=en&authuser=2&oi=sra) · [ORCID](https://orcid.org/0000-0003-3830-6737) · [GitHub](https://github.com/huanliucs)

This repository contains the source code and bilingual content for my personal academic website, built with Next.js and adapted from PRISM.

## About Me

I am a PhD Candidate in the School of Cyberspace at [Hangzhou Dianzi University](https://www.hdu.edu.cn), advised by [Prof. Pengfei Jiao](https://cspjiao.github.io/). I am currently a Visiting Ph.D. Researcher at the [National University of Singapore](https://www.nus.edu.sg/), supervised by [Prof. See-Kiong Ng](https://www.comp.nus.edu.sg/~ngsk/). Previously, I was a Visiting Ph.D. Researcher at the [University of Sydney](https://www.sydney.edu.au/), supervised by [Prof. Jie Yin](https://sites.google.com/site/csyinjie/).

My research focuses on Graph Learning, with particular interest in Dynamic Heterogeneous Graphs and Foundation Models for graph-structured temporal data.

## Research Interests

- Graph Learning
- Dynamic Heterogeneous Graphs
- Foundation Models

## Recent Highlights

- One paper accepted by IJCAI 2026 Survey Track
- One paper accepted by ICML 2026
- Papers accepted by IEEE Transactions on Big Data, ICASSP 2026, and IEEE Transactions on Computational Social Systems
- Doctoral Student Program of the Young S&T Talents Cultivation Project, CAST
- CSC Scholarship for Joint PhD

## Contact

- Email: `huanliu@hdu.edu.cn`
- Location: National University of Singapore, Singapore

## Repository Structure

- `src/app/`: Next.js routes and page entry points
- `src/components/`: reusable UI, layout, home page, publication, and widget components
- `src/lib/`: content loading, configuration, i18n, state stores, and BibTeX parsing utilities
- `src/types/`: shared TypeScript types
- `content/`: English site content in Markdown, TOML, and BibTeX
- `content_zh/`: Chinese site content aligned with the English content structure
- `public/`: static assets such as profile photos, icons, and paper images
- `docs/`: deployment notes

## Local Development

Node.js `>=22.0.0` is required.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks before deployment:

```bash
npm run lint
npm run build
```

## Acknowledgment

This website is built on top of the [PRISM](https://github.com/xyjoey/PRISM) framework, with custom content, bilingual support, and site-specific modifications.
