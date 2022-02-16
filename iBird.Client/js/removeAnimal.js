var animals = document.querySelectorAll(".animal");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function () {
    var evento = event.target;
    var pai = evento.parentNode;
    const idExcluido = pai.querySelectorAll("td.info-id")[0].innerText;
    console.log(idExcluido);
    axios.delete('https://localhost:5001/api/aves/' + idExcluido)
        .then((resposta) => {
           
            pai.classList.add("removido");

            setTimeout(function () {
                pai.remove();
            }, 500);
        })
        .catch((erro) => {
            console.log('Erro ao excluir');
        });
});
