var botao = document.querySelector(".botao");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector(".form");
    var ul = document.querySelector("#erros");
    var ave = getHTML(form);
    var erros = validar(ave);

    axios.post('https://localhost:5001/api/aves', ave)
        .then((resposta) => {
            const params = {
                ...ave,
                id: resposta.data,
            }
            
        if (erros.length > 0) {
            exibeErro(erros);
            return;
        }
        montaTabela(params);
        form.reset();
        ul.innerHTML = "";

        }).catch((erro) => {
            console.log('Erro');
        });
});