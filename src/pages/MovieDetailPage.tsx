import { displayMovies } from "@/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react"; 
interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

const MovieDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [displayMovie, setDisplayMovie] = useState<Movie | null>(null);
     useEffect(() =>{
        if (!id) return; // ✅ prevent undefined
        const fetchingMovie = async () =>{
            const data = await displayMovies(id);
            console.log("display fetched in Card:", data);
            setDisplayMovie(data);
        }
        fetchingMovie();
     }, [id])
     if(!displayMovie)
        return <p className="p-6">Loading.....</p>
    return (
        <div className="mt-8 w-[40%] mx-[auto] my-[10%] bg-white">
            <button onClick={() => navigate("/home")} className="absolute top-10 right-10 bg-gray-100 hover:bg-gray-300 p-2 rounded-full shadow-md"><X size={34}/></button>
            <img
                            src={`https://image.tmdb.org/t/p/w500${displayMovie.poster_path}`} 
                            alt={displayMovie.title}
                            className="w-100 h-100 rounded-lg shadow-md bg-white shadow-md w-60 rounded-lg shadow-sm dark:bg-black mt-2 ml-[5%] "
                          />
                          <h3 className="ml-20 mt-3 text-lg font-bold text-gray-800 ">{displayMovie.title}</h3>
                          <p className="ml-21 text-yellow-600 font-semibold">Rating:⭐ {displayMovie.vote_average}</p>
                          <h4 className="ml-15 mt-3 text-lg font-bold text-gray-800 ">Release date:{displayMovie.release_date}</h4>
                          <h3 className="ml-28 mt-6 text-lg font-bold text-gray-800">Overview</h3>
                          <p>{displayMovie.overview}</p>
                          
                          </div>
    );
}

export default MovieDetailPage;
