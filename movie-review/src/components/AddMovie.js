import React from 'react';
import Search from './Search';
import SearchedMovies from './SearchedMovies'
import AddRating from './AddRating';

const AddMovie = () => {

    return (
        <div>
            <Search />
            <SearchedMovies />
            <AddRating />
        </div>
    );
}

export default AddMovie;