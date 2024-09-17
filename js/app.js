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
document.addEventListener("click", () => console.log("i be clicked"));
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

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
