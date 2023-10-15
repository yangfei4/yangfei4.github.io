function PositionListener() {
    // Get all the section elements
    const sections = document.querySelectorAll("section[id]");
    const header = document.querySelector("header");

    const last_sections = document.querySelector("#contact");

    // Highlight the active navbar item
    function highlightNavbar() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const offset = 80; // offset to highlight the navbar item

            // If scroll to the bottom, make the last section active
            if (scrollPosition + window.innerHeight >= document.body.offsetHeight ) {
                console.log("scroll to the bottom");
                document.querySelectorAll(".navbar-item").forEach((item) => {
                    item.classList.remove("active");
                });

                const menuItem = document.querySelector(`a[href='#${last_sections.id}']`);
                if (menuItem) {
                    menuItem.classList.add("active");
                }
            }
            else if (scrollPosition >= (sectionTop-offset) && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll(".navbar-item").forEach((item) => {
                    item.classList.remove("active");
                });

                const menuItem = document.querySelector(`a[href='#${section.id}']`);
                if (menuItem) {
                    menuItem.classList.add("active");
                }
            }
        });

        // Navbar Resizing
        if (scrollPosition < 10) {
            header.classList.add("active");
        }
        else {
            header.classList.remove("active");
        }

    }

    window.addEventListener("scroll", highlightNavbar);

    // Call the function once to set the initial state
    highlightNavbar();
};

PositionListener();