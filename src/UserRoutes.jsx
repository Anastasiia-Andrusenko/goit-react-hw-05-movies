import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
// import Home from "./components/pages/Home/Home";
// import Movies from "./components/pages//Movies/Movies";
// import MovieDetails from "./components/pages/MovieDetails/MovieDetails";
// import Cast from "./components/pages/MovieDetails/Cast/Cast";
// import Reviews from "./components/pages/MovieDetails/Reviews/Reviews";

const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage/NotFoundPage"));
const Home = lazy(() => import("./components/pages/Home/Home"));
const Movies = lazy(() => import("./components/pages/Movies/Movies")); 
const MovieDetails = lazy(() => import("./components/pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./components/pages/MovieDetails/Cast/Cast"));
const Reviews = lazy(() => import("./components/pages/MovieDetails/Reviews/Reviews"));


const UserRoutes = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Suspense>
  )
}

export default UserRoutes;