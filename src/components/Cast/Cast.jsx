import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movieAPI';
import { CastImage, Thumb } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCast(movieId).then(setCredits).catch(console.log);
  }, [movieId]);

  return (
    <>
      {credits.length > 0 && (
        <ul>
          {credits.map(({ character, name, profile_path, id }) => (
            <li key={id}>
              <Thumb>
                <CastImage
                  src={`https://image.tmdb.org/t/p/w400${profile_path}`}
                  alt={name}
                />
              </Thumb>
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
