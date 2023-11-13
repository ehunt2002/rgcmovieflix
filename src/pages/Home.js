import React, { useState } from "react";
import styles from '../styles/GlobalStyles.scss'
import { useDispatch } from "react-redux";
import { searchMovies } from "../actions/movieActions";
import { Link } from "react-router-dom";


const Home = () => {

    let [moviename,setMovieName] = useState('');
    const dispatch = useDispatch();

    const searchMovie = (e) => {
        setMovieName(e.target.value);
    }

    const handleSearch = (e) => {
        console.log(`${moviename}`);
        dispatch(searchMovies(moviename));        
        e.preventDefault();
    }

    return (
        <div className="searchcontainer">
         <Link to={"/rgcmovieflix"} >     
         <form onSubmit={handleSearch}>
         <input type="search" placeholder="Search Movie" onChange={searchMovie} className="searchbox"></input>
         </form>         
         </Link>
        </div>
    )
}

export default Home;