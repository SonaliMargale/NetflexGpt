import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieVideos = async () => {
       const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
        const data = await response.json()
        console.log("getdata", data)

        const filterdata = data.results.filter((video) => video.type === "Trailer")
        const Trailer = filterdata.length ? filterdata[0] : data.results[0];
        console.log("tariler", Trailer)
        dispatch(addTrailerVideo)
    }

    useEffect(() => {
        getMovieVideos();
    }, [])


}
export default useMovieTrailer;