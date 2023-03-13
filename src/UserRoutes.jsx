
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage/NotFoundPage"));
const Home = lazy(() => import("./components/pages/Home/Home"));
const Movies = lazy(() => import("./components/pages/Movies/Movies")); 
const MovieDetails = lazy(() => import("./components/pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./components/pages/MovieDetails/Cast/Cast"));
const Reviews = lazy(() => import("./components/pages/MovieDetails/Reviews/Reviews"));
const Person = lazy(() => import("./components/pages/Person/Person"));
const Trailer = lazy(() => import("./components/pages/MovieDetails/Trailer/Trailer"));
const Director = lazy(() => import("./components/pages/Director/Director"));


const UserRoutes = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/person/:personId" element={<Person />} />
        <Route path="/director/:personId" element={<Director/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Suspense>
  )
}

export default UserRoutes;