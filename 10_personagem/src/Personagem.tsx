import "./Personagem.css";
import { useState, useEffect } from "react";

export function Personagem() {
    const [personagem, setPersonagem] = useState<any>(null);

    useEffect(() => {
        async function randomPersonagem() {
            let id = Math.floor(Math.random() * 8) + 1;
            
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            
            setPersonagem(data);
        }

        randomPersonagem();
    }, []);

    if (!personagem) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="Personagem">
            <h3>Eu sou o #{personagem.id}</h3>
            <p>Meu nome é {personagem.name}</p>
            <p>Espécie: {personagem.species}</p>
            <img src={personagem.image} alt={personagem.name} width="200" />
        </div>
    );
}