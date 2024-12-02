import axios from 'axios'
const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf'
const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf'


const getTrendingVideos = axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf");

const getMovieByGenreId = (id) =>axios.get(movieByGenreBaseUrl+"&with_genres="+id)
export default {
    getTrendingVideos,
    getMovieByGenreId
}