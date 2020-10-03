import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedChange } from '../reducers/selectedReducer';

const SearchedMovie = ({movie}) => {

    const dispatch = useDispatch();

    const buttonClick = (event) => {
        event.preventDefault();
        dispatch(selectedChange(movie));
        console.log(movie.Title);
    }

    return (
        <li>
            {movie.Title} <button type="button" onClick={buttonClick}>add</button>
        </li>
    );
}

const SearchedMovies = () => {

    const searchResults = useSelector(state => state.search);

    return (
        <ul>
            {searchResults.map(searchResult => 
                <SearchedMovie
                    key={searchResult.imdbID}
                    movie={searchResult}
                />
            )}
        </ul>
    );
}

export default SearchedMovies;
