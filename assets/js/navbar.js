window.onscroll = () => {
  const navbar = document.querySelector("header");
  const navbarLogo = document.querySelector(".navbar-logo")
  const onScroll = navbar.offsetTop;
  const pageOffY = window.pageYOffset;

  if (pageOffY > onScroll) {
    navbar.classList.add("fixed");
    navbarLogo.classList.add("scroll")
} else {
    navbar.classList.remove("fixed");
    navbarLogo.classList.remove("scroll")
}
};
