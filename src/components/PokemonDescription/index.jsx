import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../services/pokemon";
import { Loading } from '@nextui-org/react';
import "./index.css"

export const PokemonDescription = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {      
    getPokemonByName({ name: name }).then(async (res) => {
      const getPokemon = await res.data;
      setPokemon(getPokemon);          
    }).catch(e => console.log(e)).finally(() => {});
  }, []);

  if(!pokemon)
  {
      return <Loading/>
  }

  return (        
    <div className="poke__description__container">
      <h1>{pokemon.name}</h1>
      <div className="image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="habilities">
          <h2>Abilities</h2>
          <ul className="list-group">
              {
              pokemon.abilities ? 
                pokemon.abilities.map((ability, index) => {
                    return <li className="list-item" key={index}>{ability.ability.name}</li>
                })  
                :
                <p>No abilities</p>
                }
          </ul>
      </div>
      <div className="types">
          <h2>Types</h2>
          <ul className="list-group">
              {
              pokemon.types ? 
                pokemon.types.map((type, index) => {
                    return <li className="list-item" key={index}>{type.type.name}</li>
                })  
                :
                <p>No type</p>
                }
          </ul>          
      </div>
    </div>
  );
};
