

const APIkey = 'ed69d95ca692b419d92a1a545c626337';

export const getTrendingMovies = async () => {
  
  const baseURL = 'https://api.themoviedb.org/3/trending/movie/day?';
  // axios.get(`${baseURL}api_key=${APIkey}`).then(response => {
  //   console.log(response.data.results);
  //   return response.data.results;
  // })
  return await fetch(`${baseURL}api_key=${APIkey}&page=1`).then(response => response.json());
}



export const getMoviesByQuery = async (query) => {
  const baseURL = 'https://api.themoviedb.org/3/search/movie'

  return await fetch(`${baseURL}?api_key=${APIkey}&language=en-US&query=${query}&page=1&include_adult=false`).then(response => response.json());
}


export const getMovieDetails = async (movieId) => {
  const baseURL = 'https://api.themoviedb.org/3/movie/'

  return await fetch(`${baseURL}${movieId}?api_key=${APIkey}&language=en-US`).then(response => response.json());
}


export const getMovieCredits = async (movieId) => {
  const baseURL = 'https://api.themoviedb.org/3/movie/'

  return await fetch(`${baseURL}${movieId}/credits?api_key=${APIkey}&language=en-US`).then(response => response.json());
}


export const getReviews = async (movieId) => {
  const baseURL = 'https://api.themoviedb.org/3/movie/'

  return await fetch(`${baseURL}${movieId}/reviews?api_key=${APIkey}`).then(response => response.json());
}