const nomesLanches = ["Infeliz", "Pig", "Queijão", "Fritas"]
const precos = [[9,12,15], [10,13,16], [12,18,25], [5,13,19]]
let quantidades = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]

const cancelar = () =>{
    quantidades = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
    limpaCarrinho()
}

const confirmar = () =>{
    //gerar alert
    const carrinho = document.getElementById("carrinho")
    const textoAlert = carrinho.innerText.substring(0,carrinho.innerText.lastIndexOf("\n"))
    alert(textoAlert)
    limpaCarrinho()
    limpaCampos()
}

function limpaCampos(){
    limpaCamposInf()
}

function limpaCamposInf(){
    var tamanhoSelecionado = document.getElementById("tamanhoInfeliz")
    var qtdSelecionada = document.getElementById("qtdInfeliz")
    var campoReadOnly = document.getElementById("precoInfAtual")
    tamanhoSelecionado.selectedIndex = 0
    qtdSelecionada.value = 0
    campoReadOnly.value = 0
}

function atualizaCarrinho(){
    limpaCarrinho()
    for (let i = 0; i < quantidades.length; i++) {
        for (let j = 0; j < quantidades[i].length; j++) {
            if(quantidades[i][j] != 0){
                adicionaAoCarrinho(i,j)
            }
        }
    }
    calculaTotal()
    adicionaBotoes()
}

function calculaTotal(){
    const carrinho = document.getElementById("carrinho")
    let valorTotal = 0
    for (let i = 0; i < quantidades.length; i++) {
        for (let j = 0; j < quantidades[i].length; j++) {
            if(quantidades[i][j] != 0){
                valorTotal += quantidades[i][j] * precos[i][j]
            }
        }
    }
    const total = document.createElement("p")
    const textoTotal = document.createTextNode(`Total: ${valorTotal}R$`)
    total.appendChild(textoTotal)
    carrinho.appendChild(total)
}

function adicionaBotoes(){
    const carrinho = document.getElementById("carrinho")

    const btnCancelar = document.createElement("button")
    const textoCancelar = document.createTextNode("Cancelar")
    btnCancelar.appendChild(textoCancelar)
    btnCancelar.onclick = cancelar
    
    const btnConfirmar = document.createElement("button")
    const textoConfirmar = document.createTextNode("Confirmar")
    btnConfirmar.appendChild(textoConfirmar)
    btnConfirmar.onclick = confirmar

    carrinho.appendChild(btnConfirmar)
    carrinho.appendChild(btnCancelar)
}

function adicionaAoCarrinho(i,j){
    let nome = nomesLanches[i];
    let tamanho = "";
    if(j==0){
        tamanho = " PQ";
    }
    else if(j==1){
        tamanho = " MD";
    }
    else{
        tamanho = " GR";
    }
    let qtd = quantidades[i][j];
    let preco = qtd * precos[i][j];
    
    const item = document.createElement("p")
    const textoItem = document.createTextNode(qtd + "x " + nome + tamanho + " = " + preco + "R$")
    item.appendChild(textoItem)
    carrinho.appendChild(item)
}

function limpaCarrinho(){
    var carrinho = document.getElementById("carrinho")
    carrinho.innerHTML ="";
    const hr = document.createElement("hr")
    const titulo = document.createElement("h3")
    const textoTitulo = document.createTextNode("Carrinho")
    titulo.appendChild(textoTitulo)
    carrinho.appendChild(titulo)
    carrinho.appendChild(hr)
}

function addInf(){
    var tamanhoSelecionado = document.getElementById("tamanhoInfeliz")
    var qtdSelecionada = document.getElementById("qtdInfeliz")
    var campoReadOnly = document.getElementById("precoInfAtual")

    quantidades[0][tamanhoSelecionado.selectedIndex]+= Number(qtdSelecionada.value) //0-pq, 1-md, 2-gd
    tamanhoSelecionado.selectedIndex = 0
    qtdSelecionada.value = 0
    campoReadOnly.value = 0
    atualizaCarrinho()
}

function mudaQtdInf(){
    var tamanhoSelecionado = document.getElementById("tamanhoInfeliz")
    var qtdSelecionada = document.getElementById("qtdInfeliz")
    var campoReadOnly = document.getElementById("precoInfAtual")
    var valor = tamanhoSelecionado.options[tamanhoSelecionado.selectedIndex].value
    campoReadOnly.value = qtdSelecionada.value * valor
}


function addPig(){
}

function mudaQtdPig(){
    var campoReadOnly = document.getElementById("precoPigAtual")
}

function addQjo(){
    
}

function mudaQtdQjo(){
    var campoReadOnly = document.getElementById("precoQjoAtual")
}

function addFri(){

}

function mudaQtdFri(){
    var campoReadOnly = document.getElementById("precoFriAtual")
}
