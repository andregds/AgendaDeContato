/*Variavis Global*/
const form = document.getElementById('form-Cont')
const vnome=[];
const vtel=[];
let linhas=''; 


form.addEventListener('submit', function(e){
/*Remove o comportamento de atualizar a pagina ao clicar no submit do formulario*/
    e.preventDefault();

    /* chama as functions em sequencia */
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){

    /* capturando os campos do formulario */
    const inputNome = document.getElementById('nome');
    const inputContato = document.getElementById('contato');


    if (vnome.includes(inputNome.value)) {
        alert(`Esse contato: ${inputNome.value} ja consta na sua lista.`)
    
    } else {
        
    /* adiciona as informações nos array */
    vnome.push(inputNome.value);
    vtel.push(parseFloat(inputContato.value));

    let linha  = '<tr>';
    linha += `<td>${inputNome.value}</td>`; 
    linha += `<td>${inputContato.value}</td>`;
    linha += `<tr>`;
    linhas += linha;
}

}
function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



