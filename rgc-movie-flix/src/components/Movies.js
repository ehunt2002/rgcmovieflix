import React, { useEffect } from "react";
import "../styles/GlobalStyles.scss";
import { useSelector } from "react-redux";
import Movie from "./Movie";

const Movies = () => {

    const {latestmovies, searchedmovies} = useSelector(state => state.movieReducer);


    
    // useEffect(() => {
    //     console.log('state changed');
        
    //     console.log(searchedmovies);
    //     console.log(latestmovies);
    
    // },[latestmovies,searchedmovies]);

    
    return (
        <div className="moviescontainer">

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