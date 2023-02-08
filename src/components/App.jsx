import { Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";




export const App = () => {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>}/>
        {/* <Route path="/movies/:movieId" element={<A/>}/> */}
        {/* <Route path="/movies/:movieId/cast" element={<A/>}/> */}
        {/* <Route path="/movies/:movieId/reviews" element={<A/>}/> */}
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};
