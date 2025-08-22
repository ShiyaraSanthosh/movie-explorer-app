import { getMovie } from "@/api";
import { useState, useEffect } from "react";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const poster_path = "/x6xiixuQ3FpbEgiu8cr1444H0g7.jpg";

const Card = () => {
  const [moviesList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovie();
      console.log("Movies fetched in Card:", data);
      setMovieList(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-white shadow-md w-60 rounded-lg shadow-sm dark:bg-black mt-[8%] ml-[5%]">
      <div className="p-4 space-y-2 rounded-lg shadow-sm dark:bg-black">
        <ul className="grid grid-cols-3 gap-6">
          {moviesList.map((movie) => (
            <li key={movie.id} className="mb-6">
              <img
                src={`${BASE_IMAGE_URL}${movie.poster_path}`} 
                alt={movie.title}
                className="w-60 h-80 rounded-lg shadow-md "
              />
              <h3 className="text-lg font-bold text-gray-800">{movie.title}</h3>
              <p className="text-yellow-600 font-semibold">⭐ {movie.vote_average}</p>
              <h3 className="text-lg font-bold text-gray-800">Overview</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{movie.overview}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
