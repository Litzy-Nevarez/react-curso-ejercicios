import axios from 'axios';

const API_KEY = "3d94fdb5";
const URL = "https://www.omdbapi.com/";

export async function searchMovies(title) {
    const response = await axios.get(URL, {
        params: {
            apikey: API_KEY,
            s: title
        }
    });

    return response.data.Search || [];
}