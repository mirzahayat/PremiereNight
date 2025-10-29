import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllMovieLists } from '../../shared/services/movieServices';
import { setAllMovies, selectMovieList } from '@redux/reducers/movieSlice';
import { Movie } from '../../types/movie';
import MovieCard from '@components/card/movieCard';
import { navigate } from '@services/NavService';
import { ROUTES } from '../../shared/utils/routes';
const useHook = () => {
  const dispatch = useDispatch();
  const movieList = (useSelector as any)(
    (s: any) => selectMovieList(s),
    shallowEqual,
  ) as {
    NowPlaying?: Movie[];
    Popular?: Movie[];
    TopRated?: Movie[];
    Upcoming?: Movie[];
  };
  const nowPlaying = movieList?.NowPlaying || [];
  const popular = movieList?.Popular || [];
  const topRated = movieList?.TopRated || [];
  const upcoming = movieList?.Upcoming || [];
  const [loading, setLoading] = useState<boolean>(false);
  useLayoutEffect(() => {
    if (!movieList || Object.keys(movieList || {}).length === 0) {
      fetchMovies();
    }
  }, []);

  useEffect(() => {}, [movieList]);
  const onRefresh = () => {
    fetchMovies();
  };

  const fetchMovies = async () => {
    setLoading(true);
    const result = await getAllMovieLists();
    if (result) {
      dispatch(setAllMovies(result));
    }
    setLoading(false);
  };
  const renderItem = useCallback(
    ({ item }: { item: Movie }) => (
      <MovieCard
        id={item.id}
        data={item}
        onPress={() => navigate(ROUTES.MovieDetails, { movie: item })}
      />
    ),
    [],
  );

  // Memoized empty component
  return {
    loading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    renderItem,
    onRefresh,
  };
};

//make this component available to the app
export { useHook };
