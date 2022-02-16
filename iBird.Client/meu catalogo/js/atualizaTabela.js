function addTable() {
      
    axios.get('https://localhost:5001/api/aves')
        .then((response) => {
           
            const aves = response.data;
            console.log(aves);

           
            aves.forEach(function (aves) {
                montaTabela(aves);
            });
        })
        .catch((erro) => {
            console.log('Erro ao listar aves.');
        });

    
}