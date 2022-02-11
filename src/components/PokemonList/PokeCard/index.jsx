import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Text, Loading } from '@nextui-org/react';
import { getPokemonByName }  from "../../../services/pokemon";

const PokemonCard = (props) => {
    const [pokemonImage, setPokemonImage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {           
      getPokemonByName({name: props.pokemon.name}).then(async res => {
        const pokeImage = await res.data.sprites.front_default;
        setPokemonImage(pokeImage)
      }).catch(e => console.log(e)).finally(() => {})
    }, [])
    
    const navigateToPokemonPage = (name) => {
      navigate(`/pokemon/${name}`)
    }

    return (
        <Card hoverable clickable css={{mw: "350px"}} onClick={() => navigateToPokemonPage(props.pokemon.name)}>
        <Card.Body css={{ p: 0 }}>
          {
            isLoading ?            
            
            <Loading color="error"/>
            
            
            :
            <Card.Image
            objectFit="contain"
            src={pokemonImage}
            width='100%'
            height={160}            
            alt={props.pokemon.name}
          />
          }
          
        </Card.Body>
        <Card.Footer justify="flex-start">
          <Row wrap='wrap' justify="center">
            <Text b size={30}>
              {String(props.pokemon.name).toUpperCase()}
            </Text>            
          </Row>
        </Card.Footer>
      </Card>
    );
}

export default PokemonCard;