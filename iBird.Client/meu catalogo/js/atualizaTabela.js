function addTable() {
      
    axios.get('https://localhost:5001/api/aves')
        .then((response) => {
           
            const aves = response.data;
           
            aves.forEach(function (aves) {
                montaTabela(aves);
            });
        })
        .catch((erro) => {
            console.log('Erro ao listar aves.');
        });

    
}