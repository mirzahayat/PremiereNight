import { HTTP_CLIENT, API_KEY } from '../utils/config';
import { endPint } from '../utils/endpoints';
export const getAllMovieLists = async () => {
  try {
    const categories = ['now_playing', 'popular', 'top_rated', 'upcoming'];
    const [nowPlaying, popular, topRated, upcoming] = await Promise.all(
      categories.map(category => getMovieList({ moviePath: category })),
    );

    console.log("ashjdvbjasdva",nowPlaying);
    
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
