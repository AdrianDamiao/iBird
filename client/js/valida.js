function validaP(peso) {
    if (0.00 < peso && peso <= 100.00) {
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

function validaPessoa(animal) {
    var erros = [];
    if (!validaIdade(animal.idade)) {
        erros.push("Idade Inválida!");
    }
    if (!validaP(animal.peso)) {
        erros.push("Peso Inválido!");
    }
    if (animal.nome.length == 0) {
        erros.push("Insira um nome");
    }
    if (animal.especie.length == 0) {
        erros.push("Insira uma espécie");
    }

    return erros;
}

function exibeErro(erro) {
    var ul = document.querySelector("#erros");
    ul.innerHTML = "";
    erro.forEach(function (alerta) {
        var li = document.createElement("li");
        li.textContent = alerta;
        ul.appendChild(li);
        li.classList.add("mensagem-erro");
    });
}

var animal = document.querySelectorAll(".animal");

for (var i = 0; i < animal.length; i++) {
    var animals = animal[i];
    var tdpeso = animals.querySelector(".info-peso");
    var tdidade = animals.querySelector(".info-idade");

    var idade = tdidade.textContent;
    var peso = tdpeso.textContent;
    if (!validaIdade(idade)) {
        tdidade.textContent = "Idade inválida!";
        animals.classList.add("animal-invalido");
    }

    if (!validaP(peso)) {
        tdpeso.textContent = "Peso inválido!";
        animals.classList.add("animal-invalido");
    }
}
