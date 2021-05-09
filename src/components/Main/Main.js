import React from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
function Main() {
  return (
    <main className="main">
      <div className="main__container promo">
        <Promo></Promo>
      </div>
      <div className="main__container">
        <NavTab></NavTab>
      </div>
      <div className="main__container">
        <AboutProject></AboutProject>
      </div>
      <div className="main__container techs">
        <Techs></Techs>
      </div>
      <div className="main__container">
        <AboutMe></AboutMe>
      </div>
      <div className="main__container">
        <Portfolio></Portfolio>
      </div>
    </main>
  );
}

export default Main;
