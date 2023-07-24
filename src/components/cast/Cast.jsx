import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { getMovieInfoWithParams } from 'services/api';
const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      const { cast } = await getMovieInfoWithParams(movieId, 'credits');
      setCast(cast);
    };
    fetchCast();
  }, [movieId]);
  return (
    cast && (
      <>
        <ul>
            {cast.map(({ id, name }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                </li>
              );
            })}
        </ul>
        {cast.length === 0 && <p>We don't have cast for this movie</p>}
      </>
    )
  );
};
Cast.propTypes = {
  movieId: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
};

export default Cast;
