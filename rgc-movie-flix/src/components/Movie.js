import React from "react";
import "../styles/GlobalStyles.scss";

const Movie = ({id,movie}) => {
    return(
        <div className="moviebox" id={id}>
            <img src={movie.medium_cover_image}></img>
            <div className="titlebox">
            <h3 class="title">{movie.title_english}</h3>
            <h5>{movie.rating}</h5>
            </div>
        </div>
    );
}

export default Movie;