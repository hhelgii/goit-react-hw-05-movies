import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/api';
import { Form } from 'components/form/Form';
import MovieList from 'components/moviesList/MoviesList';
import css from './homeAndMoviesPage.module.css'
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const setNewQuery = query => {
    if (query === '') return console.log('Type something!');
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!query) return;

    (async () => {
      const res = await getSearchMovie(query);
      setMovies(res.results);
    })();
  }, [query]);
  return (
    <div className={css.moviesPage}>
      <h1 className={css.title}>Found Movies</h1>
      <Form onSubmit={setNewQuery} />

      {movies && <MovieList movies={movies} />}
      {query && movies.length === 0 && <p>Nothig Found</p>}
    </div>
  );
};
export default MoviesPage;
