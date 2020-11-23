import axios from 'axios';

const baseURL = "http://localhost:3001";

export const getGames = async c => {
    let requestURL= `${baseURL}/games`;
    try {
        const { data } = await axios.get(requestURL);
        console.log(data);
        return data;
    } catch (err) {
        console.log("Could not get data");
    }
}

export const getPokemon = async c => {
    let requestURL= `${baseURL}/pokemon`;
    try {
        const { data } = await axios.get(requestURL);
        console.log(data);
        return data;
    } catch (err) {
        console.log("Could not get data");
    }
}