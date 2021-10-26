import { useState, useEffect } from "react";

import './App.css'
import MovieList from "./components/MovieList";
import Heading from "./components/Heading";
import SearchBox from "./components/SearchBox";


function App() {
  const [movies, setMovies]= useState([])
  const [searchValue, setSearchValue]=useState('')

  const getMovieRequest = async (searchValue) =>{
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=3fbecb5a`
  
    const response = await fetch(url)
    const responseJson = await response.json()
    
    console.log(responseJson)
    
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
    
  }

  useEffect(()=>{
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div className='project-container'>
      <div className='header-container'>
        <Heading heading='Movies' />
        <SearchBox searchValue={searchValue}
                   setSearchValue={setSearchValue} />
      </div>
      <div className='movie-container'>
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
