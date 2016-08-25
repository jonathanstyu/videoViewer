import Movie from './movie';

function receiveMovies(movies) {
  return {
    type: "RECEIVE_MOVIES",
    movies: movies || [],
    receivedAt: Date.now()
  }
}

function receiveHistory(history) {
  return {
    type: "RECEIVE_HISTORY_SUCCESS",
    history: history
  }
}

export function getMovies() {
  // Middleware allows us to pass a function into dispatch
  return (dispatch) => {
    dispatch({type: "GETTING_MOVIES"})
    var that = this;
    return fetch('https://demo2697834.mockable.io/movies', {
      method: 'get'
    }).then(function (response) {
      return response.json()
    }).then(function (json) {
      var parsedMovies = json.entries.map(function (entry) {
        return new Movie(entry)
      })
      dispatch(receiveMovies(parsedMovies))
    }).catch(function (error) {
      console.log(error.message);
    })
  }
}

export function getHistory() {
  return dispatch => {
    dispatch({type: "GETTING_HISTORY"});
    return fetch('/history', {
      method: "get"
    }).then(function (response) {
      if (response.ok) {
        return response.json()
      }
    }).then(function (json) {
      dispatch(receiveHistory(json))
    }).catch(function (error) {
      dispatch({type: "ERROR"})
    })
  }
}

export function updateHistory(movie) {
  return (dispatch) => {
    dispatch({type: "UPDATING_HISTORY"});
    return fetch('/history', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    }).then(function (response) {
      if (response.ok) {
        dispatch({type: "UPDATE_HISTORY_SUCCESS"})
      }
    }).catch(function (error) {
      dispatch({type: "UPDATE_HISTORY_FAIL", message: error.message})
    })
  }
}
