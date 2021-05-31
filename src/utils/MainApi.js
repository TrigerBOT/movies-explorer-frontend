class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleOriginalResponse(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return Promise.resolve(res.json())
      .then((data) => data);
  }

  register(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleOriginalResponse);
  }

  authorize(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleOriginalResponse);
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleOriginalResponse);
  }

  updateCurrentUserProfile(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._handleOriginalResponse);
  }

  saveMovie(data, token) {
    const imgUrl = 'https://api.nomoreparties.co';
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country || 'unknown',
        director: data.director || 'unknown',
        duration: data.duration || 'No data',
        year: data.year || 'unknown',
        description: data.description || 'No description',
        image: imgUrl + data.image.url,
        trailer: imgUrl + data.trailerLink || 'No trailer',
        thumbnail: imgUrl + data.image.url || 'No image',
        movieId: data.movieId || 'No data',
        nameRU: data.nameRU,
        nameEN: data.nameEN || 'No name',
      }),
    }).then(this._handleOriginalResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleOriginalResponse);
  }

  deleteSavedMovie(id, token) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleOriginalResponse);
  }
}

const OPTIONS = {
  baseUrl: 'https://api.moviefinder.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json',
  },
};

const mainApi = new MainApi(OPTIONS);

export default mainApi;
