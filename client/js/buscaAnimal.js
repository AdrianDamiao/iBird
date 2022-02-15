var botaoAdicionar = document.querySelector("#buscar-animal");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("click");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var resposta = xhr.response;
        var animals = JSON.parse(resposta);
        animals.forEach(function (animals) {
            montaTabela(animals);
        });
    });

    var modal = document.getElementById("modal");
    modal.style.display = "none";

    xhr.send();
});
