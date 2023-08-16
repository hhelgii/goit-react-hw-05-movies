import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { GENRES_KEY } from 'services/api';
import { validateGenres } from 'services/api';
import css from './moviesList.module.css'
export const MovieItem = ({ movie }) => {
  const storage = JSON.parse(localStorage.getItem(GENRES_KEY));
  
  const { id, title, poster_path,genre_ids,release_date} = movie;
  const genres = validateGenres(genre_ids, storage);
  const location=useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
      <div className={css.movieCard}>
          <img className={css.moviePoster} src={ `https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

          <div className={css.movieDetails}>
            <h2 className={css.movieTitle}>{title}</h2>
            <p className={css.movieYearGenres}>
              {release_date.split('-')[0]} | {genres}
            </p>
          </div>
        </div> 
      </Link>
    </li>
  );
};
MovieItem.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
  }),
};

 
        
