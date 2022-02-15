import { api } from "./server";

function getHTML(form) {
    var animal = {
        nome: form.nome.value,
        peso: form.peso.value,
        especie: form.especie.value,
        idade: form.idade.value,
    };

    return animal;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function criaTabela(pacient) {
    var animalTR = document.createElement("tr");
    var nomeTd = montaTd(pacient.nome, "info-nome");
    var pesoTd = montaTd(pacient.peso, "info-peso");
    var especieTd = montaTd(pacient.especie, "info-especie");
    var idadeTd = montaTd(pacient.idade, "info-idade");

    animalTR.classList.add("animal");

    animalTR.appendChild(nomeTd);
    animalTR.appendChild(pesoTd);
    animalTR.appendChild(especieTd);
    animalTR.appendChild(idadeTd);

    return animalTR;
}

function montaTabela(animal) {
    var animalTR = criaTabela(animal);
    var tabela = document.querySelector("#tabela-animals");
    tabela.appendChild(animalTR);
}

var modal = document.getElementById("modal");
var btn = document.getElementById("adicionar-botao");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

var botao = document.querySelector("#adicionar-animal");

botao.addEventListener("click", function (event) {
  
    event.preventDefault();
     
    var form = document.querySelector("#form-adiciona");
    var animal = getHTML(form);
    var ul = document.querySelector("#erros");

    var erros = validaPessoa(animal);

    api.post('https://localhost:5001/api/aves', ave);

    if (erros.length > 0) {
        exibeErro(erros);
        return;
    }
    modal.style.display = "none";
    montaTabela(animal);

    form.reset();
    ul.innerHTML = "";
});
