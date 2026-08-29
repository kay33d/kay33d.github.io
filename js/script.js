/* ============================================================
   Md Kaidul Islam — Academic Portfolio
   Global script: builds the always-visible sidebar nav + site
   footer from the data below, drives the sliding hover indicator,
   the curtain photo blur, and the Featured Work carousel blur.
   Shared by every page.

   ---------------------------------------------------------------
   TO ADD / REMOVE / REORDER A PAGE IN THE NAV:
     Edit the NAV_ITEMS array below — every page updates at once.
     `page` must match the matching page's <body data-page="...">.

   TO ADD / REMOVE A SOCIAL OR CONTACT LINK (footer + sidebar foot):
     Edit SOCIAL_LINKS (shown at the bottom of the sidebar) and/or
     FOOTER_LINKS (shown in the page footer) below.
   ============================================================ */

var SITE = {
  name: "Md Kaidul Islam",
  role: "EEE, BUET",
  brandImage: "assets/profile.jpg",
  brandHref: "index.html"
};

var NAV_ITEMS = [
  { href: "index.html", page: "home", label: "Home" },
  { href: "about.html", page: "about", label: "About Me" },
  { href: "education.html", page: "education", label: "Education" },
  { href: "experience.html", page: "experience", label: "Professional Experience" },
  { href: "cv.html", page: "cv", label: "Curriculum Vitae" },
  { href: "publications-projects.html", page: "publications", label: "Publications & Projects" },
  { href: "awards.html", page: "awards", label: "Honors & Awards" },
  { href: "others.html", page: "others", label: "Others" },
  { href: "contact.html", page: "contact", label: "Contact" }
];

// Shown at the bottom of the sidebar.
var SOCIAL_LINKS = [
  { key: "linkedin", href: "https://linkedin.com/in/kaidul-islam-007buet", label: "LinkedIn", external: true },
  { key: "github", href: "https://github.com/kay33d", label: "GitHub", external: true }
];

// Shown in the site-wide page footer.
var FOOTER_LINKS = [
  { key: "email", href: "mailto:kaidul.tkg@gmail.com", label: "Email", external: false },
  { key: "phone", href: "tel:+8801521765996", label: "Phone", external: false },
  { key: "linkedin", href: "https://linkedin.com/in/kaidul-islam-007buet", label: "LinkedIn", external: true },
  { key: "github", href: "https://github.com/kay33d", label: "GitHub", external: true }
];

// Icon badges for every link. Email/LinkedIn/GitHub use the real
// service logos (assets/icon-*.png) — swap the file to re-brand.
// Phone has no logo, so it keeps a small generic glyph.
var ICONS = {
  email: { type: "img", src: "assets/icon-gmail.png" },
  phone: {
    type: "svg",
    markup:
      '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.6 3.8c.8 0 1.6.5 1.8 1.3l.6 1.9c.2.6 0 1.3-.5 1.8L7.4 10c1.2 2.3 3.1 4.2 5.4 5.4l1.2-1.2c.5-.5 1.2-.7 1.8-.5l1.9.6c.8.2 1.3 1 1.3 1.8v1.9c0 1.2-1 2.1-2.2 2C10.2 20.5 3.5 13.8 3.2 6.2c0-1.2 1-2.2 2.2-2.2h1.2z"></path></svg>'
  },
  linkedin: { type: "img", src: "assets/icon-linkedin.png" },
  github: { type: "img", src: "assets/icon-github.png" }
};

function iconHTML(key) {
  var icon = ICONS[key];
  if (!icon) return "";
  if (icon.type === "img") {
    return '<span class="link-icon link-icon--logo"><img src="' + icon.src + '" alt="" /></span>';
  }
  return '<span class="link-icon">' + icon.markup + "</span>";
}

function linkHTML(item) {
  var arrow = item.external ? " ↗" : "";
  return (
    '<a href="' + item.href + '"' + (item.external ? ' target="_blank" rel="noopener"' : "") + ">" +
      iconHTML(item.key) +
      '<span class="link-label">' + item.label + arrow + "</span>" +
    "</a>"
  );
}

