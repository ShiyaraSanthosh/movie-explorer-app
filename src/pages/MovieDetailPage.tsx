import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { displayMovies, getMovieCredits } from "@/api";

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface Crew {
  id: number;
  name: string;
  job: string;
  profile_path: string | null;
}

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<any>(null);
  const [cast, setCast] = useState<Cast[]>([]);
  const [crew, setCrew] = useState<Crew[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const movieData = await displayMovies(id);
      setMovie(movieData);

      const creditsData = await getMovieCredits(id);
      setCast(creditsData.cast); // only first 6
      setCrew(creditsData.crew); // only first 4
    };

    fetchData();
  }, [id]);

  if (!movie) return <p className="p-6">Loading...</p>;

  return (
    <div className="mt-8 w-[50%] mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Close button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-10 right-10 bg-gray-100 hover:bg-gray-300 p-2 rounded-full shadow-md"
      >
        <X size={28} />
      </button>

      {/* Movie Info */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg shadow-md w-60 mb-4"
      />
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <p className="text-gray-600">⭐ {movie.vote_average}</p>
      <p className="text-gray-600">Release: {movie.release_date}</p>
      <p className="mt-4">{movie.overview}</p>

      {/* Cast */}
<h3 className="text-xl font-bold mt-6">Cast</h3>
<div className="flex gap-4 overflow-x-auto mt-2 p-2">
  {cast.map((c) => (
    <div key={c.id} className="w-32 text-center flex-shrink-0">
      <img
        src={
          c.profile_path
            ? `https://image.tmdb.org/t/p/w200${c.profile_path}`
            : "https://via.placeholder.com/150"
        }
        alt={c.name}
        className="rounded-lg shadow-md"
      />
      <p className="font-semibold text-sm">{c.name}</p>
      <p className="text-xs text-gray-500">{c.character}</p>
    </div>
  ))}
</div>

{/* Crew */}
{/* <h3 className="text-xl font-bold mt-6">Cast</h3>
<Carousel items={cast} type="cast" />


<h3 className="text-xl font-bold mt-6">Crew</h3>
<Carousel items={crew} type="crew" /> */}
    </div>
  );
};

export default MovieDetailPage;
