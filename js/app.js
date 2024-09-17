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

// make array of sections & remove header
const sections = Array.from(allMainChildren, (el) => el);
sections.shift();

// add section links to nav ul
function addSectionsToNav() {
  sections.forEach((section) => {
    const liEl = document.createElement("li");
    const aEl = document.createElement("a");
    aEl.href = `#${section.id}`;
    aEl.textContent = section.dataset.nav;
    aEl.classList.add("menu__link");
    liEl.appendChild(aEl);
    navUl.appendChild(liEl);
  });
}

addSectionsToNav();

// Add class 'active' to section when near top of viewport
function addActiveClass() {
  sections.forEach((section) => {
    const topOffset = section.getBoundingClientRect().top;
    const bottomOffset = section.getBoundingClientRect().bottom;
    const topThirdOfWindow = window.innerHeight / 3;
    if (topOffset <= topThirdOfWindow && bottomOffset > topThirdOfWindow) {
      section.classList.add("your-active-class");
    } else if (section.classList != null) {
      section.classList.remove("your-active-class");
    }
  });
}

// Scroll to anchor ID using scrollTO event

window.addEventListener("scroll", () => addActiveClass());

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
