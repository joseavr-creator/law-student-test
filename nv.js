/* =========================================================
   SHARED NAVIGATION SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*
       Create the navigation element
    */

    const navigation = document.createElement("nav");

    navigation.className = "site-navigation";


    /*
       Navigation HTML
    */

    navigation.innerHTML = `

        <div class="nav-container">

            <div class="nav-links">

                <a href="about.html" data-page="about">
                    About
                </a>

                <a href="contact.html" data-page="contact">
                    Contact
                </a>

                <a href="education.html" data-page="education">
                    Education
                </a>

                <a href="goals.html" data-page="goals">
                    Goals
                </a>

                <a href="interests.html" data-page="interests">
                    Interests
                </a>

                <a href="extracurriculars.html" data-page="extracurriculars">
                    Extracurriculars
                </a>

            </div>

        </div>

    `;


    /*
       Find the header and insert navigation
       directly underneath it.
    */

    const header = document.querySelector(".site-header");

    if (header) {

        header.insertAdjacentElement(
            "afterend",
            navigation
        );

    } else {

        /*
           If a page doesn't have a header,
           put navigation at the beginning of body.
        */

        document.body.insertBefore(
            navigation,
            document.body.firstChild
        );

    }


    /*
       Determine which page is currently open
    */

    let currentPage = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "")
        .toLowerCase();


    /*
       Get all navigation links
    */

    const navLinks = document.querySelectorAll(
        ".nav-links a"
    );


    /*
       Highlight the current page
    */

    navLinks.forEach(function (link) {

        const page = link
            .getAttribute("data-page")
            .toLowerCase();


        if (page === currentPage) {

            link.classList.add("active");

        }

    });

});
