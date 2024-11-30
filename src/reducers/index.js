import { combineReducers } from "redux";

import {
  ADD_TO_MOVIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_SHOW_FAVORITES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions";

//MOVIE REDUCER____________________________________________
const initialMovieState = {
  list: [],
  favorites: [],
  showFavorites: false,
};

export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_TO_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    case REMOVE_FROM_FAVORITES:
      const filteredArray = state.favorites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favorites: filteredArray,
      };
    case SET_SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: action.val,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

// SEARCH REDUCER____________________________________________
const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

// ROOT REDUCER______________________________________________________
// const initialRootState = {
//   movies: initialMovieState,
//   search: initialSearchState,
// };
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }
// using inbuilt combineReducer function of redux automatically combine reducers
export default combineReducers({
  movies: movies,
  search: search,
});
