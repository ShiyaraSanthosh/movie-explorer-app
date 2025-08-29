import { getMovie } from '@/api';
import Card from '@/components/card';
import { useEffect, useState } from 'react';
import TrendingList from './TrendingList';

const HomePage = () => {
  const [moviesList, setMovieList] = useState([]);
  const [searchQuery, setSerachQuery] = useState("");
  const [category, setCategory] = useState("discover");

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovie(searchQuery, category);
      console.log("Movies fetched in Card:", data);
      setMovieList(data);
    };

    fetchMovies();
  }, [category]); 

  const handleQuery = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSerachQuery(query);

    const data = await getMovie(query); 
    setMovieList(data);
  };

  return (
    <div className='bg-gray-200 w-full h-full'>
    <div >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-[10%] py-4 bg-black bg-opacity-20 shadow-md">
        <div className="flex space-x-6 font-semibold text-white text-lg">
          <button onClick={() => setCategory("discover")} className=' text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'>Discover</button>
          <button onClick={() => setCategory("popular")} className=' text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Popular</button>
          <button onClick={() => setCategory("top_rated")} className='block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Top Rated</button>
          <button onClick={() => setCategory("upcoming")} className='block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Upcoming</button>
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
       <div className="mt-10">
        <TrendingList />
      </div>
      <Card movies={moviesList} />
    </div>
    </div>
  );
};

export default HomePage;
