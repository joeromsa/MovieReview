const selectedReducer = (state = {Title: ''}, action) => {
    switch (action.type) {
        case 'SET_MOVIE': {
            return action.movie;
        }
        case 'CANCEL_SELECTED_MOVIE': {
            return {Title: ''};
        }
        default:
            return state;
    }
}

export const selectedChange = (movie) => {
    return {
        type: 'SET_MOVIE',
        movie: movie
    };
}

export const cancelSelected = () => {
    return {
        type: 'CANCEL_SELECTED_MOVIE',
    };
}

export default selectedReducer;