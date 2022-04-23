import React from 'react';
import PropTypes from 'prop-types';
import {
  DetailsContainer,
  ImgThumb,
  PosterImg,
  InfoContainer,
} from './DetailsPage.styled';

function DetailsPage({ movie }) {
  const genres = ({ genres }) => genres.map(genre => genre.name).join(' ');

  return (
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
  );
}

DetailsPage.propTypes = {
  movie: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ),
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsPage;
