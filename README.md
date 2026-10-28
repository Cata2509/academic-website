# Cătălin-Andrei Niculescu — Academic Website

Personal academic website presenting my research, publications, doctoral work and professional background.

I am a PhD student in Electrical Engineering at the National University of Science and Technology POLITEHNICA Bucharest and an IT Specialist at the National Institute for Research & Development in Informatics — ICI Bucharest.

**Website:** [cata2509.github.io/academic-website](https://cata2509.github.io/academic-website/)

**Profiles:** [ORCID](https://orcid.org/0009-0007-1769-9398) · [GitHub](https://github.com/Cata2509) · [LinkedIn](https://www.linkedin.com/in/catalin-niculescu-092246294/)

## Overview

The website brings together:

- Research interests in environmental monitoring, artificial intelligence, IoT and distributed processing.
- Scientific publications with DOI and publisher links.
- Participation in European research and digital innovation projects.
- Doctoral research, with sections for reports and presentations.
- Education, professional experience, curriculum vitae and contact information.

## Technology

The website uses HTML, CSS and JavaScript, with a Python script for static page generation. It is hosted on GitHub Pages.

Generating the site requires Python 3 and its standard library. No third-party Python packages are required.

## Repository Structure

| Path | Purpose |
| --- | --- |
| `build.py` | Page generation, biographical content and shared HTML structure |
| `data.json` | Contact details, doctoral research theme, publications, projects and document lists |
| `source/styles.css` | Styles and responsive layouts |
| `source/app.js` | Navigation and publication search and filtering |
| `docs/` | Generated website published by GitHub Pages |
| `docs/assets/` | Portrait, CV, bibliography and other downloadable documents |

## Local Development

Clone the repository and generate the website:

```bash
git clone https://github.com/Cata2509/academic-website.git
cd academic-website
python build.py
```

To preview the generated pages locally:

```bash
python -m http.server 8000 --directory docs
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

## Updating Content

1. Update the relevant source: `build.py`, `data.json`, or a file in `source/`.
2. Run `python build.py` to regenerate the pages in `docs/`.
3. Review the generated website locally.
4. Commit and push both the updated sources and generated files.

GitHub Pages publishes the contents of `docs/`. The current configuration does not run `build.py` automatically. Changes to the sources therefore need to be generated and committed before they appear on the live website.

Direct edits to generated HTML files in `docs/` are overwritten the next time `build.py` runs. Keep the corresponding source content up to date.

### Doctoral Reports and Presentations

Place a document in `docs/assets/` and add an entry to the `reports` or `presentations` array in `data.json`:

```json
{
  "title": "Document title",
  "date": "2026",
  "url": "assets/document.pdf"
}
```

Then regenerate the website and commit the updated files. An empty array indicates that no documents in that category have been published on the website.

## Deployment

The site is published from the `main` branch and the `/docs` folder:

**Settings → Pages → Deploy from a branch → main → /docs**

After committing changes to the published files, check the repository's **Actions** tab for the status of the GitHub Pages deployment.

## Contact

For academic enquiries and collaboration: [catalin.niculescu@ici.ro](mailto:catalin.niculescu@ici.ro).

