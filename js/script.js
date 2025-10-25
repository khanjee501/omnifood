console.log("Hello world...!");

//////////////////////////////////////////
// adding dynamic year to copyright text.
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
// toggle will add the nav-open class if not present,
// otherwise it will remove it if present
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////
// SMooth scrolling on safari

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // we need to prevent the default behaviour and get href
    // with which we will write some logic
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll to top for #
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // cannot use scrollTo cuz that will require top and
      // we don't know where to scroll hance scrollIntoView
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation upon clicking a link
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

/////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
  }
);

obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
