document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main > section');
    const menuLinks = document.querySelectorAll('.menu a');

// Define an object to store the original background colors of the sections
const originalBackgroundColors = {};

// Store the original background colors of each section
sections.forEach(section => {
    originalBackgroundColors[section.id] = section.style.backgroundColor;
});



    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Change this value as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const menuLink = document.querySelector(`.menu a[href="#${sectionId}"]`);
            const mainElement = document.querySelector('main');

            const sectionStyles = getComputedStyle(entry.target);
            const currentBackgroundColor = sectionStyles.backgroundColor;

            // console.log("Background color", currentBackgroundColor);
    
            if (entry.isIntersecting) {
                menuLinks.forEach(link => link.classList.remove('active'));
                menuLink.classList.add('active');
    
                // Update the URL without triggering a page reload
                const url = window.location.origin + window.location.pathname + '#' + sectionId;
                window.history.replaceState({ path: url }, '', url);
    
                if (window.innerWidth <= 768) {
                    console.log("Section background color", sectionId, mainElement);
    
                    let previousSectionBackgroundColor = '';
                    switch (sectionId) {
                        case "issue7":
                            previousSectionBackgroundColor = '#ff608c'; // Set the background color for section "issue7"
                            break;
                        case "issue6":
                            previousSectionBackgroundColor = '#fff'; // Set the background color for section "issue6"
                            break;
                        case "issue5":
                            previousSectionBackgroundColor = '#00c1b5'; // Set the background color for section "issue5"
                            break;
                        case "issue4":
                            previousSectionBackgroundColor = '#ff6519'; // Set the background color for section "issue4"
                            break;
                        case "issue3":
                            previousSectionBackgroundColor = '#ffbe00'; // Set the background color for section "issue3"
                            break;
                        case "issue2":
                            previousSectionBackgroundColor = '#1d3fbb'; // Set the background color for section "issue2"
                            break;
                        case "issue1":
                            previousSectionBackgroundColor = '#E30512'; // Set the background color for section "issue1"
                            break;
                        default:
                            previousSectionBackgroundColor = ''; // Default background color if none matches
                    }
    
                    // Change the background color of the previous section
                    if (previousSectionBackgroundColor !== '') {
                        const previousSectionId = `issue${parseInt(sectionId.split('issue')[1]) + 1}`;
                        const previousSection = document.getElementById(previousSectionId);
                        if (previousSection) {
                            previousSection.style.backgroundColor = previousSectionBackgroundColor;
                        }
                    }
    
                    // Check if we are scrolling up by comparing the current section with the previous one

                    console.log("Comparing colors" , previousSectionBackgroundColor, currentBackgroundColor)
                    if (previousSectionBackgroundColor === currentBackgroundColor) {
                        // We are scrolling up, so reset the background color of the previous section
                        const previousSectionId = `issue${parseInt(sectionId.split('issue')[1]) + 1}`;
                        const previousSection = document.getElementById(previousSectionId);

                        if (previousSection && originalBackgroundColors[previousSection.id]) {
                            previousSection.style.backgroundColor = originalBackgroundColors[previousSection.id];
                        }
                    }
                }
            }
        });
    }, options);
    

    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         const sectionId = entry.target.getAttribute('id');
    //         const menuLink = document.querySelector(`.menu a[href="#${sectionId}"]`);
    //         const mainElement = document.querySelector('main');
    //         const previousSection = entry.target.previousElementSibling;
    
    //         if (entry.isIntersecting) {
    //             menuLinks.forEach(link => link.classList.remove('active'));
    //             menuLink.classList.add('active');
    
    //             // Update the URL without triggering a page reload
    //             const url = window.location.origin + window.location.pathname + '#' + sectionId;
    //             window.history.replaceState({ path: url }, '', url);
    
    

    //             if (window.innerWidth <= 768) {
    //                 console.log("Section background color", sectionId, mainElement);
                
    //                 let previousSectionBackgroundColor = '';
    //                 switch (sectionId) {
    //                     case "issue7":
    //                         previousSectionBackgroundColor = '#ff608c'; // Set the background color for section "issue7"
    //                         break;
    //                     case "issue6":
    //                         previousSectionBackgroundColor = '#fff'; // Set the background color for section "issue6"
    //                         break;
    //                     case "issue5":
    //                         previousSectionBackgroundColor = '#00c1b5'; // Set the background color for section "issue5"
    //                         break;
    //                     case "issue4":
    //                         previousSectionBackgroundColor = '#ff6519'; // Set the background color for section "issue4"
    //                         break;
    //                     case "issue3":
    //                         previousSectionBackgroundColor = '#ffbe00'; // Set the background color for section "issue3"
    //                         break;
    //                     case "issue2":
    //                         previousSectionBackgroundColor = '#1d3fbb'; // Set the background color for section "issue2"
    //                         break;
    //                     case "issue1":
    //                         previousSectionBackgroundColor = '#E30512'; // Set the background color for section "issue1"
    //                         break;
    //                     default:
    //                         previousSectionBackgroundColor = ''; // Default background color if none matches
    //                 }
                
    //                 // Change the background color of the previous section
    //                 if (previousSectionBackgroundColor !== '') {
    //                     const previousSectionId = `issue${parseInt(sectionId.split('issue')[1]) + 1}`;
    //                     const previousSection = document.getElementById(previousSectionId);
    //                     if (previousSection) {
    //                         previousSection.style.backgroundColor = previousSectionBackgroundColor;
    //                     }
    //                 }
    //             }
                

            
           
    //         }
    //     });
    // }, options);
    

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
