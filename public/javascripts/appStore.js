import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

var videoApp = function (state, action) {
  if (typeof state === 'undefined') {
    return {
      movies: [],
      lastRefreshed: undefined,
      modalOpen: false,
      currentlyWatching: "",
      history: []
    }
  }
  switch (action.type) {
    case "RECEIVE_MOVIES":
      return Object.assign({}, state, {
        movies: action.movies,
        lastRefreshed: action.receivedAt
      });
      break;
    case "CLOSE_VIDEO_MODAL":
      return Object.assign({}, state, {
        modalOpen: false,
        currentlyWatching: ""
      })
      break;
    case "OPEN_MOVIE_MODAL":
      return Object.assign({}, state, {
        modalOpen: true,
        currentlyWatching: action.movie
      });
      break;
    case "UPDATE_HISTORY_SUCCESS":
      return Object.assign({}, state);
      break;

    case "RECEIVE_HISTORY_SUCCESS":
      return Object.assign({}, state, {
        history: action.history
      })
      break;
    default:
    return state
  }
}

const logger = createLogger();
var store = createStore(videoApp, applyMiddleware(thunkMiddleware, logger));
export default store;
