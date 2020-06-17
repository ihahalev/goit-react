import React from 'react';
import { Link } from 'react-router-dom';

import routs from '../../routes';

const MovieList = ({ items, backFrom }) => {
  return (
    <div className="movie-list">
      {items.map(({ id, title }) => (
        <Link to={{ pathname: `${routs.MOVIES}/${id}`, state: { from: backFrom } }} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
