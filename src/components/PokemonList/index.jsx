import PokemonCard from "./PokeCard";
import "./index.css"
import React, {useState, useEffect} from 'react'
import { getPokemons }  from "../../services/pokemon";
import { Loading } from "@nextui-org/react"

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        getPokemons({limit: 20}).then(async (res) => {
            const pokemonResponse = await res.data.results;            
            setPokemonList(pokemonResponse)
            
        }).catch(e => console.log(e)).finally(() => setIsLoading(false))   
    }, [])

    return (
        <div className="container">
            {
                !isLoading ? 
                (pokemonList.map((pokemon, index) => {                   
                    return <PokemonCard key={index} pokemon={pokemon}/>
                }))
                :
                <Loading size="lg" color="error"/>
            }
            
        </div>
    );
}

export default PokemonList;