function consumirAPI() {
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp")
    .then((response) => {
    // Método .json() transforma os textos brutos em objetos JavaScripts para lermos
      return response.json()
    })
    .then((data) => {
        // Abrindo o conteúdo e usando os dados
        console.log(data.state)
    })
    // Emite error
    .catch((error) => console.log(error));
}

consumirAPI()