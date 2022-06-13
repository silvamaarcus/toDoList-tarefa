// Selecionando as tags que serão manipuladas:
let elementoLista = document.querySelector('.list');
let elementoTexto = document.querySelector('input');
let elementoBotao = document.querySelector('button');

// Criando um array de Strings com suas definições, no caso, as tarefas.
let arr = [
    'Primeira tarefa',
    'Segunda tarefa',
    'Terceira tarefa'
];

// Criando uma função para renderizar as tarefas no HTML:
function renderizarTarefa() {

    elementoLista.innerHTML = '';

    // Uso do 'forEach' para pecorrer o array e selecionar o item (string).
    arr.forEach((item, index) => {
        // Variável responsável por criar um elemento na lista (li) no HTML.
        var renderizarTarefaElemento = document.createElement('li');
        // Variável responsável por criar um elemento de texto dentro do elemento na lista (li) no HTML.
        var renderizarTarefaTexto = document.createTextNode(item); // Texto selecionado dentro do array de strings.

        // Variável resposável por criar um elemento de link(Excluir):
        var renderizarLink = document.createElement('a');
        // Variável resposável por criar texto para o elemento link(Excluir):
        var renderizarLinkTexto = document.createTextNode('Excluir');
        // Setar um atributo no elemento link com # para funcionar no HTML:
        renderizarLink.setAttribute('href', '#');
        // Setar um atributo de deletar uma tarefa  no elemento link, através do clique:
        renderizarLink.setAttribute('onclick', 'deleteItem(' + index + ')'); // Index busca a posição no array.
        // Inserindo o texto do link dentro do elemento link:
        renderizarLink.appendChild(renderizarLinkTexto);

        // Aplicando o texto (string) dentro do elemento na lista (li):
        renderizarTarefaElemento.appendChild(renderizarTarefaTexto);
        // Aplicando os elementos de links dentro do elemenda da lista(ul):
        renderizarTarefaElemento.appendChild(renderizarLink);
        // Aplicando todos os textos (string) dentro do elemento da lista (ul):
        elementoLista.appendChild(renderizarTarefaElemento);

    })
}
renderizarTarefa(); // Executando função.

// Adcionando um evento de clique ao botão do HTML:
elementoBotao.addEventListener('click', addItem)

// Função para add um item (li) COM TEXTO ao elemento de lista (ul):
function addItem() {
    var itemTexto = elementoTexto.value;
    arr.push(itemTexto);
    renderizarTarefa();
}

// Função para remover um item (li) ao elemento de lista (ul):
function deleteItem(posicao) {
    arr.splice(posicao, 1);
    renderizarTarefa();
}