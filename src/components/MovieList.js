

const MovieList = (props) => {
  return (  
    <>
      {props.movies.map((movie,index)=>(
        <div>
          <img src={movie.Poster}        
               alt='movie img'>
          </img>
          
        </div>
      ))}    
    </>
  );
}
 
export default MovieList;