import axios from 'axios';

const API_URL = 'https://api.jikan.moe/v4/top/';

const getTopAnime = async () => {
    const response = await axios.get(API_URL + "anime");
    return response;
}
const getTopCharacters = async () => {
    const response = await axios.get(API_URL + "characters");
    return response;
}


const topService = { getTopAnime, getTopCharacters }
export default topService;