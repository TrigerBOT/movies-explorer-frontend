import React from "react";

function AboutProject() {
  return (
    <section className="main__section">
      <h2 className="main__section-title">О проекте</h2>
      <ul className="table">
        <li className="table__cell">
          <p className="table__heading">Дипломный проект включал 5 этапов</p>
          <p className="table__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="table__cell">
          <p className="table__heading">На выполнение диплома ушло 5 недель</p>
          <p className="table__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="time-line">
        <p className="time-line__number">1 неделя</p>
        <p className="time-line__number">4 недели</p>
        <p className="time-line__description">Back-end</p>
        <p className="time-line__description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
