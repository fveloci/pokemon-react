import axios from "axios"

export const getPokemons = ({page = 1, limit, offset}) => {
    const apiUrl = process.env.REACT_APP_API_URL
    console.log(`${apiUrl}/pokemon?limit=${limit}&offset=${offset}`)
    return axios.get(`${apiUrl}/pokemon?limit=${limit}&offset=${offset}`);         
}

export const getPokemonByName = ({name}) => {   
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(name)
    return axios.get(`${apiUrl}/pokemon/${name}/`)
}

