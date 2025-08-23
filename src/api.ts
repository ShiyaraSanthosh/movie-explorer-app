import axios from "axios";
const API_KEY = '04b048d843f1a7795b6b6286e0b3ef77';
const BASE_URL = 'https://api.themoviedb.org/3';
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";


export const getMovie = async () =>{
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
        return response.data.results; 
        
    } catch (error) {
        console.log("Error fetching movies:",error)
        return []
        
    }
}
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




