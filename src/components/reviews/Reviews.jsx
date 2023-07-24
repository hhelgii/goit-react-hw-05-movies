import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { getMovieInfoWithParams } from 'services/api';
const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetReviews = async () => {
      const { results } = await getMovieInfoWithParams(movieId, 'reviews');
      
      setReviews(results)
    };
    fetReviews()
  }, [movieId]);
  return (
    reviews && (
      <>
        <ul>
            {reviews.map(({ id, author, content  }) => {
              return (
                <li key={id}>
                  <h4>{author}</h4>
                  <p>{content}</p>

                </li>
              );
            })}
        </ul>
        {reviews.length === 0 && <p>We don't have reviews for this movie</p>}
      </>
    )
  );
};
Reviews.propTypes = {
  movieId: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
};

export default Reviews;
