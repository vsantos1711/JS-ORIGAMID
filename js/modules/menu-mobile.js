import outsideClick from './outsideclick.js';

const eventos = ['click', 'touchastart']

export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    
    if(menuButton){
        function openMenu(event){
            menuList.classList.add('active');
            menuButton.classList.add('active');
            outsideClick(menuList, eventos, () =>{
                menuList.classList.remove('active');
                menuButton.classList.remove('active');
            })
        }
        eventos.forEach((evento) =>{
            menuButton.addEventListener(evento ,openMenu);
        })
    }
}
