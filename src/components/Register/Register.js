import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation/useFormWithValidation';

function Register({ onSignup, message }) {
  const formWithValidation = useFormWithValidation();
  const { name, email, password } = formWithValidation.values;

  function handleSubmit(evt) {
    evt.preventDefault();
    onSignup(name, email, password);
  }

  const inputs = [
    {
      for: 'name',
      name: 'name',
      label: 'Имя',
      type: 'text',
    },
    {
      for: 'email',
      name: 'email',
      type: 'email',
      label: 'Email',
    },
    {
      for: 'password',
      type: 'password',
      name: 'password',
      label: 'Пароль',
    },
  ];
  const title = 'Добро пожаловать!';
  const button = 'Зарегистрироваться';
  const link = 'Войти';
  const footer = 'Уже зарегистрированы?';
  return (
    <Form
      onSubmit={handleSubmit}
      inputs={inputs}
      title={title}
      button={button}
      link={link}
      message={message}
      formWithValidation={formWithValidation}
      footer={footer}
      Link={(
        <Link to="/signin" className="form__link">
          Войти
        </Link>
      )}
    />
  );
}

export default Register;
