import { Link } from "react-router-dom";

interface Movie {
  id: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
}
interface CardProps {
  movies: Movie[];  
}
const Card = ({movies}: CardProps) => {
  
  return (
    
    <div className='bg-gray-200 w-full h-full' >
      
      <div >
        <ul className="grid grid-cols-4 ml-10">
          
          {movies.map((movie: Movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} >
            <li key={movie.id} > 
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className="w-60 h-80 rounded-lg shadow-md bg-white shadow-md rounded-lg shadow-sm dark:bg-black mt-13 ml-40 "
              />
              <h3 className="ml-40 mt-3 text-lg font-bold text-gray-800">{movie.title}</h3>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
