
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from './Home/Home';
import Movies from "./Movies/Movies";
import NotFound from "./Home/NotFound";
import MovieDetals from "./MovieDetails/MovieDetails";
import Reviews from "./Reviews/Reviews";
import Cast from "./Cast/Cast";

export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path= '/' element= {<Home/>}/>
        <Route path= '/Movies' element= {<Movies/>}/>
        <Route path= '/MovieDetals' element= {<MovieDetals/>}/>
        <Route path= '/MovieDetals/:Reviews' element= {<Reviews/>}/>
        <Route path= '/MovieDetals/:Cast' element= {<Cast/>}/>
        <Route path= '*' element={<Home/>} />

      </Routes>
    </div>

  );
};

