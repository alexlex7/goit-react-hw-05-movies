import Cast from 'components/Cast/Cast';
import DetailsPage from 'components/DetailsPage/DetailsPage';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from 'services/movieAPI';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;
    getMovieById(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        style={{ margin: '15px 0px 0px 15px' }}
      >
        Back
      </button>
      {movie.hasOwnProperty('id') && <DetailsPage movie={movie} />}

      <div style={{ padding: '15px' }}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}
