import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getMoviesByName } from 'services/movieAPI';
import MovieList from 'components/MovieList/MovieList';

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParam.get('query') || '';
    if (!query) return;
    getMoviesByName(query).then(setMovies).catch(console.log);
  }, [searchParam]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParam({ query: e.target.search.value });
  };

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        style={{ margin: '15px 0px 0px 15px' }}
      >
        Back
      </button>

      <form
        onSubmit={handleSubmit}
        style={{ marginTop: '15px', marginLeft: '15px' }}
      >
        <input
          name="search"
          type="text"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
