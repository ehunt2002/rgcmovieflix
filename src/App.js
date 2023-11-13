import { getlatestMovies } from './actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from '../src/pages/Home';
import  '../src/styles/GlobalStyles.scss'
import Movies from './components/Movies';

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getlatestMovies());
  },[dispatch]);

  const refreshMovies = () => {
    dispatch(getlatestMovies());
  }
  
  const movies = useSelector(state => state.page);
  console.log(movies);

  return (
    <div className="container">
      <h2 onClick={() => refreshMovies()}>RGC Movie Search</h2>      
      <Home></Home>
      <Movies></Movies>
      </div>
  );
}

export default App;
