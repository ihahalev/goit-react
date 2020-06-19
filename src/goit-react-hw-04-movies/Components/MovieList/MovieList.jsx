import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routes';

const MovieList = ({ items, backFrom }) => {
  return (
    <div className="movie-list">
      {items.map(({ id, title }) => (
        <Link to={{ pathname: `${routes[1].path}/${id}`, state: { from: backFrom } }} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
