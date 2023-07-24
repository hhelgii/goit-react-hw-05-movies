import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Loader } from './loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
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
