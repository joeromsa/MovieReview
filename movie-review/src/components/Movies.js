import React from 'react';
import { useSelector } from 'react-redux';

const Movie = ({movie}) => {
    console.log(movie)
    return (
        <li>
            {movie.title} {movie.rating} {movie.year}
        </li>
    );
}

const Movies = () => {
    const movies = useSelector(state => state);

    console.log(movies)

    return (
        <ul>
            {movies.map(movie => 
                <Movie
                    key={movie.id}
                    movie={movie}
                />
            )}
        </ul>
    );
}

export default Movies;