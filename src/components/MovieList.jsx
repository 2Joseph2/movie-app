import movies from "../db/movies"
import MovieCard from "./MovieCard"

const MovieList = () => {
    return ( 
        <div className="cards">
            {movies.map((el)=>{
                return <MovieCard el={el} />
            })}
        </div>
     );
}
 
export default MovieList;