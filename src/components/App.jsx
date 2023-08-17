import { Suspense, lazy, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Loader } from './loader/Loader';
import { getGenres } from 'services/api';

import css from './app.module.css';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
export const App = () => {
  useEffect(() => {
    getGenres();
  }, []);
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route
              path="/movies/:movieId/*"
              element={
                <MovieDetailsPage>
                  <Route path="cast" element={<MovieDetailsPage />} />
                  <Route path="reviews" element={<MovieDetailsPage />} />
                </MovieDetailsPage>
              }
            />
          </Routes>
        </Suspense>
      </main>
      
    </div>
  );
};
