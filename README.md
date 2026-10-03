# Md Kaidul Islam — Academic Portfolio

Built with **Jekyll**, which GitHub Pages runs automatically: edit a Markdown or
YAML file, push, and the site rebuilds in about a minute. Nothing to install.

## Where things live

```
_config.yml          Name, sidebar bio and links, site description
_data/news.yml       Latest news (newest first) — home shows 5, Misc shows all
_data/navigation.yml Top menu
_projects/*.md       One file per project (details, report, code, video links)
_publications/*.md   One file per publication
index.md             About (home page)
_misc/*.md           One file per Misc section (teaching, education, research, ...)
cv.html              CV page (embeds assets/CV.pdf)
projects.html        Page template that lists _projects/ (no need to edit)
misc.html            Page template that lists _misc/ (no need to edit)
publications.html    Page template that lists _publications/ (no need to edit)
assets/reports/      Project report PDFs
_layouts/, _includes/  Shared page frame: menu, sidebar, footer, news list
css/styles.css       All styling; day + night colors are tokens at the top
js/script.js         Day/night toggle and link previews
```

about / education / experience / awards / others / contact / publications-projects.html
are redirects so old links keep working.

## Common edits

- **Add news:** add an entry at the top of `_data/news.yml`.
- **Add a project:** copy a file in `_projects/`, edit the fields at the top and the
  description below. The fields are explained at the top of `projects.html`.
- **Add a report:** put the PDF in `assets/reports/` and set `report:` in the project file.
- **Add a video:** upload to YouTube (Unlisted is fine) and set `video:` in the project file.
- **Update CV:** replace `assets/CV.pdf` (same name).
- **Misc sections:** edit the file in `_misc/`. Add a section by copying one; reorder with `order:`.
- **Optional sections** (awards, test scores, tutorials): already in `_misc/` with `published: false` — change it to `true` to show one.

## Link previews

Hovering a link to another page on this site shows what it points to:
- `projects.html#robotic-arm` → just that project
- `misc.html#teaching` → just that section
- `projects.html` → the page title and a list of what's on it
- a `.pdf` link → the PDF itself, readable in place

Add `data-no-preview` to an `<a>` (or `{:data-no-preview=""}` after a Markdown link) to turn it off.

## Previewing on your computer (optional)

Needs Ruby. In this folder:

```
bundle install
bundle exec jekyll serve
```

then open http://localhost:4000.
