const navSlide = () => {
    const burgerIcon = document.querySelector(".burgerIcon");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burgerIcon.addEventListener("click", () => { // Toggle Nav
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => { // Animate links
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`; // Use backticks for the string to make it work.
            } //console.log(link.style.animation);
        });
        burgerIcon.classList.toggle("toggle"); //BurgerIcon animation
    });
} 

navSlide();