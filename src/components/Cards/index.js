import React, { useEffect, useState } from "react";
import "./index.css";

const api = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

export const Cards = (props) => {
  const [pokemonData, setPokemonData] = useState([]);

  const fetchData = async () => {
    const arrayOfPokemon = [];
    const allData = [];

    for (let i = 1; i <= 150; i++) {
      arrayOfPokemon.push(
        await fetch(api(i)).then((response) => response.json())
      );
    }

    arrayOfPokemon.map((pokemon) => {
      allData.push({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.other["dream_world"]["front_default"],
        types: pokemon.types.map(({ type }) => type.name),
      });
    });

    // PROCURA SE EXISTE ALGUM POKEMON COM O VALOR DO INPUT E FILTRA O OBJETO ANTES DE ENVIAR

    setPokemonData(allData);
  };

  //const filteredPokemon = (id) => {
  // allData.filter(item => item.includes('LETRAS AQUI')))
  //}

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {pokemonData.map((pokemon) => {
        return (
          <li className="card" key={pokemon.id}>
            <img
              className="card__image"
              src={pokemon.sprite}
              alt={pokemon.name}
            />
            <h3 className="card__name">{pokemon.name}</h3>
            <span className="card__type">{pokemon.types.join(" | ")}</span>
          </li>
        );
      })}
    </>
  );
};
