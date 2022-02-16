function getHTML(form) {
    var animal = {
        nome: form.nome.value,
        peso: form.peso.value,
        especie: form.especie.value,
        idade: form.idade.value,
    };

    return animal;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function criaTabela(animal) {
    var animalTR = document.createElement("tr");
    var idTd = montaTd(animal.id, "info-id");
    var nomeTd = montaTd(animal.nome, "info-nome");
    var pesoTd = montaTd(animal.peso, "info-peso");
    var especieTd = montaTd(animal.especie, "info-especie");
    var idadeTd = montaTd(animal.idade, "info-idade");

    animalTR.classList.add("animal");

    animalTR.appendChild(idTd);
    animalTR.appendChild(nomeTd);
    animalTR.appendChild(pesoTd);
    animalTR.appendChild(especieTd);
    animalTR.appendChild(idadeTd);

    return animalTR;
}

function montaTabela(animal) {
    var animalTR = criaTabela(animal);
    var tabela = document.querySelector("#tabela-animals");
    tabela.appendChild(animalTR);
}

var modal = document.getElementById("modal");
var btn = document.getElementById("adicionar-botao");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

var botao = document.querySelector("#adicionar-animal");

botao.addEventListener("click", function (event) {
  
    event.preventDefault();
     
    var form = document.querySelector("#form-adiciona");
    var animal = getHTML(form);
    var ul = document.querySelector("#erros");

    var erros = validaPessoa(animal);
    console.log(animal);

    axios.post('https://localhost:5001/api/aves', animal)
        .then((resposta) => {
            animal.id = resposta.data
           
            if (erros.length > 0) {
                exibeErro(erros);
                return;
            }
            modal.style.display = "none";
            montaTabela(animal);
        
            form.reset();
            ul.innerHTML = "";
        })
        .catch((erro) => {
            console.log('ERRO');
        });
});
