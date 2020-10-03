import axios from 'axios';

const baseUrl = 'http://localhost:3001/movies';

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const addNewEntry = async (content) => {
    const object = {
        title: content.title, 
        year: content.year, 
        rating: content.rating, 
        comment: content.comment, 
        img: content.img,
        id: generateId()
    };
    const response = await axios.post(baseUrl, object);
    return response.data;
}

export default { getAll, addNewEntry }