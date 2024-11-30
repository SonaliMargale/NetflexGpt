import { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/movieSlice"


const Browse = () => {
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

    console.log("API_OPTIONS", API_OPTIONS)

    return (
        <>
            <h1>browse</h1>
            <Header></Header>
        </>
    )
}
export default Browse;