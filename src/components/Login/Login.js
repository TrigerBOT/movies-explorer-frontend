import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
function Login({ onSignin, message }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(evt) {
    evt.preventDefault();
    onSignin(data);
  }
  const [isValid, setIsValid] = useState(false);
  function handleChange(evt) {

    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setData({ ...data, [name]: value });
    setIsValid(target.closest("form").checkValidity());

  };

  const inputs = [
    {
      for: "email",
      name: "email",
      label: "email",
      change: handleChange
    },
    {
      for: "password",
      name: "password",
      label: "Пароль",
      change: handleChange
    },
  ];
  const title = "Рады Видеть!";
  const button = "Войти";
  const link = "Зарегистрироваться";
  const footer = "Ещё не зарегистрированы?";
  return (
    <Form
      inputs={inputs}
      isValid={isValid}
      message={message}
      title={title}
      button={button}
      link={link}
      footer={footer}
      onSubmit={handleSubmit}
      Link={
        <Link to="/signup" className="form__link">
          Регистрация
        </Link>
      }
    ></Form>
  );
}

export default Login;
