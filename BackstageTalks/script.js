document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main > section');
    const menuLinks = document.querySelectorAll('.menu a');

    // Function to check if a section is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Function to set active class for menu links
    function setMenuActiveClass() {

        console.log("Here");
        sections.forEach((section, index) => {
            if (isInViewport(section)) {
                menuLinks.forEach(link => 
                link.classList.remove('active'));
                menuLinks[index].classList.add('active');
            }
        });
    }


    // Call setMenuActiveClass initially and on scroll
    setMenuActiveClass();

    window.addEventListener('click', function() {
        console.log("Click function fired");
    });
    window.addEventListener('scroll', function() {
        console.log("Scroll event fired");
        // setMenuActiveClass();
    });


       // Add click event listener to each anchor link
       menuLinks.forEach(function(link) {

        console.log("Did we get here?")
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Get the target section ID from the href attribute
            const targetId = link.getAttribute('href').substring(1);

            // Find the corresponding section by ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Update the URL without triggering a page reload
                const url = window.location.origin + window.location.pathname + '#' + targetId;
                window.history.pushState({ path: url }, '', url);

                // Optionally, add a class to the active anchor link
                menuLinks.forEach(function(menuLink) {
                    menuLink.classList.remove('active');
                });
                link.classList.add('active');
            }
        });
    });
});
