import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/movieAPI';

export default function Reviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getReviews(movieId)
      .then(setReviewsData)
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {reviewsData.length > 0 && (
        <ul>
          {reviewsData.map(({ id, author, content }) => (
            <li key={id}>
              <strong>Author: {author}</strong>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {reviewsData.length === 0 && !isLoading && <p>There is no review</p>}
    </>
  );
}
