// import { useState, useEffect } from "react";
// import { getPoster } from '../../../api/getTrendingMovies';

const Poster = ({ poster, alt }) => {
  const posterSrc = `https://image.tmdb.org/t/p/w300/${poster}`

  return <>
    <img src={posterSrc} alt={alt}></img>
  </>

}

export default Poster;