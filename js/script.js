/* ============================================================
   Md Kaidul Islam — Academic Portfolio
   Shared by every page. Builds the top nav, the author sidebar,
   the footer and the news lists from the data below, runs the
   day/night toggle, and shows hover previews of internal links.

   ---------------------------------------------------------------
   TO ADD NEWS:        add one line at the TOP of the NEWS array.
   TO EDIT THE NAV:    edit NAV_ITEMS (`page` must match the page's
                       <body data-page="...">).
   TO EDIT THE SIDEBAR: edit SITE and AUTHOR_LINKS.
   ============================================================ */

var SITE = {
  name: "Md Kaidul Islam",
  bio: "Adjunct Lecturer, Manarat International University. EEE, BUET. Computer vision, NLP &amp; deep learning.",
  avatar: "assets/profile.jpg"
};

var NAV_ITEMS = [
  { href: "index.html", page: "home", label: "About" },
  { href: "publications.html", page: "publications", label: "Publications" },
  { href: "projects.html", page: "projects", label: "Projects" },
  { href: "cv.html", page: "cv", label: "CV" },
  { href: "misc.html", page: "misc", label: "Misc" }
];

// Newest first. `text` may contain HTML; links to pages on this
// site get a hover preview automatically.
// The home page shows the first few; misc.html shows them all.
var NEWS = [
  { date: "Sep 2026", text: "Joined <a href=\"misc.html#teaching\">Manarat International University</a> as an Adjunct Lecturer, teaching Computer Programming and Computer Programming Laboratory." },
  { date: "Jun 2026", text: "Graduated with a B.Sc. in Electrical and Electronic Engineering from <a href=\"misc.html#education\">BUET</a>." },
  { date: "Apr 2026", text: "Completed my undergraduate thesis on <a href=\"misc.html#research\">tokenization and forgetting in Bangla OCR</a>." },
  { date: "2026", text: "Started two new projects: a <a href=\"projects.html#hybrid-router\">hybrid LLM router</a> and an <a href=\"projects.html#knee-mri\">edge-deployable knee MRI classifier</a>." },
  { date: "Jun 2025", text: "Co-founded the <a href=\"misc.html#leadership\">Thakurgaon Science Society</a> to bring hands-on science to remote schools." },
  { date: "May 2025", text: "Our paper <a href=\"publications.html#cae-net\">CAE-Net</a> on generalized deepfake detection was published in JVCIR (Elsevier, Q1)." },
  { date: "Apr 2025", text: "Started my thesis with Dr. Maruf Ahmed, Dept. of EEE, BUET." },
  { date: "Mar 2025", text: "Became Vice President of BUET Literature Club." },
  { date: "Mar 2024", text: "Became General Secretary of IEEE EDS BUET Student Branch." }
];

var ICONS = {
  location: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="10.5" r="3"></circle><path d="M12 21c4-4.2 7-7.8 7-11a7 7 0 1 0-14 0c0 3.2 3 6.8 7 11z"></path></svg>',
  cv: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><polyline points="14 3 14 8 19 8"></polyline><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg>',
  email: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  github: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
};

