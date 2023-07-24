import { lazy, Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useParams, Link } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';
import { getMovieInfo } from 'services/api';
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
  return (
    movie && (
      <>
        <Link to={backLinkHref.current}>Go back</Link>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User score {movie.vote_average.toFixed(1)}</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
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
      </>
    )
  );
};
export default MovieDetails;
