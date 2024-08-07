const telefone = document.getElementById('telefone');
const nome = document.getElementById('nome');
const formulario = document.getElementById('formulario');
const telefones = [];

let linhas = '';

formulario.addEventListener('submit', function(e){
    e.preventDefault(); 
    adicionaNumero();
    atualizaTabela();
});

function adicionaNumero(){
    if (telefones.includes(telefone.value)) {
        alert("Telefone já cadastrado");
        telefone.value = '';
    } else {
        telefones.push(telefone.value);
        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${telefone.value}</td>`; 

        linhas += linha;

        telefone.value = '';
        nome.value = ''; 
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
