import React from 'react';
import { useSelector } from 'react-redux';

const Movie = ({movie}) => {
 
    return (
        <li>
            {movie.title} {movie.rating} {movie.year}
            <img src={movie.img} alt="movie poster"/>
        </li>
    );
}

const Movies = () => {
    const movies = useSelector(state => state.movies);

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