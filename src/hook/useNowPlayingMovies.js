import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {addNowPlayingMovies} from "../utils/movieSlice";
import { useEffect } from "react";


const  useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
         console.log("Response:", response);
         const json = await response.json();
         console.log("Response JSON:", json.results);
         dispatch(addNowPlayingMovies(json.results))
         
     } 
     useEffect(() => {
         getNowPlayingMovies()
     }, [])
}
export default useNowPlayingMovies;