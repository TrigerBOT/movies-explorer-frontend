import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation/useFormWithValidation';

function Login({ onSignin, message }) {
  const formWithValidation = useFormWithValidation();
  const { email, password } = formWithValidation.values;
  const data = {
    email,
    password,
  };
  function handleSubmit(evt) {
    evt.preventDefault();
    onSignin(data);
  }

  const inputs = [
    {
      for: 'email',
      name: 'email',
      label: 'email',
      type: 'email',
    },
    {
      for: 'password',
      name: 'password',
      label: 'Пароль',
      type: 'password',
    },
  ];
  const title = 'Рады Видеть!';
  const button = 'Войти';
  const link = 'Зарегистрироваться';
  const footer = 'Ещё не зарегистрированы?';
  return (
    <Form
      inputs={inputs}
      title={title}
      button={button}
      link={link}
      message={message}
      footer={footer}
      formWithValidation={formWithValidation}
      onSubmit={handleSubmit}
      Link={(
        <Link to="/signup" className="form__link">
          Регистрация
        </Link>
      )}
    />
  );
}

export default Login;
