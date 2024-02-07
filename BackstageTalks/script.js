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
