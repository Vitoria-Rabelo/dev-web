export {} // Use para variaveis serem usadas em outros arquivos
interface DadosPokemon {
    sprites: {
        front_default: string;
    };
}

let contador: number = 0;

document.addEventListener("click", async (event: MouseEvent) => {
    contador++
    try{
        const resposta_api = await fetch(`https://pokeapi.co/api/v2/pokemon/${contador}`);
        const resp_json = (await resposta_api.json()) as DadosPokemon; 
        const imagem = document.createElement("img");
        imagem.setAttribute("src", resp_json.sprites.front_default);

        let borda: string;

        if (contador % 2 == 0){
            borda = "blue";
        } else {
            borda = "red";
        }

        imagem.setAttribute("style", `border: 2px solid ${borda}; margin: 5px;`);
        document.body.appendChild(imagem)
    } catch(error) {
        console.log("Erro: não encontramos seu pokémon!")
    }
})