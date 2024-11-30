// {
//     type:'ADD_MOVIES',
//     movies:[m1, m2, m3]
// }
// {
//     type:'DECREASE_COUNT'
// }

/* ACTION TYPES */
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SET_SHOW_FAVORITES = 'SET_SHOW_FAVORITES';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';

/* THESE FUNCTIONS ARE CALLED ACTION CREATORS */
export function addMovies(movies)
{
    return {
        type: ADD_TO_MOVIES,
        movies//this is the shorthand to write movies:movies
    }
}

export function addFavorite(movie)
{
    return {
        type: ADD_TO_FAVORITES,
        movie
    }
}
export function removeFromFavorites(movie)
{
    return {
        type: REMOVE_FROM_FAVORITES,
        movie
    };
}

export function setShowFavorites(val)
{
    return {
        type: SET_SHOW_FAVORITES,
        val
    }
}

export function addMovieToList(movie)
{
    return {
        type:ADD_MOVIE_TO_LIST,
        movie:movie
    }
}

export function handleMovieSearch(movie)
{
    const url = `http://www.omdbapi.com/?apikey=6bcfd294&t=${movie}`;

    return function (dispatch)
    {
        fetch(url)
            .then(response => response.json())
            .then(movie =>
            {
                //dispatch an action
                //{type:ADD_SEARCH_RESULT, movie}
                dispatch(addMovieSearchResult(movie));
            });
    };
}

export function addMovieSearchResult(movie)
{
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}