

const APIkey = 'ed69d95ca692b419d92a1a545c626337';

export const getTrendingMovies = async (page) => {
  const baseURL = 'https://api.themoviedb.org/3/trending/movie/day?';

  return await fetch(`${baseURL}api_key=${APIkey}&page=${page}`).then(response => response.json());
}



export const getMoviesByQuery = async (query, page) => {
  const baseURL = 'https://api.themoviedb.org/3/search/movie'

  return await fetch(`${baseURL}?api_key=${APIkey}&language=en-US&query=${query}&page=${page}&include_adult=false`).then(response => response.json());
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

export const getMoviesByPerson = async (personId) => {
  const baseURL = 'https://api.themoviedb.org/3/person/'

  // movie_credits?api_key=<<api_key>>&language=en-US
  return await fetch(`${baseURL}${personId}/movie_credits?api_key=${APIkey}&language=en-US`).then(response => response.json());
}

export const getPersonDetails = async (personId) => {
  const baseURL = 'https://api.themoviedb.org/3/person/'

  return await fetch(`${baseURL}${personId}?api_key=${APIkey}&language=en-US`).then(response => response.json());
}