import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';

const HomePage = lazy(() =>
  import('../routes/HomePage.jsx' /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import('../routes/MoviesPage.jsx' /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import('../routes/MovieDetailsPage.jsx' /* webpackChunkName: "detail-page" */)
);

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Component is loading</h1>}>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="/movies"
          element={
            <Suspense fallback={<h1>Component is loading</h1>}>
              <MoviesPage />
            </Suspense>
          }
        />

        <Route
          path="/movies/:movieId/*"
          element={
            <Suspense fallback={<h1>Component is loading</h1>}>
              <MovieDetailsPage />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};
