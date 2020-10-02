import movieService from '../services/movies'

const movieReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_MOVIE_REVIEW': {
            return state.concat(action.data);
        }
        case 'EDIT_RATING': {
            const id = action.data.id;
            const movieToChange = state.find(m => m.id === id);
            const changedMovie = {
                ...movieToChange,
                rating: action.data.rating
            }

            return state.map(movie => movie.id !== id ? movie : changedMovie);
        }
        case 'REMOVE_MOVIE_REVIEW': {
            const id = action.data.id;
            return state.filter(movie => movie.id !== id);
        }
        case 'INIT_MOVIES': {
            return action.data
        }
        default: 
            return state;
    }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const addMovie = (values) => {
    return {
        type: 'NEW_MOVIE_REVIEW',
        data: {
            title: values.title,
            year: values.year,
            rating: values.rating,
            id: generateId()
        }
    }
}

export const initializeMovies = () => {
    return async dispatch => {
        const movies = await movieService.getAll()
        dispatch({
            type: 'INIT_MOVIES',
            data: movies,
        })
    }
}

export default movieReducer

