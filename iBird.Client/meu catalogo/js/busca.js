var campoFiltro = document.querySelector("#filtro");

campoFiltro.addEventListener("input", function () {
    if (this.value.length > 0) {
        var aves = document.querySelectorAll(".passaro");
        for (var i = 0; i < aves.length; i++) {
            var ave = aves[i];
            var tdNome = ave.querySelector(".nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome)) {
                ave.classList.remove("invisivel");
            } else {
                ave.classList.add("invisivel");
            }
        }
    } else{
        var aves = document.querySelectorAll(".passaro");
        for(var i=0; i<aves.length; i++){
            var ave = aves[i];
            ave.classList.remove("invisivel");
        }
    }
});