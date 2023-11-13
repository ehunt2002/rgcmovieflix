import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import _ from 'lodash';
import "../styles/GlobalStyles.scss";
import { Link } from "react-router-dom";

const MovieDetail = (movieid) => {
    const {latestmovies,searchedmovies} = useSelector(state => state.movieReducer)
    const [movie, setMovie] = useState("");
    let x = {};
    debugger;
    
    useEffect(()=> {
    if(latestmovies.length !== 0)
    {
       x = _.find(latestmovies, (moviex) => {
            if(moviex.id == movieid.movieid){
                return moviex;
            }
            }
        )
            
        
    }else if(searchedmovies.length !== 0)
    {
        x = _.find(searchedmovies, (moviex) => {
            if(moviex.id == movieid)
            return moviex;
            }
        );

    }

    setMovie(x);
},[]);

console.log(movie.torrents);
    return(
        <div className="card-shadow">
            <Link to={`/rgcmovieflix`} >
                <p className="cancel">X</p>
                </Link>
            <div className="movie-detail-container">
                <img src={movie.large_cover_image} alt="" className="movie-poster" />
                
                <h3>{movie.title}</h3>
                <p className="description">
                   {movie.summary} 
                </p>
                <div className="movie-links">
                    <ul>
                     {movie.torrents.map(t => <li><a href={t.url}>Link</a></li>)} 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;