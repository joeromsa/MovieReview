import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../reducers/searchReducer';

const Search = () => {

    const dispatch = useDispatch();

    const movieSearch = (event) => {
        event.preventDefault();
        const movieSearch = event.target.title.value;
        console.log(movieSearch)
        event.target.title.value = '';
        dispatch(searchMovies(movieSearch))
    }

    return (
        <>
            <form onSubmit={movieSearch}>
                <input name="title"/>
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default Search;