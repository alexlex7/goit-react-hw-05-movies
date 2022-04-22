import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieAPI';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies).catch(console.log);
  }, []);
  
  return (
    <>{trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}</>
  );
}
