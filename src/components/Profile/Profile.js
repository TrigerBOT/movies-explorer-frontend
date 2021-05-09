import React, { useContext } from "react";


function Profile() {
  return (
    <form className="profile" name="profile" >
      <h2 className="profile__title">Привет, Виталя!</h2>
      <div className="profile__container">
    <div className="profile__field">
         <label className="profile__label" for="name">Имя</label>
         <input type="text" name="name" className="profile__input"></input>
    </div>
    <div className="profile__line"></div>
    <div className="profile__field">
    <label className="profile__label" for="Email">Email</label>
         <input type="text" name="Email" className="profile__input"></input>
    </div>
      </div>
   
        <button className="profile__button" type="button">Редактировать</button>
        <button className="profile__button profile__button_exit " type="button">
          Выйти из аккаунта
        </button>
   
    </form>
  );
}

export default Profile;
