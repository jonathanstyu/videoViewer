import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

var videoApp = function (state, action) {
  if (typeof state === 'undefined') {
    return {
      allMovies: [],
      lastRefreshed: undefined,
      videoModalOpen: false,
      tableModalOpen: false,
      tabling: "",
      tablingType: "",
      currentlyWatching: "",
      history: [],
      searchString: ""
    }
  }
  switch (action.type) {
    case "RECEIVE_MOVIES":
      return Object.assign({}, state, {
        allMovies: action.movies,
        lastRefreshed: action.receivedAt
      });
      break;
    case "CLOSE_VIDEO_MODAL":
      return Object.assign({}, state, {
        videoModalOpen: false,
        currentlyWatching: ""
      })
      break;

    case "OPEN_MOVIE_MODAL":
      return Object.assign({}, state, {
        videoModalOpen: true,
        currentlyWatching: action.movie
      });
      break;

    case "CLOSE_TABLE_MODAL":
      return Object.assign({}, state, {
        tableModalOpen: false,
        tabling: "",
        tablingType: ""
      })
      break;

    case "SELECT_CATEGORY":
      return Object.assign({}, state, {
        tableModalOpen: true,
        tabling: action.value,
        tablingType: "categories"
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

    case "UPDATE_SEARCH_STRING":
      var searchS = typeof action.value === 'undefined' ? "" : action.value;
      return Object.assign({}, state, {
        searchString: searchS
      })
      break;
    default:
    return state
  }
}

const logger = createLogger();
var store = createStore(videoApp, applyMiddleware(thunkMiddleware));
export default store;
