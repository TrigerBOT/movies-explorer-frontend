import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__status">404</h1>
      <p className="not-found__message">Страница не найдена</p>
      <Link to="/" className="not-found__back">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
