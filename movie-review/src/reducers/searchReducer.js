import movieDBService from '../services/movieDB';

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'CLEAR_SEARCH': {
            return [];
        }
        case 'SET_SEARCH': {
            return action.data;
        }
        default:
            return state;
    }
}

export const searchMovies = (search) => {
    return async dispatch => {
        try {
            const searchRes = await movieDBService.getAll(search);
            dispatch({
                type: 'SET_SEARCH',
                data: searchRes.Search
            });
        }
        catch (error) {
            dispatch({
                type: 'CLEAR_SEARCH',
            });
        }
    }
}

export const resetMovies = () => {
    return {
        type: 'CLEAR_SEARCH',
        data: []
    }
}

export default searchReducer;