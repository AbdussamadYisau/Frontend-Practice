

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

const sections = Array.from(document.getElementsByClassName('section'));

for (let section of sections) {

    // By doing this tweak, we loop into the elements inside the section, for those which have fade-delay class and give them a 0.5s delay from the section and each other, due to the count * 0.5 calculation we did there.
    
    const fadeups = section.getElementsByClassName('fade-delay');
      for (let count = 0; count < fadeups.length; count++) {
         fadeups[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
     }
   observer.observe(section);
 }
 
});