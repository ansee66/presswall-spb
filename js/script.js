const burger = document?.querySelector(".header__burger");
const nav = document?.querySelector(".header__nav");
const body = document.body;
const navItems = nav?.querySelectorAll("a");

burger?.addEventListener("click", () => {
    body.classList.toggle("stop-scroll");
    burger?.classList.toggle("burger--active");
    nav?.classList.toggle("header__nav--visible");
});

navItems.forEach((el) => {
    el.addEventListener("click", () => {
        body.classList.remove("stop-scroll");
        burger?.classList.remove("burger--active");
        nav?.classList.remove("header__nav--visible");
    });
});
