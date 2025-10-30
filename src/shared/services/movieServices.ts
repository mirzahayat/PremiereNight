import { HTTP_CLIENT, API_KEY } from '../utils/config';
import { endPint } from '../utils/endpoints';
export const getAllMovieLists = async () => {
  try {
    const categories = ['now_playing', 'popular', 'top_rated', 'upcoming'];
    const [nowPlaying, popular, topRated, upcoming] = await Promise.all(
      categories.map(category => getMovieList({ moviePath: category })),
    );

    return {
      NowPlaying: nowPlaying,
      Popular: popular,
      TopRated: topRated,
      Upcoming: upcoming,
    };
  } catch (error) {
    console.error('Failed to fetch movie lists:', error.message);
    return null;
  }
};

// Advanced single-fetch helper with better error handling
export const getMovieList = async ({ moviePath }) => {
  const response = await HTTP_CLIENT.get(
    `${endPint.movie}/${moviePath}?api_key=${API_KEY}`,
  );
  return response.data.results;
};
export const searchMovies = async (params) => {
  const response = await HTTP_CLIENT.get(
    `${endPint.search}?api_key=${API_KEY}&query=${encodeURIComponent(params)}`,
  );
  return response.data.results;
};

export const getMoviesDetail = async (id) => {
  const response = await HTTP_CLIENT.get(
    `${endPint.movie}/${id}?api_key=${API_KEY}`,
  );
  return response.data;
};
export const getMoviesActors = async (id) => {
  const response = await HTTP_CLIENT.get(
    `${endPint.movie}/${id}/credits?api_key=${API_KEY}`,
  );
  return response.data;
};
