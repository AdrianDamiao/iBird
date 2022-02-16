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