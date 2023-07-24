import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
export const MovieItem = ({ movie }) => {
  const { id, title } = movie;
  const location=useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <p>{title}</p>
      </Link>
    </li>
  );
};
MovieItem.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
  }),
};
