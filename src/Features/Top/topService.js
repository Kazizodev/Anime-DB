import axios from 'axios';

const API_URL = 'https://api.jikan.moe/v4/top/';

const getTopAnime = async () => {
    const response = await axios.get(API_URL + "anime?filter=airing&limit=6");
    return response;
}
const getTopPopular = async () => {
    const response = await axios.get(API_URL + "anime?filter=bypopularity&limit=5");
    return response;
}
const getTopFav = async () => {
    const response = await axios.get(API_URL + "anime?filter=favorite&limit=6");
    return response;
}

const topService = { getTopAnime, getTopPopular, getTopFav }
export default topService;