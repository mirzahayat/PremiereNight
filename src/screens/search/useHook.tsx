//import liraries
import React, { useMemo, useState, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { selectMovieList } from '../../shared/redux/reducers/movieSlice';
import { Movie } from '../../types/movie';
import MovieList from '@components/movieList/index';
import {
  searchMovies,
} from '../../shared/services/movieServices';
import useDebounce from '../../shared/hook/useDebouce/index';

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
  const [list, setList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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

  const normalizedQuery = query.trim();

  const data: Movie[] = useMemo(() => {
    if (!normalizedQuery) return allMovies;
    return list;
  }, [allMovies, list, normalizedQuery]);

  const getsearchList = async () => {
    try {
      setLoading(true);
      const results = await searchMovies(normalizedQuery);
      setList(results || []);
    } finally {
      setLoading(false);
    }
  };
  useDebounce(
    () => {
      if (normalizedQuery) {
        getsearchList();
      } else {
        setList([]);
      }
    },
    [normalizedQuery],
    300,
  );

  const renderItem = useCallback(
    ({ item }: { item: Movie }) => <MovieList item={item} />,
    [dispatch], // dependencies
  );

  return { data, query, setQuery, renderItem };
};

//make this component available to the app
export { useHook };
