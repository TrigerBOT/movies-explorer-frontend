import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';

function Profile({
  onSignOut,
  onUpdateCurrentUser,
  message,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (currentUser.name !== undefined) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);
  useEffect(() => {
    if (currentUser.name !== undefined) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, []);
  function handleEmailChange(e) {
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      e.target.value,
    );

    if (!validEmail) {
      setEmailError('Неверный формат почты');
      setFormValid(false);
    } else {
      setEmailError('');
      setFormValid(true);
    }
    setEmail(e.target.value);
    console.log(formValid);
  }
  
  function handleNameChange(e) {
    const validName = /^[a-zA-Z- ]+$/.test(e.target.value);

    if (e.target.value.length < 2) {
      setNameError('Длина имени должна быть не менее 2 символов');
      setFormValid(false);
    } else if (e.target.value.length > 30) {
      setNameError('Длина имени должна должна быть не более 30 символов');
      setFormValid(false);
    } else if (!validName) {
      setNameError('Имя должно быть указано латиницей');
      setFormValid(false);
    } else {
      setNameError('');
      setFormValid(true);
    }
    setName(e.target.value);
    console.log(formValid);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValid);
    if (formValid) {
      e.preventDefault();
      onUpdateCurrentUser({
        name,
        email,
      });
    } else return;
  }

  return (
    <>
      <div className="page__container_white">
        <Header loggedIn={loggedIn} />
      </div>
      <form className="profile" name="profile" onSubmit={handleSubmit}>
        <h2 className="profile__title">
          Привет,
          {name}
          !
        </h2>
        <div className="profile__container">
          <div className="profile__field">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input type="text" name="name" value={name} onChange={handleNameChange} className="profile__input" />
            <span className="profile_error">{nameError}</span>
          </div>
          <div className="profile__line" />
          <div className="profile__field">
            <label className="profile__label" htmlFor="Email">
              Email
            </label>
            <input type="text" name="Email" value={email} onChange={handleEmailChange} className="profile__input" />
            <span className="profile_error">
              {emailError}
              {message}
            </span>
          </div>
        </div>
        <button className="profile__button" type="button" type="submit">
          Редактировать
        </button>

        <Link
          to="/signin"
          className="profile__button profile__button_exit"
          disabled={!formValid || name < 2 || email < 2}
          onClick={onSignOut}
        >
          Выйти из аккаунта
        </Link>
      </form>
    </>
  );
}

export default Profile;
