import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found-page">
      <h2>Not found page 404.</h2>
      <Link to={'/'} className="not-found-page__redirect">
        Go login page.
      </Link>
    </div>
  );
}

export default NotFound;
