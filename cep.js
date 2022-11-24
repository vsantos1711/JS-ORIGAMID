const formulario = document.querySelector('#endereco');
const endereco = {};

function handleChange(event) {
    endereco[event.target.name] = event.target.value;
    pesquisaCep(endereco.cep)
}
formulario.addEventListener('change', handleChange)

function pesquisaCep(cep){
    fetch('https://viacep.com.br/ws/'+ cep+ '/json/')
    .then(response => response.json())
    .then((body) => {
        console.log(body)
    })
}