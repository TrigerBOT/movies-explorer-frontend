import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({ loggedIn }) {
  return (
    <>
      <div className="page__container">
        <Header loggedIn={loggedIn} />
      </div>
      <main className="main">
        <div className="main__container promo">
          <Promo />
        </div>
        <div className="main__container">
          <NavTab />
        </div>
        <div className="main__container">
          <AboutProject />
        </div>
        <div className="main__container techs">
          <Techs />
        </div>
        <div className="main__container">
          <AboutMe />
        </div>
        <div className="main__container">
          <Portfolio />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
