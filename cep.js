const formulario = document.querySelector('#endereco');
const btn = document.querySelector('#btn');
const endereco = {};

function salvarInformacoesForm(event) {
    endereco[event.target.name] = event.target.value;
}

formulario.addEventListener('change', salvarInformacoesForm);
btn.addEventListener('click', (event) => {
    event.preventDefault();
    const cep = endereco.cep
    if(endereco.cep != ''){
        pesquisaPorCep(cep)
    }
    // descobrirCep(endereco);    
})
// function descobrirCep(endereco){
    
// }
function pesquisaPorCep(cep){
    fetch('https://viacep.com.br/ws/'+cep+'/json/')
    .then(response => response.json())
    .then((body) => {
        rua.value = body.logradouro
        bairro.value = body.bairro
        cidade.value = body.localidade
        estado.value = body.uf
        ibge.value = body.ibge
    })
}

// function descobrirCep(estado, cidade, rua, bairro){
//     fetch('httpx://viacep.com.br/ws'+ estado +'/'+ cidade +'/'+ rua + '/json/')
//     .then(response => response.json())
//     .then((body) => {

//     })
// }