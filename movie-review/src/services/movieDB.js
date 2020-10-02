import axios from 'axios';

const baseUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`;

const getAll = async (searchTerm) => {
    const response = await axios.get(baseUrl + searchTerm);
    return response.data;
}

export default { getAll };