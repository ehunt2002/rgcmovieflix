import axios from 'axios';
import { listMovies } from '../api';


export const getlatestMovies = () => async(dispatch) => {

        let limit = 15; 
        const latestMovies = await axios.get(`${listMovies}?limit=${limit}&sort_by=date_added`);
        dispatch({
            type: "FETCH_LATEST_MOVIES",
            payload: {
                latestmovies: latestMovies.data.data.movies,
                page: latestMovies.data.data.page_number,
                limit: latestMovies.data.data.limit,
                moviecount: latestMovies.data.data.movie_count
            }
        })
}

export const searchMovies = (moviename) => async(dispatch) => {

    let limit = 15; 
    const getMovies = await axios.get(`${listMovies}?limit=${limit}&query_term=${moviename}&minimum_rating=5&sort_by=rating`);
    console.log(`${listMovies}?limit=${limit}&query_term=${moviename}`);
    dispatch({
        type: "SEARCH_MOVIES",
        payload: {
            searchedmovies: getMovies.data.data.movies,
            page: getMovies.data.data.page_number,
            limit: getMovies.data.data.limit,
            moviecount: getMovies.data.data.movie_count
        }
    })
}