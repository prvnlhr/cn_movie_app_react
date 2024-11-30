import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavorites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    // in real world, 1. we make api call. 2.dispatch action
    const { store } = this.props;
    // store.dispatch({
    //   type: "ADD_MOVIES",
    //   movies: data,
    // });
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log(this.props.store.getState());
  }

  //____________________________________________
  isMovieFavorite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favorites.indexOf(movie);
    if (index !== -1) {
      //movie found
      return true;
    }
    return false;
  };
  //____________________________________________
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  };

  render() {
    const { movies } = this.props.store.getState(); //{movies:{} , search:{}}
    const { search } = this.props.store.getState();
    const { list, favorites, showFavorites } = movies;
    console.log("RENDER", this.props.store.getState());
    const displayMovies = showFavorites ? favorites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
