import { render } from "@testing-library/react";
import React from "react";
import { addFavorite  , removeFromFavorites} from "../actions";



class MovieCard extends React.Component {
handleFavouriteClick =()=>{
  const{movie} = this.props
  this.props.dispatch(addFavorite(movie))
}
handleUnFavouriteClick =()=>{
  const{movie} = this.props
  this.props.dispatch(removeFromFavorites(movie))
}

  render() {
    const { movie , isFavorite } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {
                isFavorite
              ? <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick} >Unfavorite</button>
              : <button className="favourite-btn" onClick={this.handleFavouriteClick} >Favourite</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
