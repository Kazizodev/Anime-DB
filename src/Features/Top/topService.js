import axios from 'axios';

const API_URL = 'https://api.jikan.moe/v4/top/';

const getTopAnime = async () => {
    const response = await axios.get(API_URL + "anime?filter=airing&limit=6");
    return response;
}
const getTopCharacters = async () => {
    const response = await axios.get(API_URL + "people?limit=6");
    return response;
}


const topService = { getTopAnime, getTopCharacters }
export default topService;