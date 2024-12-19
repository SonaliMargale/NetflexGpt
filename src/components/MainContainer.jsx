import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground"
 
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if(movies === null) return null;
    const mainMovie = movies[0]
    console.log("mainMovie",mainMovie)

    const { original_title,overview} = mainMovie

    return (
        <div>
             <VideoTitle title={original_title} overview={overview} />
            <VideoBackground />
        </div>
    )
}
export default MainContainer;