import { getMovie } from '@/api';
import Card from '@/components/card';
import { useEffect, useState } from 'react';


const HomePage = () => {
  const [moviesList, setMovieList] = useState([]);
  const [searchQuery, setSerachQuery] = useState("");
  const [category, setCategory] = useState("discover");

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovie(category);
      console.log("Movies fetched in Card:", data);
      setMovieList(data);
    };

    fetchMovies();
  }, []);
  const handleQuery = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSerachQuery(query);
    const data =  await getMovie(query);
    setMovieList(data);
  }

    return (
               <div className="bg-gradient-to-r from-yellow-400 to-orange-500">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-[10%] py-4 bg-black bg-opacity-20 shadow-md">
        <div className="flex space-x-6 font-semibold text-white text-lg">
          <a href="#">kids</a>
          <a href="#">Drama</a>
          <a href="#">Comedy</a>
          <a href="#">Horror</a>
        </div>
         <div className="flex space-x-6 font-semibold text-white text-lg">
          <button onClick={() => setCategory("discover")}>Discover</button>
          <button onClick={() => setCategory("popular")}>Popular</button>
          <button onClick={() => setCategory("top_rated")}>Top Rated</button>
          <button onClick={() => setCategory("upcoming")}>Upcoming</button>
        </div>

        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleQuery}
            placeholder="Search..."
            className="px-10 py-2 rounded-lg border border-white focus:outline-none text-white"
          />
        </div>
      </nav>
      <Card movies= {moviesList}/>
    </div>
     
    );
}

export default HomePage;
