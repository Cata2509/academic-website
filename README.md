# Cătălin Niculescu — academic website

Academic profile, research, publications, doctorate, CV and contact.

## Publish with GitHub Pages

Repository **Settings → Pages → Deploy from a branch → main → /docs → Save**.

Website: https://cata2509.github.io/academic-website/

## Update content

The site requires Python 3, with no third-party packages.

1. Edit `data.json` for contact details, the working thesis title, publications and projects.
2. Edit `build.py` for biographical sections and page structure.
3. Edit `source/styles.css` and `source/app.js` for presentation and interactions.
4. Run `python build.py` and commit the updated sources **and** `docs/`.

The portrait and original CV are stored in `docs/assets/`.

### Add a doctoral report or presentation

Upload the approved file to `docs/assets/`, then add an entry to `reports` or `presentations` in `data.json`:

```json
{"title": "Report title", "date": "2026", "url": "assets/report-1.pdf"}
```

Run `python build.py` and commit the changes. Use an empty list for documents not yet published. The thesis wording is explicitly presented as a working title pending supervisor confirmation.

## Design reference and content

The layout and styling follow the academic website supplied by the doctoral supervisor:
https://github.com/SeriGC/academic-website

The reference project credits https://github.com/EnacheBA/academic-website for its design. Portrait and CV were supplied by Cătălin Niculescu. Publication data comes from the supplied CV and publisher records; project descriptions link to ICI Bucharest's official pages. No source documents or claims belonging to the reference professor are included as the student's own achievements.
