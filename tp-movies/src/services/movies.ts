import { api } from "../utils/axios";

const get = async (id: string) => {
  const response = await api.movies.get(`/movie/${id}`);
  return response.data;
};

const getUpcoming = async () => {
  const response = await api.movies.get("/movie/upcoming");
  return response.data.results;
};

const getNowPlaying = async () => {
  const response = await api.movies.get("/movie/now_playing");
  return response.data.results;
};

const getPopular = async () => {
  const response = await api.movies.get("/movie/popular");
  return response.data.results;
};

const getTopRated = async () => {
  const response = await api.movies.get("/movie/top_rated");
  return response.data.results;
};

export const serviceMovies = {
  get,
  getUpcoming,
  getNowPlaying,
  getPopular,
  getTopRated,
};
