var campoFiltro = document.querySelector("#buscar");

campoFiltro.addEventListener("input", function () {
    if (this.value.length > 0) {
        var animals = document.querySelectorAll(".animal");
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            var tdNome = animal.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome)) {
                animal.classList.remove("invisivel");
            } else {
                animal.classList.add("invisivel");
            }
        }
    } else {
        var animals = document.querySelectorAll(".animal");
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            animal.classList.remove("invisivel");
        }
    }
});
