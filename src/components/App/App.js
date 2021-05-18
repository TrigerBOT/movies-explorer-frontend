import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userMovies, setUserMovies] = useState([]);
  const [filters, setFilters] = useState({});
  const [shortMovies, setShortMovies] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  let location =  useLocation();
  useEffect(() => {
 
    getAllMovies();
     
  }, [currentUser]);
  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      mainApi.getSavedMovies(localStorage.getItem('jwt'))
        .then((data) => {
          setUserMovies(data);
        })
        .catch(console.log)
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getCurrentUser();
            setCurrentUser(res);
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(`Переданный токен некорректен или просрочен: ${err}`);
          localStorage.removeItem("jwt");
          history.push("/");
        });
    }
  }, []);

  function getCurrentUser() {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .checkToken(jwt)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          localStorage.setItem("currentUser", JSON.stringify(userData));
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("jwt");
        localStorage.removeItem("currentUser");
      });
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    mainApi
      .register({ name, email, password })
      .then((res) => {
        if (res) {
          setMessage("");
          handleLogin(email, password);
          setLoggedIn(true);
          setCurrentUser(res);
          history.push("/signin");
        }
      })
      .catch((err) => {
        if (err === 409) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При регистрации пользователя произошла ошибка");
        }
      }).finally(()=>{setIsLoading(false)});;
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    mainApi
      .authorize({ email, password })
      .then((data) => {
        if (!data) {
          setMessage("Что-то пошло не так");
          return false;
        }
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setMessage("");
          setLoggedIn(true);
          getCurrentUser();
          history.push("/movies");
          return loggedIn;
        }
      })
      .catch((err) => {
        setMessage("При авторизации произошла ошибка");
        if (err === 401) {
          setMessage("Пользователь с таким email не найден");
        }
        if (err === 400) {
          setMessage("Неверный email или пароль");
        }
        localStorage.removeItem("jwt");
      })
      .finally(()=>{setIsLoading(false)});
  }

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userMovies");
    localStorage.removeItem("movies");
    localStorage.removeItem("sortedMovies");
    localStorage.removeItem("currentUser");
    setUserMovies([]);
    setCurrentUser({});
    setLoggedIn(false);
    setMessage("");
    history.push("/");
  };

  function handleUpdateUser(data) {
    setIsLoading(true);
    mainApi
      .updateCurrentUserProfile(data,localStorage.getItem("jwt"))
      .then((editedData) => {
        setCurrentUser(editedData);
        setMessage("Данные профиля успешно обновлены");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        if (err.status === 409) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При изменении данных профиля произошла ошибка");
        }
      })
      .finally(()=>{setIsLoading(false)});
  }
  // movies
  const getAllMovies = () => {
    setIsLoading(true);
    moviesApi.getMoviesData()
      .then((data) => {
        console.log(data)
        const allMovies = data.map(({
          country,
          director,
          duration,
          year,
          description,
          image,
          trailerLink,
          id,
          nameRU,
          nameEN,
        }) => ({
          country,
          director,
          duration,
          year,
          description,
          image,
          trailer: trailerLink,
          movieId: id,
          nameRU,
          nameEN,
          thumbnail: image 
        }));
        localStorage.setItem("allMovies", JSON.stringify(allMovies));
        setMovies(allMovies);
      })
      .catch(console.log)
      .finally(() => {
        setIsLoading(false);
      });
  };

    const onChangeFilters = ({ key, value }) => {
      setFilters(prev => {
        handleFilterAllMovies({ ...prev, [key]: value });
        return { ...prev, [key]: value };
      });
    };
    const handleSaveMovieCard = (data) => {
      setIsLoading(true);
      mainApi.saveMovie(data,localStorage.getItem("jwt"))
        .then((res) => {
          setUsersMoviesCards(prev => ([...prev, res]));
        })
        .catch((err) => {
          console.log(err)
        },
        )
        .finally(() => {
          setIsLoading(false);
        });
    };
    const handleDeleteMovieCard = (movieId) => {
      const id = usersMoviesCards.find(item => item.movieId === movieId)._id;
      setIsLoading(true);
      mainApi.deleteSavedMovie(id)
        .then(() => {
          setUserMovies(prev => prev.filter(item => item._id !== id));
        })
        .catch((err) => {
            console.log(err)
          },
        )
        .finally(() => {
          setIsLoading(false);
        });
    };

//filter
const getFilteredMovies = (movies, { text = "", short = false }) => {
  return movies.filter(item => {
    if (short && item.duration > 40) {
      return false;
    }
    for (let key in item) {
      if (item.hasOwnProperty(key) && typeof item[key] === "string" &&
        item[key].toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
};

const handleFilterAllMovies = (filters) => {
  if (localStorage.getItem("allMovies")) {
    setIsLoading(true);
    const filteredMovies = getFilteredMovies(JSON.parse(localStorage.getItem("allMovies")), filters) || [];
    setMovies(filteredMovies);
    setIsLoading(false);
  } else {
    getAllMovies("");
  }
};

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
          >
            <Movies movies={movies}
             onChangeFilters={onChangeFilters}
              isShortMovie={shortMovies}
              message={message}
              savedMovies={userMovies}
              onDeleteMovie={handleDeleteMovieCard}
             />
          </ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
          >
            <Movies
              movies={userMovies}
              onChangeFilters={onChangeFilters}
              isShortMovie={shortMovies}
              onSaveMovie={handleSaveMovieCard}
              onDeleteMovie={handleDeleteMovieCard}
              message={message}
              isSavedMovies={true}
            />
          </ProtectedRoute>
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
          >
            <Profile
              loggedIn={loggedIn}
              onSignOut={handleSignOut}
              onUpdateCurrentUser={handleUpdateUser} />
          </ProtectedRoute>
          <Route path="/signup">
            <Register onSignup={handleRegister} message={message} />
          </Route>
          <Route path="/signin">
            <Login onSignin={handleLogin} loggedIn={loggedIn} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {isLoading && <Preloader/>}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
