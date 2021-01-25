const app = (() => {
    const _closeButton = document.querySelector(".header__close");
    const _openButton = document.querySelector(".header__hamburger");
    const _headerMenu = document.querySelector(".header__list");
    const _headerMenuHeading = document.querySelector(".header__menu-heading");

    _openButton.addEventListener("click", (event) => {
        showMenu();
    })

    _closeButton.addEventListener("click", (event) => {
        hideMenu();
    })

    function showMenu() {
        _headerMenu.classList.add("show");
        _headerMenuHeading.classList.add("show");
    }

    function hideMenu() {
        _headerMenu.classList.remove("show");
        _headerMenuHeading.classList.remove("show");
    }
})();