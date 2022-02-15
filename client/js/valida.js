/*function calculaIMC(peso, idade) {
    var imc = peso / (idade * idade);
    return imc.toFixed(2);
}*/

function validaP(peso) {
    if (0.00 < peso && peso <= 150.00) {
        return true;
    } else {
        return false;
    }
}

function validaIdade(idade) {
    if (0 < idade && idade < 100) {
        return true;
    } else {
        return false;
    }
}

function validaPessoa(paciente) {
    var erros = [];
    if (!validaIdade(paciente.idade)) {
        erros.push("Idade Inválida!");
    }  
    if (!validaP(paciente.peso)) {
        erros.push("Peso Inválido!");
    }  
    if(paciente.nome.length == 0){
        erros.push("Insira um nome");
    }
    if(paciente.especie.length == 0){
        erros.push("Insira uma espécie");
    }

    return erros;
}

function exibeErro(erro) {
    var ul = document.querySelector("#erros");
    ul.innerHTML = ""
    erro.forEach(function (alerta) {
        var li = document.createElement("li");
        li.textContent = alerta;
        ul.appendChild(li);
        li.classList.add("mensagem-erro");
    });
}

var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {

    var pacientes = paciente[i];
    var tdpeso = pacientes.querySelector(".info-peso");
    var tdidade = pacientes.querySelector(".info-idade");

    var idade = tdidade.textContent;
    var peso = tdpeso.textContent;
    if (!validaIdade(idade)) {
        tdidade.textContent = "Idade inválida!"
        pacientes.classList.add("paciente-invalido");
    }

    if (!validaP(peso)) {
        tdpeso.textContent = "Peso inválido!";
        pacientes.classList.add("paciente-invalido");
    }
}

