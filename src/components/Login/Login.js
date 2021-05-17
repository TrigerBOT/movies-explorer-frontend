import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
function Login() {
  const inputs = [
    {
      for: "Email",
      name: "Email",
      label: "Email",
    },
    {
      for: "password",
      name: "Password",
      label: "Пароль",
    },
  ];
  const title = "Рады Видеть!";
  const button = "Войти";
  const link = "Зарегистрироваться";
  const footer = "Ещё не зарегистрированы?";
  return (
    <Form
      inputs={inputs}
      title={title}
      button={button}
      link={link}
      footer={footer}
      Link={
        <Link to="/signup" className="form__link">
           Регистрация
        </Link>
      }
    ></Form>
  );
}

export default Login;
