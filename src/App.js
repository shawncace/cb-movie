import { useState, useEffect } from "react";

import './App.css'
import MovieList from "./components/MovieList";


function App() {
  const [movies, setMovies]= useState([])

  const getMovieRequest = async () =>{
    const url = 'https://www.omdbapi.com/?s=star wars&apikey=3fbecb5a'
  
    const response = await fetch(url)
    const responseJson = await response.json()
    
    console.log(responseJson)
    setMovies(responseJson.Search)
  }

  useEffect(()=>{
    getMovieRequest()
  }, [])

  return (
    <div className='project-container'>
      <div className='movie-container'>
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
