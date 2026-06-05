const minhaPromessaComTimeOut = new Promise(
    (resolvido, rejeitado) => {
        setTimeout(
            () => {
                const res = 1
                if(res % 2 ==0) resolvido(`DEU CERTO, RESPOSTA: ${res}`)
                else rejeitado(`NÃO DEU CERTO. RESPOSTA: ${res}`)
            },
            2000
        )
    } //fim resolvido, rejeitado
) // fim da promessa

function consumirGET_API(url) {
    //processamento com axios ou fetch
    //return minhaPromessa
    return minhaPromessaComTimeOut
}

//FRONT
async function processarConsumoAPI() {
    try{
        const res = await consumirGET_API("http://localhost:8089/get")
        console.log(res)
    }catch(error){
        console.log(error)
    }finally {
        console.log("Finalizando")
    }
    
}

processarConsumoAPI()
console.log("RENDERIZANDO")