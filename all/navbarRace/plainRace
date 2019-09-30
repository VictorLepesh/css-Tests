const navSlide = () => {
    const burgerIcon = document.querySelector(".burgerIcon");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animatino) {
                link.style.animation = "";
            } else {
                link.style.animatino = `navLinkFade 0.5s ease forwards ${index /7 + 1.5}s`;
            }
        });
        burgerIcon.class.toggle("nav-active");
    });
}

navSlide();