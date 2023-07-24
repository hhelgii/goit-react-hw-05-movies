import React from 'react';
import propTypes from 'prop-types';
import { MovieItem } from './MoviesItem';

export const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => {
                return (<MovieItem movie={movie} key={movie.id} />)
            })}
        </ul>
    );
}


MovieList.propTypes = {
    movies: propTypes.array.isRequired,
};

export default MovieList;
