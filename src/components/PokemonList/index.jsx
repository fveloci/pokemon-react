import PokemonCard from "./PokeCard";
import "./index.css";
import React, { useState, useEffect } from "react";
import { getPokemons } from "../../services/pokemon";
import { Loading, Button } from "@nextui-org/react";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPokemons({ limit: 20 })
      .then(async (res) => {
        const pokemonResponse = await res.data.results;
        setPokemonList(pokemonResponse);
        console.log('First get pokemon')
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  const getMorePokemons = () => {   
      setLoadingButton(true)   
    const arrayLength = pokemonList.length;
    getPokemons({ limit: 20, offset: arrayLength})
        .then( async (res) => {
            const pokemonResponse = await res.data.results;
            console.log('Response ', pokemonResponse)
            setPokemonList(pokemonList => [...pokemonList, ...pokemonResponse])
        })
        .catch((e) => console.log(e))
        .finally(() => {            
            console.log(pokemonList)
            setLoadingButton(false)
        })
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="list-container">
          {!isLoading ? (
            pokemonList.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })
          ) : (
            <Loading size="lg" color="error" />
          )}
        </div>
        <div className="loadMore">
          <Button color="error" auto onClick={getMorePokemons}>
                {
                    loadingButton ? 
                    <Loading type="points" color="white" size="sm" />
                    : 
                    'Load More'
                }
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
