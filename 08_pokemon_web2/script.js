let contador = 0;
document.addEventListener("click", async (event) => {
    contador++;
    try {
        const resposta_api = await fetch(`https://pokeapi.co/api/v2/pokemon/${contador}`);
        const resp_json = (await resposta_api.json());
        const imagem = document.createElement("img");
        imagem.setAttribute("src", resp_json.sprites.front_default);
        let borda;
        if (contador % 2 == 0) {
            borda = "blue";
        }
        else {
            borda = "red";
        }
        imagem.setAttribute("style", `border: 2px solid ${borda}; margin: 5px;`);
        document.body.appendChild(imagem);
    }
    catch (error) {
        console.log("Erro: não encontramos seu pokémon!");
    }
});
export {};
