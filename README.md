# Md Kaidul Islam — Academic Portfolio

A static, dependency-free portfolio site. Pure HTML/CSS/JS — upload the whole
folder to GitHub Pages or drag it into Netlify Drop and it works, no build step.

## Folder structure

```
index.html                     Home / Intro
about.html                     About Me
education.html                 Education (CGPA intentionally omitted)
experience.html                Professional Experience (research + leadership)
cv.html                        Curriculum Vitae (PDF embed + download slot)
publications-projects.html     Publications & Projects
awards.html                    Honors & Awards
others.html                    Tutorials / Book Reviews / Test Scores
contact.html                   Contact
css/styles.css                 The ONLY stylesheet — colors, type, every component
js/script.js                   Nav + footer data, "The Spine" behavior, curtain blur
assets/                        Images + favicon + (add) CV.pdf
```

## Editing content on a page

Every page is plain HTML with `<!-- SECTION: ... -->` comments marking each
block. Open the file, find the section, and edit the text directly. Repeating
items (education entries, experience entries, project cards) are self-contained
`<article>` blocks — copy one, paste it, edit the text, or delete the block to
remove an entry. Each section's comment includes a short note on the expected
markup shape when it's not obvious (e.g. `awards.html`, `others.html`).

## Editing the nav and footer (do this in ONE place)

The sidebar nav ("The Spine") and the page footer are NOT duplicated across
the 9 files — they're generated at load time by `js/script.js` from three
arrays at the top of that file:

- `NAV_ITEMS` — the pages listed in the sidebar. Add/remove/reorder a page by
  editing this array; every page updates automatically. Each entry's `page`
  value must match the target page's `<body data-page="...">`.
- `SOCIAL_LINKS` — the links shown inside the expanded sidebar panel.
- `FOOTER_LINKS` — the links shown in the footer on every page.

To add a brand-new page: create the `.html` file (copy an existing one as a
starting point, keep its `<nav data-spine-mount>` / `<footer data-footer-mount>`
placeholders and `<body data-page="...">`), then add one entry to `NAV_ITEMS`.
That's the only shared file you need to touch.

## Images

Every `<img>` points at a placeholder file already in `assets/` (striped,
labeled with the exact filename). Drop your own photo in with the SAME
filename to replace it — no HTML edits needed:

- `assets/profile.jpg` — Home page portrait
- `assets/about.jpg` — About page portrait
- `assets/project-1.jpg` … `assets/project-6.jpg` — project thumbnails
- `assets/publication-cae-net.jpg` — publication figure
- `assets/CV.pdf` — add this file to power the embedded viewer + download
  button on `cv.html`

Photos wrapped in `.curtain-photo` (and project thumbnails) sharpen when
centered in the viewport and blur as they scroll toward the top/bottom edge —
the "curtain" effect, driven by `js/script.js`.

## Deploying

- **GitHub Pages:** push this folder to a repo, enable Pages on the `main`
  branch (root), done.
- **Netlify Drop:** drag the whole folder onto https://app.netlify.com/drop.
  The contact form (`contact.html`) is pre-wired for Netlify Forms
  (`data-netlify="true"`) and will start working automatically once deployed
  there; on GitHub Pages the "Email Me Directly" button is the working
  fallback.
