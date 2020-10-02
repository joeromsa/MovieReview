import React from 'react';
import { useSelector } from 'react-redux';

const SearchedMovie = ({movie}) => {

    const buttonClick = (event) => {
        event.preventDefault();
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
