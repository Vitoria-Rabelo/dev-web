// @ts-ignore: allow importing CSS without type declarations
import './Pokemon.css'
export function GetPokemon(){
    let numPokemon = Math.ceil(Math.random() * 1000);
    let urlPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numPokemon}.png`
    return(
        <div>
            <h3>Você é o pokemon #{numPokemon}</h3>
            <img src={urlPokemon} alt={`pokemon-${numPokemon}`} />
        </div>
    )
}