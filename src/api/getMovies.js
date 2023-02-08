

export const getTrendingMovies = async () => {
  const APIkey = 'ed69d95ca692b419d92a1a545c626337';
  const baseURL = 'https://api.themoviedb.org/3/trending/movie/day?';

  // axios.get(`${baseURL}api_key=${APIkey}`).then(response => {
  //   console.log(response.data.results);
  //   return response.data.results;
  // })

  return await fetch(`${baseURL}api_key=${APIkey}&page=1`).then(response => response.json());
}




export const getMoviesByQuery = async (query) => {
  const APIkey = 'ed69d95ca692b419d92a1a545c626337';
  const baseURL = 'https://api.themoviedb.org/3/search/movie'

  return await fetch(`${baseURL}?api_key=${APIkey}&language=en-US&query=${query}&page=1&include_adult=false`).then(response => response.json());
}