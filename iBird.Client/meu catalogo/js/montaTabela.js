function montaTabela(ave){
    console.log(ave);
    var aveTR = criaTabela(ave);
    var tabela = document.querySelector("#tabela");
    tabela.appendChild(aveTR);
}