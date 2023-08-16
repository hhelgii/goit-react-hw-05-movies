import React from 'react';
import propTypes from 'prop-types';
import { MovieItem } from './MoviesItem';
import css from './moviesList.module.css'
export const MovieList = ({ movies }) => {
    return (
        <ul className={css.movielist}>
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
