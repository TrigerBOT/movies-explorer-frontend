import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
function Register() {
  const inputs = [
    {
      for: "name",
      name: "Name",
      label: "Имя",
    },
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
  const title = "Добро пожаловать!";
  const button = "Зарегистрироваться";
  const link = "Войти";
  const footer = "Уже зарегистрированы?";
  return (
    <Form
      inputs={inputs}
      title={title}
      button={button}
      link={link}
      footer={footer}
      Link={
        <Link to="/signin" className="form__link">
        Войти
     </Link>
      }
    ></Form>
  );
}

export default Register;
