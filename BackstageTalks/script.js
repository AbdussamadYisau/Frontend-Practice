// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('main > section');
//     const menuLinks = document.querySelectorAll('.menu a');

//     // Function to check if a section is in the viewport
//     function isInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//         );
//     }

//     // Function to set active class for menu links
//     function setMenuActiveClass() {
//         sections.forEach((section, index) => {
//             if (isInViewport(section)) {
//                 menuLinks.forEach(link => 
//                 link.classList.remove('active'));
//                 menuLinks[index].classList.add('active');
//             }
//         });
//     }


//     // Call setMenuActiveClass initially and on scroll
//     setMenuActiveClass();

//     window.addEventListener('scroll', function() {
//         console.log("Scroll event fired");
//         // setMenuActiveClass();
//     });


//        // Add click event listener to each anchor link
//        menuLinks.forEach(function(link) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default anchor behavior

//             // Get the target section ID from the href attribute
//             const targetId = link.getAttribute('href').substring(1);

//             // Find the corresponding section by ID
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 // Scroll to the target section smoothly
//                 targetSection.scrollIntoView({ behavior: 'smooth' });

//                 // Update the URL without triggering a page reload
//                 const url = window.location.origin + window.location.pathname + '#' + targetId;
//                 window.history.pushState({ path: url }, '', url);

//                 // Optionally, add a class to the active anchor link
//                 menuLinks.forEach(function(menuLink) {
//                     menuLink.classList.remove('active');
//                 });
//                 link.classList.add('active');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main > section');
    const menuLinks = document.querySelectorAll('.menu a');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Change this value as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const menuLink = document.querySelector(`.menu a[href="#${sectionId}"]`);

            if (entry.isIntersecting) {
                menuLinks.forEach(link => link.classList.remove('active'));
                menuLink.classList.add('active');

                // Update the URL without triggering a page reload
                const url = window.location.origin + window.location.pathname + '#' + sectionId;
                window.history.replaceState({ path: url }, '', url);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add click event listener to each anchor link
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                const url = window.location.origin + window.location.pathname + '#' + targetId;
                window.history.pushState({ path: url }, '', url);

                menuLinks.forEach(menuLink => menuLink.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});
