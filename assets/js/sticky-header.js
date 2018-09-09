/*var hero = document.querySelector(".site-header"),
  header_height = getComputedStyle(hero).height.split("px")[0],
  nav = hero.querySelector(".home-page-introduction"),
  title_height = getComputedStyle(nav).height.split("px")[0],
  fix_class = "is-scrolled";

function stickyScroll(e) {
  if (window.pageYOffset > (header_height - title_height) / 2) {
    nav.classList.add(fix_class);
  }

  if (window.pageYOffset < (header_height - title_height) / 2) {
    nav.classList.remove(fix_class);
  }
}

// Scroll handler to toggle classes.
window.addEventListener("scroll", stickyScroll, false);
*/
// http://blog.grayghostvisuals.com/js/detecting-scroll-position/
var mobileButton = document.getElementById('mobile-menu-icon');
var siteMenu = document.getElementById('site-header');

mobileButton.addEventListener("click", function(){
  siteMenu.classList.toggle("hidden-menu");
});