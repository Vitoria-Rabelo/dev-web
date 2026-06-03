const minhaPromessa = new Promise(
    (resolvida, rejeitada) => {
        // Aconteceu alguma comunicacao externa 
        const x = 5
        if (x % 2 == 0){
            resolvida(`Deu certo, resposta: ${x}`)
        } else { 
            rejeitada(`Não deu certo, resposta ${x}`)
        }
    }
)

function consumirGET_API(url){
    // Processamento com axios ou fetch
    return minhaPromessa
}

function processarConsumoAPI(){
    // Processamento no Frontend
    consumirGET_API("http://localhost:8080/get")

    // se deu certo, faça:
    .then( 
        (res) => {
        console.log(res)}
    )

    // se deu errado, faça:
    .catch( (error) => {
        console.log(error)
    })

    // independente do resultado, execute:
    .finally( () => console.log("Finalizando alguma computação."))
}

//FrontEnd
processarConsumoAPI()