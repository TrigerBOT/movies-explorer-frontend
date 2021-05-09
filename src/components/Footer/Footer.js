import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__row">
        <p className="footer__date">© {(new Date()).getFullYear()}</p>
        <ul className="footer__links">
          <li><a href="https://praktikum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/TrigerBOT/movies-explorer-frontend" className="footer__link" target="_blank">Github</a></li>
          
        </ul>
      </div>
    </footer>
  );
}

export default Footer;