 window.addEventListener("scroll",() => {
        const navbar = document.querySelector(".navbar");

        if (window.scrollY >=56) {
            navbar.classList.add("navbar-scrolled");
        } else if(window.scrollY < 56) {
            navbar.classList.remove("navbar-scrolled");
        }
    });