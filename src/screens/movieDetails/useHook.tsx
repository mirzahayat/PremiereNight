//import liraries
import React, { Component } from 'react';
import { Movie } from '../../types/movie';
import { useSelector } from 'react-redux';

// create a component
type MovieDetailsRoute = { params: { movie: Movie } };
const useHook = ({ route }: { route?: MovieDetailsRoute['params'] | any }) => {
  const { movie } = route.params as { movie: Movie };
  const isInWatchlist = useSelector((s: any) =>
    Boolean(s.movieList?.bookMarkList?.[movie?.id]),
  );

  return { movie, isInWatchlist };
};

//make this component available to the app
export { useHook };
