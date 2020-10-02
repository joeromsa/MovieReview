import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import movieReducer from './reducers/movieReducer';
import searchReducer from './reducers/searchReducer';

const reducer = combineReducers({
    movies: movieReducer,
    search: searchReducer,
});



const store = createStore(reducer, applyMiddleware(thunk));

export default store;