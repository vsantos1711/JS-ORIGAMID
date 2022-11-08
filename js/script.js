import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown.js';

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();


// function loop(texto){
//     console.log(texto);
// }
// setInterval(loop, 1000, `Passou `);

// let i = 0;
// const meuLoop = setInterval(() => {
// console.log(`Se passaram ${i++} segundos`);
// if(i > 10){
//     clearInterval(meuLoop);
// }
// }, 1000)

// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const tela = document.querySelector('body');

function telaVermelha(tela){
    tela.style.background = 'red'
}
function telaBlue(tela){
    tela.style.background = 'blue'
}


// setInterval(telaVermelha, 2000, tela)
// setInterval(telaBlue, 4000, tela)


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const botaoIniciar = document.querySelector('.iniciar');
const botaoPausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

botaoIniciar.addEventListener('click', iniciarTempo);
botaoPausar.addEventListener('click', pausarTempo);
botaoPausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo(){
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    botaoIniciar.setAttribute('disabled', '')
}
function pausarTempo(){
    clearInterval(timer)
    botaoIniciar.removeAttribute('disabled')
}
function resetarTempo(){
    tempo.innerText = 0;
    i = 0;
}
