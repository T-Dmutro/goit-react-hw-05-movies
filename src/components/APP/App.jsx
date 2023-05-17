import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
// import Carts from "../Carts/Carts";
// import Review from "../Reviews/Reviews";
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Wrapper } from './App.styled';
import { Loader } from '../Loader/Loader';



const HomePage =lazy(() => import(`../Home/Home`));
const MoviesPage = lazy(() => import(`../Movies/Movies`));
const MovieDetailsPage = lazy(() => import(`../MovieDetailsPage/MovieDetailsPage`));

const Carts = lazy(() => import(`../Carts/Carts`));

const Review = lazy(() => import(`../Reviews/Reviews`));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Wrapper>
        <GlobalStyle />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Carts />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Wrapper>
    </Suspense>
  );
};
