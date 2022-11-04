import outsideClick from "./outsideclick";

export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu =>{
        ['touchstar', 'click'].forEach(userEvent =>{
            menu.addEventListener(userEvent, handleClick);
        });
    })
    function handleClick(){
        event.preventDefault();
        this.classList.add('active')
        outsideClick(this, ['touchstart', 'click'], () =>{
            this.classList.remove('active');
        });
    }
    
};

