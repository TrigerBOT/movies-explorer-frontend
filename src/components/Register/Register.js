import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
function Register({ onSignup, message }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  function handleSubmit(evt) {
    evt.preventDefault();
    onSignup(data);
  }
  function handleChange(evt) {

    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setData({ ...data, [name]: value });
    setIsValid(target.closest("form").checkValidity());

  };
  const inputs = [
    {
      for: "name",
      name: "name",
      label: "Имя",
      change: handleChange
    },
    {
      for: "Email",
      name: "email",
      label: "Email",
      change: handleChange
    },
    {
      for: "password",
      name: "password",
      label: "Пароль",
      change: handleChange
    },
  ];
  const title = "Добро пожаловать!";
  const button = "Зарегистрироваться";
  const link = "Войти";
  const footer = "Уже зарегистрированы?";
  return (
    <Form
      onSubmit={handleSubmit}
      inputs={inputs}
      title={title}
      button={button}
      link={link}
      message={message}
      footer={footer}
      isValid={isValid}
      Link={
        <Link to="/signin" className="form__link">
          Войти
     </Link>
      }
    ></Form>
  );
}

export default Register;
