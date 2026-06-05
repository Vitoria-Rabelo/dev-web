function consumirAPI() {
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
        console.log(data.state)
    })
    .catch((error) => console.log(error));
}

consumirAPI()