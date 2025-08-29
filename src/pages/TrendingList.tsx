import { getTrending } from "@/api";
import Card from "@/components/card";
import { useEffect, useState } from "react";


const TrendingList = () => {
    const [mediaType, setMediaType] = useState("movies");
    const [timeWindow, setTimeWindow] = useState("day");
 const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchTrending = async () => {
            const data =  await getTrending(mediaType, timeWindow);
            setItems(data);
            
        };
        fetchTrending();

    }, [mediaType, timeWindow]);
    return (
        <div className="flex ">
      {/*  Side Navbar */}
      <div className="w-48  bg-black p-4 rounded-lg text-white space-y-4">
        <h2 className="font-bold text-lg border-b pb-2">Media Type</h2>
        <ul className="space-y-4">
          <li><button onClick={() => setMediaType("movie")}>Movies</button></li>
          <li><button onClick={() => setMediaType("tv")}>TV Shows</button></li>
          <li><button onClick={() => setMediaType("all")}>All</button></li>
        </ul>

        <h2 className="font-bold text-lg border-b pb-2 mt-4">Time Window</h2>
        <ul className="space-y-4">
          <li><button onClick={() => setTimeWindow("day")}>Daily</button></li>
          <li><button onClick={() => setTimeWindow("week")}>Weekly</button></li>
        </ul>
      </div>
       <div className="flex-1 ml-6">
        <h2 className="text-2xl font-bold text-white mb-4">Trending</h2>
        <Card movies={items} />
      </div>
    </div>
  );
}

export default TrendingList;
