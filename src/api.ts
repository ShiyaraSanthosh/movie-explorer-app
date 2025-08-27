import axios from "axios";
const API_KEY = '04b048d843f1a7795b6b6286e0b3ef77';
const BASE_URL = 'https://api.themoviedb.org/3';
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";


export const getMovie = async (searchQuery?: string, category: string = "discover") => {
  try {
    let url;

    if (searchQuery && searchQuery.trim() !== "") {
      // 🔍 Search
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&language=en-US`;
    } else {
      // 🎬 Category
      switch (category) {
        case "popular":
          url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`;
          break;
        case "top_rated":
          url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
          break;
        case "upcoming":
          url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`;
          break;
        default:
          url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`;
      }
    }

    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.log("Error fetching movies:", error);
    return [];
  }
};

export const displayMovies = async (id: string) =>{
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("display movies:",error)
        return null;
    }
}


