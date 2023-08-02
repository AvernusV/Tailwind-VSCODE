const toggleMenu = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
    headerNav.classList.toggle('h-[23rem]');
});