function buildSpineHTML(currentPage) {
  var linksHTML = NAV_ITEMS.map(function (n) {
    var active = n.page === currentPage ? " is-active" : "";
    return '<a class="side-link' + active + '" href="' + n.href + '" data-page="' + n.page + '">' + n.label + "</a>";
  }).join("");

  var dotsHTML = NAV_ITEMS.map(function (n) {
    var active = n.page === currentPage ? " is-active" : "";
    return '<a class="side-dot' + active + '" href="' + n.href + '" title="' + n.label + '"><i></i></a>';
  }).join("");

  var socialHTML = SOCIAL_LINKS.map(linkHTML).join("");

  return (
    // Collapsed state: one ring per page — filled ring = current page.
    // Hover (or tap, on touch) reveals the full labeled list below.
    '<div class="side-collapsed" aria-hidden="true">' + dotsHTML + "</div>" +
    '<div class="side-expanded">' +
      '<a class="side-brand" href="' + SITE.brandHref + '" aria-label="' + SITE.name + ' — Home">' +
        '<span class="side-brand-avatar"><img src="' + SITE.brandImage + '" alt="" /></span>' +
        '<span class="side-brand-text">' + SITE.name + "<small>" + SITE.role + "</small></span>" +
      "</a>" +
      '<div class="side-links" data-side-links>' +
        '<span class="side-indicator" data-side-indicator aria-hidden="true"></span>' +
        linksHTML +
      "</div>" +
      '<div class="side-foot">' + socialHTML + "</div>" +
    "</div>"
  );
}

