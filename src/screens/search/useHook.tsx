//import liraries
import React, { useMemo, useState, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { selectMovieList } from '../../shared/redux/reducers/movieSlice';
import { mapGenreIdsToNames } from '@utils/genres';
import { Movie } from '../../types/movie';
import { View } from 'react-native';
import MovieList from '@components/movieList/index';

// create a component
const useHook = () => {
  const useSel = useSelector as any;
  const movieList = useSel((s: any) => selectMovieList(s), shallowEqual) as {
    NowPlaying?: Movie[];
    Popular?: Movie[];
    TopRated?: Movie[];
    Upcoming?: Movie[];
  };

  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const allMovies: Movie[] = useMemo(() => {
    const combined = [
      ...(movieList?.NowPlaying || []),
      ...(movieList?.Popular || []),
      ...(movieList?.TopRated || []),
      ...(movieList?.Upcoming || []),
    ];
    const seen = new Set<number>();
    const unique: Movie[] = [];
    for (const m of combined) {
      const id = Number(m?.id);
      if (!seen.has(id)) {
        seen.add(id);
        unique.push(m);
      }
    }
    return unique;
  }, [movieList]);

  const normalizedQuery = query.trim().toLowerCase();

  const data: Movie[] = useMemo(() => {
    if (!normalizedQuery) return allMovies;
    return allMovies.filter((m: Movie) => {
      const title = String(m.title || m.original_title || '').toLowerCase();
      if (title.includes(normalizedQuery)) return true;
      const genreNames = mapGenreIdsToNames(m.genre_ids);
      return genreNames.some(name =>
        name.toLowerCase().includes(normalizedQuery),
      );
    });
  }, [allMovies, normalizedQuery]);
  const renderItem = useCallback(
    ({ item }: { item: Movie }) => <MovieList item={item} />,
    [dispatch], // dependencies
  );
  return { data, query, setQuery, renderItem };
};

//make this component available to the app
export { useHook };
