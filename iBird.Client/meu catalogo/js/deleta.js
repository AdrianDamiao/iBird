var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function () {
    var evento = event.target;

    console.log(tabela);
    console.log(evento);
    var pai = evento.parentNode;
    console.log(evento);
    const idExcluido = pai.querySelectorAll("td.id")[0].innerText;
    console.log(idExcluido);
    axios.delete('https://localhost:5001/api/aves/' + idExcluido)
        .then((resposta) => {
           
            pai.classList.add("removido");

            setTimeout(function () {
                pai.remove();
            }, 500);
        })
        .catch((erro) => {
            console.log('Erro ao excluir ave');
        });

    pai.classList.add("removido");

    setTimeout(function () {
        pai.remove();
    }, 500);
});