import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'api_key=5040d68806cb7397c0075ca3c1bc5559';


export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/week?${API_KEY}`)
  const data = response.data;
  return data;
}

export const getMoviesByQuery = async (query) => {
  const response = await axios.get(`/search/movie?${API_KEY}&query=${query}`)
  const data = response.data;
  return data;
}

export const getMovieReview = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?${API_KEY}`)
  const data = response.data;
  return data;
}

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?${API_KEY}`)
  const data = response.data;
  return data;
}

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?${API_KEY}`)
  const data = response.data;
  return data;
}
