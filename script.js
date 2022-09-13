function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'ativo';
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add(activeClass);
        function activeTab (index){
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        }
        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', () =>{
                activeTab(index);
            })
        });
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion (){
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) =>{
        item.addEventListener('click', activeAccordion);
    })
    }
}
initAccordion();

function smoothScroll() {
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
smoothScroll();
