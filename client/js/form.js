function getHTML(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        especie: form.especie.value,
        idade: form.idade.value,
        //imc: calculaIMC(form.peso.value, form.especie.value)
    }

    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function criaTabela(pacient) {;

    var pacienteTR = document.createElement("tr");
    var nomeTd = montaTd(pacient.nome, "info-nome");
    var pesoTd = montaTd(pacient.peso, "info-peso");
    var especieTd = montaTd(pacient.especie, "info-especie");
    var idadeTd = montaTd(pacient.idade, "info-idade");
    //var imcTd = montaTd(pacient.imc, "info-imc");

    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(nomeTd);
    pacienteTR.appendChild(pesoTd);
    pacienteTR.appendChild(especieTd);
    pacienteTR.appendChild(idadeTd);
    //pacienteTR.appendChild(imcTd);

    return pacienteTR;

}

function montaTabela(paciente){
    var pacienteTR = criaTabela(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);
}

var modal = document.getElementById("modal");
var btn = document.getElementById("adicionar-botao");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = getHTML(form);
    var ul = document.querySelector("#erros")

    var erros = validaPessoa(paciente);
    if (erros.length > 0) {
        exibeErro(erros);
        return;
    }


    modal.style.display = "none";
    montaTabela(paciente);

    form.reset();
    ul.innerHTML = "";
});