var AUTHOR_LINKS = [
  { icon: "location", label: "Dhaka, Bangladesh" },
  { icon: "email", label: "Email", href: "mailto:kaidul.tkg@gmail.com" },
  { icon: "github", label: "GitHub", href: "https://github.com/kay33d" },
  { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/kaidul-islam-007buet" },
  { icon: "cv", label: "CV (PDF)", href: "assets/CV.pdf" }
];

var MOON = '<svg class="icon-moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"></path></svg>';
var SUN = '<svg class="icon-sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>';

function buildMasthead(currentPage) {
  var links = NAV_ITEMS.map(function (n) {
    var active = n.page === currentPage ? ' class="is-active" aria-current="page"' : "";
    return '<a href="' + n.href + '"' + active + ">" + n.label + "</a>";
  }).join("");
  return (
    '<div class="masthead-inner">' +
      '<a class="site-title" href="index.html">' + SITE.name + "</a>" +
      '<nav class="nav" aria-label="Main">' + links + "</nav>" +
      '<button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle day/night mode" title="Toggle day/night mode">' + MOON + SUN + "</button>" +
    "</div>"
  );
}

function buildSidebar() {
  var links = AUTHOR_LINKS.map(function (l) {
    var icon = '<span class="icon icon-' + l.icon + '">' + ICONS[l.icon] + "</span>";
    if (!l.href) return "<li><span>" + icon + l.label + "</span></li>";
    var ext = /^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : "";
    return '<li><a href="' + l.href + '"' + ext + ' data-no-preview>' + icon + l.label + "</a></li>";
  }).join("");
  return (
    '<img class="author-avatar" src="' + SITE.avatar + '" alt="Portrait of ' + SITE.name + '" />' +
    '<p class="author-name">' + SITE.name + "</p>" +
    '<p class="author-bio">' + SITE.bio + "</p>" +
    '<ul class="author-links">' + links + "</ul>"
  );
}

function buildFooter() {
  var links = NAV_ITEMS.map(function (n) {
    return '<a href="' + n.href + '" data-no-preview>' + n.label + "</a>";
  }).join("");
  return (
    '<div class="footer-inner">' +
      "<span>&copy; " + new Date().getFullYear() + " " + SITE.name + ". Dhaka, Bangladesh.</span>" +
      "<nav>" + links + "</nav>" +
    "</div>"
  );
}

// Fills every <ul data-news> in `root`. data-news="5" limits the count.
function renderNews(root) {
  var lists = root.querySelectorAll("[data-news]");
  Array.prototype.forEach.call(lists, function (ul) {
    var limit = parseInt(ul.getAttribute("data-news"), 10) || NEWS.length;
    ul.classList.add("news");
    ul.innerHTML = NEWS.slice(0, limit).map(function (n) {
      return '<li><span class="news-date">' + n.date + "</span><span>" + n.text + "</span></li>";
    }).join("");
  });
}

/* ---------- Day / night ---------- */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

/* ============================================================
   LINK PREVIEWS — hover an internal link to see what it points
   to: just the linked project/section for links with a #id, a
   short overview for whole pages (see excerpt() below). Links
   to PDFs open the document itself inside the popover.
   Only on devices with a real mouse; touch taps just navigate.
   Add data-no-preview to any <a> to opt it out.
   ============================================================ */
function initPreviews() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (location.protocol === "file:") return; // fetch() is blocked on file:// — use a local server to test

  var pop = document.createElement("div");
  pop.className = "preview";
  pop.setAttribute("role", "tooltip");
  document.body.appendChild(pop);

  var cache = {};
  var showTimer = null;
  var hideTimer = null;
  var currentLink = null;
  var here = location.pathname.split("/").pop() || "index.html";

  function previewable(a) {
    if (!a || a.hasAttribute("data-no-preview") || a.closest(".preview, .masthead")) return null;
    var raw = a.getAttribute("href");
    if (!raw || raw.charAt(0) === "#" || /^(mailto|tel|javascript):/i.test(raw)) return null;
    var url = new URL(raw, location.href);
    if (url.origin !== location.origin) return null;
    var file = url.pathname.split("/").pop() || "index.html";
    if (/\.pdf$/i.test(file)) return { url: url, kind: "pdf" };
    if (!/\.html$/i.test(file)) return null;
    if (file === here) return null; // same page — just an anchor jump
    return { url: url, kind: "html" };
  }

  // Resolves to the linked page's <main>, parsed once and cached.
  function load(target) {
    var key = target.url.pathname;
    if (!cache[key]) {
      cache[key] = fetch(key)
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(function (html) {
          var doc = new DOMParser().parseFromString(html, "text/html");
          var main = doc.querySelector(".page-content");
          if (!main) throw new Error("no content");
          renderNews(main);
          return main;
        });
    }
    return cache[key];
  }

  // What the popover shows:
  //  - link with #id  -> only that item (the <article> or <section> holding it)
  //  - plain page link -> elements marked data-preview, or else the page title,
  //                       its first paragraph and a list of what's on the page
  function excerpt(main, url) {
    var out = document.createElement("div");
    var page = url.pathname.split("/").pop() || "index.html";
    var add = function (n) { if (n) out.appendChild(n.cloneNode(true)); };

    var id = decodeURIComponent(url.hash.slice(1));
    var target = id && main.querySelector('[id="' + id.replace(/"/g, "") + '"]');
    if (target) {
      add(target.closest("article, section") || target);
    } else {
      var marked = main.querySelectorAll("[data-preview]");
      if (marked.length) {
        Array.prototype.forEach.call(marked, add);
      } else {
        add(main.querySelector("h1"));
        add(main.querySelector("h1 ~ p"));
        var items = main.querySelectorAll("article[id], section[id]");
        if (items.length) {
          var ul = document.createElement("ul");
          ul.className = "preview-list";
          Array.prototype.forEach.call(items, function (it) {
            var title = it.querySelector(".entry-title, h2");
            if (!title) return;
            var li = document.createElement("li");
            li.innerHTML = '<a href="' + page + "#" + it.id + '">' + title.textContent.trim() + "</a>";
            ul.appendChild(li);
          });
          out.appendChild(ul);
        }
      }
    }

    // In-page anchors must point at the linked page, not this one;
    // and drop ids so they don't clash with this document's.
    Array.prototype.forEach.call(out.querySelectorAll('a[href^="#"]'), function (a) {
      a.setAttribute("href", page + a.getAttribute("href"));
    });
    Array.prototype.forEach.call(out.querySelectorAll("[id]"), function (n) { n.removeAttribute("id"); });
    return out.innerHTML;
  }

  // Put the popover below the link, or above it if there's more room
  // there, and shrink it so it never runs off the window.
  function place(a) {
    var r = a.getBoundingClientRect();
    var gap = 8;
    var edge = 12;
    var spaceBelow = window.innerHeight - r.bottom - gap - edge;
    var spaceAbove = r.top - gap - edge;
    pop.style.maxHeight = "";
    pop.style.height = "";
    var h = pop.offsetHeight;
    var below = h <= spaceBelow || spaceBelow >= spaceAbove;
    var room = below ? spaceBelow : spaceAbove;
    if (h > room) {
      pop.style[pop.classList.contains("is-pdf") ? "height" : "maxHeight"] = room + "px";
      h = room;
    }
    var w = pop.offsetWidth;
    var left = Math.min(Math.max(16, r.left), window.innerWidth - w - 16);
    var top = below ? r.bottom + gap : r.top - gap - h;
    pop.style.left = left + window.scrollX + "px";
    pop.style.top = top + window.scrollY + "px";
  }

  function show(a, target) {
    currentLink = a;
    if (target.kind === "pdf") {
      pop.className = "preview is-pdf";
      pop.innerHTML = '<iframe src="' + target.url.pathname + '#navpanes=0&pagemode=none&view=FitH" title="PDF preview"></iframe>';
      place(a);
      pop.classList.add("is-visible");
      return;
    }
    load(target).then(function (main) {
      if (currentLink !== a) return;
      pop.className = "preview";
      pop.innerHTML = excerpt(main, target.url);
      pop.scrollTop = 0;
      place(a);
      pop.classList.add("is-visible");
    }).catch(function () { /* no preview — the link still works */ });
  }

  function hide() {
    currentLink = null;
    pop.classList.remove("is-visible");
    pop.innerHTML = "";
  }

  document.addEventListener("mouseover", function (e) {
    if (pop.contains(e.target)) { clearTimeout(hideTimer); return; }
    var a = e.target.closest && e.target.closest("a");
    if (a && a === currentLink) { clearTimeout(hideTimer); return; }
    // Pointer is somewhere else on the page (this also catches leaving a
    // PDF iframe, which swallows its own mouse events) — close soon.
    if (currentLink) { clearTimeout(hideTimer); hideTimer = setTimeout(hide, 250); }
    var target = previewable(a);
    if (!target) return;
    clearTimeout(showTimer);
    showTimer = setTimeout(function () { show(a, target); }, 300);
  });

  document.addEventListener("mouseout", function (e) {
    var a = e.target.closest && e.target.closest("a");
    var leavingPop = pop.contains(e.target) && !pop.contains(e.relatedTarget);
    if ((a && previewable(a)) || leavingPop) {
      clearTimeout(showTimer);
      if (e.relatedTarget && pop.contains(e.relatedTarget)) return;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(hide, 250);
    }
  });

  document.addEventListener("keydown", function (e) { if (e.key === "Escape") hide(); });
  window.addEventListener("resize", hide);
}

document.addEventListener("DOMContentLoaded", function () {
  var page = document.body.getAttribute("data-page");

  var mast = document.querySelector("[data-masthead-mount]");
  if (mast) mast.innerHTML = buildMasthead(page);

  var side = document.querySelector("[data-sidebar-mount]");
  if (side) side.innerHTML = buildSidebar();

  var foot = document.querySelector("[data-footer-mount]");
  if (foot) foot.innerHTML = buildFooter();

  renderNews(document);

  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(dark ? "light" : "dark");
    });
  }

  initPreviews();
});
