import React from "react";
import Avatar from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section  id="student" className="about-me main__section">
      <h2 className="about-me__title main__section-title ">Студент</h2>
      <p className="about-me__name">Кирилл</p>
      <p className="about-me__profession">Фронтенд-разработчик, 20 лет</p>
      <p className="about-me__description">
        Я живу в Казани, учусь в Институте Физики в КФУ на направлении ИБ.
        Поняв, что эта профессия мне не подходит, решил искать для себя что-то
        новое и нашел Яндек.Практикум. Выбрал для себя Frontend-development и
        сейчас с удовольствием занимаюсь этим. Регулярно занимаюсь
        самообразованием и освоением нового материала. Помимо программирования
        играю на казанских вечеринках. Свободно разговариваю на английском.
        Всегда с радостью открываю для себя что-нибудь новое.
      </p>
      <ul className="about-me__links">
        <li>
          <a href="https://vk.com/kirillytzh" className="about-me__link">
            ВКонтакте
          </a>
        </li>
        <li>
          <a href="https://github.com/TrigerBOT" className="about-me__link">
            GitHub
          </a>
        </li>
      </ul>
      <img
        src={Avatar}
        alt="Фотография Разработчика"
        className="about-me__avatar"
      />
    </section>
  );
}

export default AboutMe;
