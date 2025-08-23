import { Link } from "react-router-dom";

interface Movie {
  id: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
}
interface CardProps {
  movies: Movie[];   // 👈 we expect movies from parent
}
const Card = ({movies}: CardProps) => {
  
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="p-4 space-y-2 rounded-lg shadow-sm dark:bg-black ">
        <ul className="grid grid-cols-4 gap-4 ml-10">
          {movies.map((movie: Movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} >
            <li key={movie.id} className="mb-6"> 
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className="w-60 h-80 rounded-lg shadow-md bg-white shadow-md w-60 rounded-lg shadow-sm dark:bg-black mt-13 ml-[5%]"
              />
              <h3 className="ml-3 mt-3 text-lg font-bold text-gray-800">{movie.title}</h3>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
