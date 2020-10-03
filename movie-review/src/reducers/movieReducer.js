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

export const addMovie = (object) => {
    return async dispatch => {
        const newReview = await movieService.addNewEntry(object);
        dispatch({
            type: 'NEW_MOVIE_REVIEW',
            data: newReview
        });
    };
}

export const initializeMovies = () => {
    return async dispatch => {
        const movies = await movieService.getAll()
        dispatch({
            type: 'INIT_MOVIES',
            data: movies,
        });
    };
}

export default movieReducer;

