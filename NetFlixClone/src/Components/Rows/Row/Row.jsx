// Axios: a library for making HTTP requests
// movieTrailer: a library for fetching movie trailers
// YouTube: a library for rendering YouTube videos
//URLSearchParams object allows us to work with the query string parameters of the URL, such as retrieving the value of a specific parameter or iterating over all the parameters.
// split method is a string method in JavaScript that splits a string into an array of substrings, based on a specified delimiter
import "./row.css";
import { useEffect, useState } from "react";
import Axios from "../../../utils/Axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = (props) => {
  const { title, fetchUrl, isLargeRow } = props;
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const imageBaseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchURLData() {
      try {
        const request = await Axios.get(fetchUrl);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchURLData();
  }, [fetchUrl]);
  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      // console.log(trailerUrl)
    }
    try {
      const url = await movieTrailer(
        movie?.title || movie?.name || movie?.original_name
      );
      console.log(url);
      if (!url) {
        console.log("no trailer");
        return;
      }
      const urlParts = url?.split("?");

      const [key, value] = urlParts[1]?.split("=");
      if (key === "v") {
        setTrailerUrl(value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="imagePosters">
          {movies?.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              src={`${imageBaseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`imagePoster ${isLargeRow && "imagePosterLarge"}`}
            />
          ))}
        </div>
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
};

export default Row;
