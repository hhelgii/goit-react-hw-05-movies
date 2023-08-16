import { lazy, Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useParams, Link } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';
import { getMovieInfo } from 'services/api';

import css from './movieDetails.module.css';
const Cast = lazy(() => import('../components/cast/Cast'));
const Reviews = lazy(() => import('../components/reviews/Reviews'));
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    if (!movieId) return;
    const fetchMovieId = async () => {
      try {
        const movieInfo = await getMovieInfo(movieId);
        setMovie(movieInfo);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieId();
  }, [movieId]);
  const getNames = arr => {
    const namesArr = arr.map(item => item.name);
    return namesArr.join(', ');
  };

  return (
    movie && (
      <div className={css.movieDetailsPage}>
        <Link to={backLinkHref.current}>Go back</Link>

        <div className={css.movieDetails}>
          <div className={css.info}>
            <h1>{movie.title}</h1>
            <p className={css.overview}>{movie.overview}</p>
            <div className={css.infoItem}>
              <span className={css.label}>Released:</span>
              <span className={css.value}>
                {movie.release_date.split('-').join('.')}
              </span>
            </div>
            <div className={css.infoItem}>
              <span className={css.label}>Rating:</span>
              <span className={css.value}>{movie.vote_average.toFixed(1)}</span>
            </div>
            <div className={css.infoItem}>
              <span className={css.label}>Coutry:</span>
              <span className={css.value}>
                {getNames(movie.production_countries)}
              </span>
            </div>
            <div className={css.infoItem}>
              <span className={css.label}>Genre:</span>
              <span className={css.value}>{getNames(movie.genres)}</span>
            </div>
            <div className={css.infoItem}>
              <span className={css.label}>Companies:</span>
              <span className={css.value}>
                {getNames(movie.production_companies)}
              </span>
            </div>
            <div className={css.infoItem}>
              <span className={css.label}>Runtime:</span>
              <span className={css.value}>{`${movie.runtime}m`}</span>
            </div>
          </div>

          <div className={css.backdrop}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Backdrop"
              className={css.backdropImg}
            />
          </div>
        </div>

        <div>
          <Link to={`cast`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<Cast movieId={movieId} />} />
              <Route path="reviews" element={<Reviews movieId={movieId} />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    )
  );
};
export default MovieDetails;
