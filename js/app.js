/**
 * test
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navUl = document.querySelector("#navbar__list");
const mainEl = document.querySelector("main");
const allMainChildren = mainEl.children;
// make array of sections within main & remove header
const sections = Array.from(allMainChildren, (el) => el);
sections.shift();
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function addSectionsToNav() {
  sections.forEach((section) => {
    const liEl = document.createElement("li");
    const aEl = document.createElement("a");
    aEl.href = `#${section.id}`;
    aEl.textContent = section.dataset.nav;
    aEl.classList.add("menu__link");
    aEl.classList.add(section.id);
    liEl.appendChild(aEl);
    navUl.appendChild(liEl);
  });
}

// Add class 'active' to section when near top of viewport
function addActiveClass() {
  sections.forEach((section) => {
    const topOffset = section.getBoundingClientRect().top;
    const bottomOffset = section.getBoundingClientRect().bottom;
    const topThirdOfWindow = window.innerHeight / 3;
    const navLink = navUl.querySelector(`.${section.id}`);
    if (topOffset <= topThirdOfWindow && bottomOffset > topThirdOfWindow) {
      section.classList.add("your-active-class");
      navLink.classList.add("nav-active");
    } else if (section.classList != null) {
      section.classList.remove("your-active-class");
      navLink.classList.remove("nav-active");
    }
  });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(e) {
  const linkId = e.target.href.split("#")[1];
  const targetEl = document.querySelector(`#${linkId}`);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
addSectionsToNav();
// Scroll to section on link click
navUl.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection(e);
});
// Set sections as active
window.addEventListener("scroll", () => addActiveClass());
