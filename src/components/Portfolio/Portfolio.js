import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio main__section ">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://TrigerBOT.github.io/how-to-learn/"
          >
            <p className="portfolio__name">How to learn</p>
            <div className="portfolio__icon">&#8599;</div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://TrigerBOT.github.io/russian-travel/"
          >
            <p className="portfolio__name">Russian travel</p>
            <div className="portfolio__icon">&#8599;</div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/TrigerBOT/react-mesto-api-full"
          >
            <p className="portfolio__name">Mesto</p>
            <div className="portfolio__icon">&#8599;</div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
