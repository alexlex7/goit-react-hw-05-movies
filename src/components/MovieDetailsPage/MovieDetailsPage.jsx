import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from 'services/movieAPI';
import {
  AdditionalInfoContainer,
  DetailsContainer,
  ImgThumb,
  InfoContainer,
  PosterImg,
} from './MovieDetailsPage.styled';

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

  const genres = ({ genres }) => genres.map(genre => genre.name).join(' ');
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        style={{ margin: '15px 0px 0px 15px' }}
      >
        Back
      </button>
      {movie.hasOwnProperty('id') && (
        <DetailsContainer>
          <ImgThumb>
            <PosterImg
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.original_title}
            />
          </ImgThumb>

          <InfoContainer>
            <h3>{movie.original_title}</h3>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{genres(movie)}</p>
          </InfoContainer>
        </DetailsContainer>
      )}

      <AdditionalInfoContainer>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </AdditionalInfoContainer>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}
