import React from "react";
import "../styles/GlobalStyles.scss";
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Movie = ({id,movie}) => {
    return(
        <div className="moviebox" id={id}>
            <Link to={`/rgcmovieflix/movie/${id}`}>
            <img src={movie.medium_cover_image}></img>
            <div className="titlebox">
            <h3 class="title">{movie.title_english}</h3>
            <h5>{movie.rating}</h5>
            </div>
            </Link>
        </div>
    );
}

export default Movie;