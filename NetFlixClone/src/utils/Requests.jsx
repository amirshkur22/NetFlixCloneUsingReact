//Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js.
// It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.
const API_KEY = import.meta.env.VITE_API_KEY;
const fetchData = {
  FetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  FetchUpcommingMovies: `/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`,
  FetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  FetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  FetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  FetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  FetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  FetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  FetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  FetchTvShows: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default fetchData;

//https://image.tmdb.org/t/p/original/jjECb6dSFUKXDtryuQk4rkFY7oP.jpg
//https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=94147fde901d23c19ccf064a344766ae
