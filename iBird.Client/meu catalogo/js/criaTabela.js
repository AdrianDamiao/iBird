function criaTabela(ave){
    var aveTR = document.createElement("tr");
    var idTd = montaTd(ave.id, 'id');
    var nomeTd = montaTd(ave.nome, "nome");
    var pesoTd = montaTd(ave.peso, "peso");
    var especieTd = montaTd(ave.especie, "especie");
    var idadeTd = montaTd(ave.idade, "idade");

    aveTR.classList.add("passaro");

    aveTR.appendChild(idTd);
    aveTR.appendChild(nomeTd);
    aveTR.appendChild(pesoTd);
    aveTR.appendChild(especieTd);
    aveTR.appendChild(idadeTd);

    return aveTR;

}