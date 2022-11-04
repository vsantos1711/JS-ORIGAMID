export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu =>{
        menu.addEventListener('click', handleClick);
    })
    function handleClick(){
        event.preventDefault();
        console.log(event)
    }
};

