import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../reducers/movieReducer';

const NewMovie = (props) => {
    const dispatch = useDispatch();

    const createMovie = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const year = event.target.year.value;
        const rating = event.target.rating.value;

        event.target.title.value = '';
        event.target.year.value = '';
        event.target.rating.value = '';

        dispatch(addMovie({title: title, year: year, rating: rating}));
    }

    return (
        <form onSubmit={createMovie}>
            <label htmlFor="title">title</label>
            <input name="title" />
            <label htmlFor="year">year</label>
            <input name="year" />
            <label htmlFor="rating">rating</label>
            <input name="rating" />
            <button type="submit">add</button>
        </form>
    );
}

export default NewMovie;