import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { getMovieInfoWithParams } from 'services/api';
import css from './reviews.module.css'
const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetReviews = async () => {
      const { results } = await getMovieInfoWithParams(movieId, 'reviews');
      
      setReviews(results)
    };
    fetReviews()
  }, [movieId]);
  console.log(reviews)
  return (
    reviews && (
      <>
        <ul className={css.reviewsList}>
            {reviews.map(({ id, author, content  }) => {
              return (
                <li key={id} className={css.reviewItem}>
                  <h4 className={css.rewievItemAuthor}>{author}</h4>
                  <p className={css.rewievItemContent}>{content}</p>

                </li>
              );
            })}
        </ul>
        {reviews.length === 0 && <p className={css.message}>We don't have reviews for this movie</p>}
      </>
    )
  );
};
Reviews.propTypes = {
  movieId: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
};

export default Reviews;
