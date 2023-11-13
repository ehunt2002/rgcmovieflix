import React, { useEffect } from "react";
import "../styles/GlobalStyles.scss";
import { useSelector } from "react-redux";
import Movie from "./Movie";
import { useLocation } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const Movies = () => {

    const {latestmovies, searchedmovies} = useSelector(state => state.movieReducer);
    //get clicked movie id
    const pathId = useLocation().pathname.split('/')[3];
    console.log(pathId)

    return (
        <div className="moviescontainer">
            {pathId && <MovieDetail movieid={pathId} />}
            { latestmovies  ?
                (latestmovies.map(
                    movie => <Movie id={movie.id} movie={movie} ></Movie>
                ))
                :
                "no latest movies" 
            }
            {
                searchedmovies ?
                    (searchedmovies.map(
                    movie => <Movie id={movie.id} movie={movie} ></Movie>
                ))
                :
                " no search results"
            }
        </div>
    )
}

export default Movies;