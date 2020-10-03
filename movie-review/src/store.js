import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import movieReducer from './reducers/movieReducer';
import searchReducer from './reducers/searchReducer';
import selectedReducer from './reducers/selectedReducer';

const reducer = combineReducers({
    movies: movieReducer,
    search: searchReducer,
    selected: selectedReducer,
});



const store = createStore(reducer, applyMiddleware(thunk));

export default store;