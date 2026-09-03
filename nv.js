```javascript
// navigation.js
// Shared navigation system for the entire website

document.addEventListener("DOMContentLoaded", function () {

    // Create the navigation bar
    const nav = document.createElement("nav");

    nav.className = "site-navigation";

    nav.innerHTML = `
        <div class="nav-container">

            <a href="index.html" class="nav-logo">
                YOUR NAME
            </a>

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

    // Insert navigation at the very beginning of the page
    document.body.insertBefore(nav, document.body.firstChild);


    // Determine which page the visitor is currently on
    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "")
        .toLowerCase();


    // Highlight the current page
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        const page = link.getAttribute("data-page");

        if (page === currentPage) {
            link.classList.add("active");
        }

    });


    // Add "home" styling when the visitor is on index.html
    if (
        currentPage === "" ||
        currentPage === "index" ||
        currentPage === "index.html"
    ) {
        document.querySelector(".nav-logo").classList.add("active-logo");
    }

});
```