function buildFooterHTML() {
  var linksHTML = FOOTER_LINKS.map(linkHTML).join("");
  return (
    '<div class="footer-inner">' +
      "<p>&copy; 2026 " + SITE.name + ". Dhaka, Bangladesh.</p>" +
      '<div class="footer-links">' + linksHTML + "</div>" +
    "</div>"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var currentPage = document.body.getAttribute("data-page");

  /* ---------- Build footer from data ---------- */
  var footerMount = document.querySelector("[data-footer-mount]");
  if (footerMount) {
    footerMount.innerHTML = buildFooterHTML();
  }

  /* ---------- SIDEBAR: always visible, sliding highlight ---------- */
  var spine = document.querySelector("[data-spine]");

  if (spine) {
    spine.innerHTML = buildSpineHTML(currentPage);

    // Touch fallback: hover doesn't exist on touch devices, so tapping
    // the collapsed rail (outside an actual link) pins it open; tapping
    // a link, tapping elsewhere, or Escape closes it again.
    spine.addEventListener("click", function (e) {
      if (!e.target.closest("a")) {
        spine.classList.toggle("is-open");
      }
    });
    document.addEventListener("click", function (e) {
      if (spine.classList.contains("is-open") && !spine.contains(e.target)) {
        spine.classList.remove("is-open");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        spine.classList.remove("is-open");
      }
    });

    var sideLinksWrap = spine.querySelector("[data-side-links]");
    var indicator = spine.querySelector("[data-side-indicator]");
    var linkEls = spine.querySelectorAll(".side-link");
    var activeLink = spine.querySelector(".side-link.is-active") || linkEls[0];

    function isHorizontalNav() {
      return window.matchMedia("(max-width: 760px)").matches;
    }

    function moveIndicatorTo(el) {
      if (!el || !indicator) return;
      if (isHorizontalNav()) {
        indicator.style.width = el.offsetWidth + "px";
        indicator.style.height = "3px";
        indicator.style.top = "auto";
        indicator.style.bottom = "0";
        indicator.style.transform = "translateX(" + el.offsetLeft + "px)";
      } else {
        indicator.style.width = "3px";
        indicator.style.height = el.offsetHeight + "px";
        indicator.style.bottom = "auto";
        indicator.style.top = "0";
        indicator.style.transform = "translateY(" + el.offsetTop + "px)";
      }
    }

    if (indicator && activeLink) {
      linkEls.forEach(function (a) {
        a.addEventListener("mouseenter", function () { moveIndicatorTo(a); });
        a.addEventListener("focus", function () { moveIndicatorTo(a); });
      });
      if (sideLinksWrap) {
        sideLinksWrap.addEventListener("mouseleave", function () { moveIndicatorTo(activeLink); });
      }
      window.addEventListener("resize", function () { moveIndicatorTo(activeLink); });
      window.addEventListener("load", function () { moveIndicatorTo(activeLink); });
      // Fonts/layout may still be settling on first paint — snap into place shortly after.
      requestAnimationFrame(function () { moveIndicatorTo(activeLink); });
      setTimeout(function () { moveIndicatorTo(activeLink); }, 200);
    }
  }

  /* ---------- CURTAIN PHOTO BLUR ----------
     Photos are sharp when centered in the viewport and blur
     progressively — like a curtain drawing across them — as
     they scroll toward the top or bottom edge.
  ------------------------------------------- */
  var curtainImgs = Array.prototype.filter.call(
    document.querySelectorAll(".curtain-photo img, .card-thumb img"),
    function (img) {
      // Featured Work thumbnails already get their own left/right blur
      // from the carousel below — skip them here to avoid double-blurring.
      return !img.closest(".featured-card");
    }
  );

  if (curtainImgs.length) {
    var ticking = false;
    var MAX_BLUR_PX = 9;
    var MAX_SCALE_BUMP = 0.035;
    var MAX_OPACITY_DROP = 0.3;

    function updateCurtain() {
      var vh = window.innerHeight;

      curtainImgs.forEach(function (img) {
        var rect = img.getBoundingClientRect();

        if (rect.bottom < -200 || rect.top > vh + 200) {
          return;
        }

        var center = rect.top + rect.height / 2;
        var dist = Math.abs(center - vh / 2);
        var maxDist = vh / 2 + rect.height / 2;
        var ratio = Math.min(1, dist / (maxDist || 1));

        img.style.filter = "blur(" + (ratio * MAX_BLUR_PX).toFixed(2) + "px)";
        img.style.transform = "scale(" + (1 + ratio * MAX_SCALE_BUMP).toFixed(3) + ")";
        img.style.opacity = (1 - ratio * MAX_OPACITY_DROP).toFixed(2);
      });

      ticking = false;
    }

    function requestCurtainUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(updateCurtain);
        ticking = true;
      }
    }

    window.addEventListener("scroll", requestCurtainUpdate, { passive: true });
    window.addEventListener("resize", requestCurtainUpdate);
    updateCurtain();
  }

  /* ---------- FEATURED WORK CAROUSEL ----------
     A horizontally-scrolling, snap-aligned row where only the
     centered card stays sharp; the rest blur/recede by distance
     from center. Drag/scroll or use the arrow buttons to browse.
  ------------------------------------------- */
  var track = document.querySelector("[data-featured-track]");

  if (track) {
    var viewport = track.parentElement; // .featured-viewport — the element that actually scrolls
    var cards = track.querySelectorAll(".featured-card");
    var featureTicking = false;

    function updateFeatured() {
      var trackRect = track.getBoundingClientRect();
      var centerX = trackRect.left + trackRect.width / 2;

      cards.forEach(function (card) {
        var rect = card.getBoundingClientRect();
        var cardCenter = rect.left + rect.width / 2;
        var dist = Math.abs(cardCenter - centerX);
        var maxDist = trackRect.width / 2 + rect.width / 2;
        var ratio = Math.min(1, dist / (maxDist || 1));

        card.style.filter = "blur(" + (ratio * 6.5).toFixed(2) + "px)";
        card.style.opacity = (1 - ratio * 0.6).toFixed(2);
        card.style.transform = "scale(" + (1 - ratio * 0.12).toFixed(3) + ")";
      });

      featureTicking = false;
    }

    function requestFeaturedUpdate() {
      if (!featureTicking) {
        window.requestAnimationFrame(updateFeatured);
        featureTicking = true;
      }
    }

    viewport.addEventListener("scroll", requestFeaturedUpdate, { passive: true });
    window.addEventListener("resize", requestFeaturedUpdate);
    requestAnimationFrame(updateFeatured);
    setTimeout(updateFeatured, 250);

    var prevBtn = document.querySelector("[data-featured-prev]");
    var nextBtn = document.querySelector("[data-featured-next]");
    function scrollByCard(dir) {
      var card = cards[0];
      var step = card ? card.getBoundingClientRect().width + 28 : 300;
      viewport.scrollBy({ left: dir * step, behavior: "smooth" });
    }
    if (prevBtn) prevBtn.addEventListener("click", function () { scrollByCard(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { scrollByCard(1); });

    // A plain vertical mouse wheel can't scroll a horizontal track —
    // translate vertical wheel motion into horizontal scroll here.
    viewport.addEventListener(
      "wheel",
      function (e) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          viewport.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      },
      { passive: false }
    );

    // Click-and-drag scrolling for mouse users (touch/trackpad already
    // scroll natively via the browser).
    var isDragging = false;
    var dragStartX = 0;
    var dragStartScroll = 0;
    var dragMoved = false;

    viewport.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch") return;
      isDragging = true;
      dragMoved = false;
      dragStartX = e.clientX;
      dragStartScroll = viewport.scrollLeft;
      viewport.setPointerCapture(e.pointerId);
    });

    viewport.addEventListener("pointermove", function (e) {
      if (!isDragging) return;
      var delta = e.clientX - dragStartX;
      if (Math.abs(delta) > 3) dragMoved = true;
      viewport.scrollLeft = dragStartScroll - delta;
    });

    function endDrag() {
      isDragging = false;
    }
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    // Prevent an accidental click-through (e.g. opening a project link)
    // right after a drag gesture.
    viewport.addEventListener(
      "click",
      function (e) {
        if (dragMoved) {
          e.preventDefault();
          e.stopPropagation();
          dragMoved = false;
        }
      },
      true
    );
  }
});
