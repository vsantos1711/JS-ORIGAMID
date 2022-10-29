export default function smoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    if(linksInternos.length){
        function scollToSection(event){
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        linksInternos.forEach((link) => {
            link.addEventListener('click', scollToSection);
        });
    }
}
