/* ============================================================
   Md Kaidul Islam — Academic Portfolio
   The menu, sidebar, footer and news are built by Jekyll (see
   _layouts/, _includes/ and _data/). This script only runs the
   day/night toggle and the hover previews of internal links.
   ============================================================ */

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
          return main;
        });
    }
    return cache[key];
  }

  // What the popover shows:
  //  - link with #id  -> only that item: the <article> holding it, or for a
  //                       heading, the heading plus everything up to the next
  //                       heading of the same level
  //  - plain page link -> elements marked data-preview, or else the page title,
  //                       its first paragraph and a list of what's on the page
  function excerpt(main, url) {
    var out = document.createElement("div");
    var page = url.pathname.split("/").pop() || "index.html";
    var add = function (n) { if (n) out.appendChild(n.cloneNode(true)); };

    var id = decodeURIComponent(url.hash.slice(1));
    var target = id && main.querySelector('[id="' + id.replace(/"/g, "") + '"]');
    if (target) {
      var block = target.closest("article, section");
      if (block) {
        add(block);
      } else if (/^H[1-6]$/.test(target.tagName)) {
        var level = +target.tagName.charAt(1);
        for (var n = target; n; n = n.nextElementSibling) {
          if (n !== target && /^H[1-6]$/.test(n.tagName) && +n.tagName.charAt(1) <= level) break;
          add(n);
        }
      } else {
        add(target);
      }
    } else {
      var marked = main.querySelectorAll("[data-preview]");
      if (marked.length) {
        Array.prototype.forEach.call(marked, add);
      } else {
        add(main.querySelector("h1"));
        add(main.querySelector("h1 ~ p"));
        var items = main.querySelectorAll("article[id], section[id], .page-content > h2[id]");
        if (items.length) {
          var ul = document.createElement("ul");
          ul.className = "preview-list";
          Array.prototype.forEach.call(items, function (it) {
            var title = it.tagName === "H2" ? it : it.querySelector(".entry-title, h2");
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
  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(dark ? "light" : "dark");
    });
  }

  initPreviews();
});
