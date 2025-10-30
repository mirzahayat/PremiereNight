//import liraries
import React, { useMemo, useState, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { selectMovieList } from '@redux/reducers/movieSlice';
import { Movie } from '../../types/movie';
import { mapGenreIdsToNames } from '@utils/genres';
import MovieList from '@components/movieList/index';
import {
  searchMovies,
} from '@services/movieServices';
import useDebounce from '@components/hook/useDebouce';

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
  const normalizedQueryLc = normalizedQuery.toLowerCase();

  const data: Movie[] = useMemo(() => {
    if (!normalizedQuery) return allMovies;
    return list;
  }, [allMovies, list, normalizedQuery]);

  const getsearchList = async () => {
    try {
      setLoading(true);
      // Remote title/keyword search
      const apiResults = await searchMovies(normalizedQuery);
      // Local genre search
      const genreMatches = allMovies.filter(m =>
        mapGenreIdsToNames(m.genre_ids).some(name =>
          String(name || '').toLowerCase().includes(normalizedQueryLc),
        ),
      );
      // Merge and dedupe by id
      const merged: Movie[] = [];
      const seen = new Set<number>();
      for (const item of [...(apiResults || []), ...genreMatches]) {
        const id = Number(item?.id);
        if (!seen.has(id)) {
          seen.add(id);
          merged.push(item);
        }
      }
      setList(merged);
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
