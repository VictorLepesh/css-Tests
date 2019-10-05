const navSlide = () => {
    const burgerIcon = document.querySelector(".burgerIcon");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, key) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${key / 7 + 1.5}s`;
            }
        });
        burgerIcon.classList.toggle("toggle");
    });
}

navSlide();