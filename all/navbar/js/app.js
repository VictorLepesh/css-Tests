const navSlide = () => {
    const burgerIcon = document.querySelector(".burgerIcon");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // Toggle Nav
    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        // Animate links
        navLinks.forEach((link, index) => {
            // Use backticks for the string to make it work.
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
            console.log(link.style.animation);

            //`navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s` 
        });

        //BurgerIcon animation
        burgerIcon.classList.toggle("toggle");
    });

    
} 


navSlide();