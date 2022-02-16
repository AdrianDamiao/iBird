function validaPeso(ave) {
    if (ave.peso > 0 && ave.peso < 3) {
        return true;
    } else {
        return false;
    }
}

function validar(ave) {
    var erros = [];
    if (!validaPeso(ave)) {
        erros.push("Peso inválido!");
    }
    if (ave.nome.length == 0) {
        erros.push("Nome inválido!");
    }
    if (ave.especie.length == 0) {
        erros.push("Espécie inválida!");
    }
    if (ave.idade.length == 0 || ave.idade < 0) {
        erros.push("Idade inválida!");
    }
    return erros;
}