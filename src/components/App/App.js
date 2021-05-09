import React, { useState } from "react";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import { Route, Switch, useLocation } from "react-router";
import Header from "../Header/Header";
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const { pathname } = useLocation();

  const onSignIn = () => {
    setLoggedIn(true);
  };

  const onSignOut = () => {
    setLoggedIn(false);
  };
  return (
    <div className="page">
      <Switch>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/signin">
          <Login onSignIn={onSignIn} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/">
          <Route exact path="/">
            <div className={`page__container`}>
              <Header loggedIn={loggedIn} />
            </div>
            <Main />
          </Route>
          <Route path="/movies">
            <div className={`page__container_white`}>
              <Header loggedIn={loggedIn} />
            </div>
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <div className={`page__container_white`}>
              <Header loggedIn={loggedIn} />
            </div>
            <Movies />
          </Route>
          <Route path="/profile">
            <div className={`page__container_white`}>
              <Header loggedIn={loggedIn} />
            </div>
            <Profile onSignOut={onSignOut} />
          </Route>
          <Switch>
            <Route path="/profile" />
            <Route path="/">
              <div className={`page__container_grey`}>
                <Footer />
              </div>
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
