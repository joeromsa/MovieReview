import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelSelected } from '../reducers/selectedReducer';
import { addMovie } from '../reducers/movieReducer';

const AddRating = () => {

    const selectedMovie = useSelector(state => state.selected);
    const dispatch = useDispatch();
    const [rating, setRating] = useState("0");

    const cancelAddReview = (event) => {
        event.preventDefault();
        dispatch(cancelSelected());
    }

    const addReview = (event) => {
        event.preventDefault();
        const comment = event.target.comments.value;
        event.target.comments.value = '';
        setRating("0");

        const object = {title: selectedMovie.Title, year: selectedMovie.Year, rating: rating, comment: comment, img: selectedMovie.Poster};
        dispatch(addMovie(object));
        dispatch(cancelSelected());
    }

    const sliderValue = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setRating(value);
    }

    return (
        <div>
            {selectedMovie.Title}
            {selectedMovie.Title !== '' && <button type="button" onClick={cancelAddReview}>cancel</button>}
            {selectedMovie.Title !== '' && <form onSubmit={addReview}>
                <input name="comments"/>
                <input name="rating" type="range" min="0" max="5" step=".5" value={rating} onChange={sliderValue}/>
                <button type="submit">add</button>
            </form>}
        </div>
    );
}

export default AddRating;