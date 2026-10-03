# Md Kaidul Islam — Academic Portfolio

Static, dependency-free site (HTML/CSS/JS, no build step). Push to GitHub Pages and it works.

## Pages

```
index.html          About — short intro + latest news
publications.html   Publications
projects.html       Projects
cv.html             CV (embeds assets/CV.pdf)
misc.html           News archive, education, research, leadership, interests, contact
css/styles.css      The only stylesheet (colors for day + night are tokens at the top)
js/script.js        Nav, sidebar, footer, NEWS list, theme toggle, link previews
```

about / education / experience / awards / others / contact / publications-projects.html
are one-line redirects so old links keep working.

## Common edits

- **Add news:** add a line at the top of `NEWS` in `js/script.js`. The home page shows
  the first 5 (`<ul data-news="5">`), misc.html shows all.
- **Nav / sidebar links:** `NAV_ITEMS`, `SITE` and `AUTHOR_LINKS` in `js/script.js`.
- **Add a project or paper:** copy an `<article class="entry">` block. Give it an `id`
  so other pages can link to `projects.html#that-id`.
- **Thumbnails:** remove `no-thumb` from the article and add
  `<div class="entry-thumb"><img src="assets/x.jpg" alt="..." /></div>` as its first child.
- **Awards, test scores, tutorials, book reviews:** commented-out templates in misc.html.
- **Update CV:** replace `assets/CV.pdf` (same name).

## Link previews

Hovering a link to another page on this site shows that page (scrolled to the `#section`
if the link has one) in a popover you can scroll and read. Links to a `.pdf` show the PDF
itself, so reports linked as `assets/report.pdf` can be read without leaving the page.
Add `data-no-preview` to an `<a>` to turn it off. Previews only run on devices with a
mouse, and not when opening files directly from disk — to test locally run
`python -m http.server` in this folder and open http://localhost:8000.
