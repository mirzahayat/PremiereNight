//import liraries
import React, { useLayoutEffect, useState, useCallback } from 'react';
import { Movie } from '../../types/movie';
import { useSelector } from 'react-redux';
import {
  getMoviesActors,
  getMoviesDetail,
} from '../../shared/services/movieServices';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ImageURL } from '@utils/config';
import { RF } from '@theme/responsive';
import { COLORS } from '../../shared/theme/colors';
import { styles } from './styles';

// create a component
type MovieDetailsRoute = { params: { movie: Movie } };
const useHook = ({ route }: { route?: MovieDetailsRoute['params'] | any }) => {
  const { movie } = route.params as { movie: Movie };
  const [detail, setDetail] = useState<Movie | null>(movie || null);
  const [actors, setActors] = useState<any[]>([]);
  const isInWatchlist = useSelector((s: any) =>
    Boolean(s.movieList?.bookMarkList?.[movie?.id]),
  );

  const getMovieDetail = async () => {
    const res = await getMoviesDetail(movie.id);
    setDetail(res);
  };
  const getMovieActors = async () => {
    const res = await getMoviesActors(movie.id);
    setActors(res?.cast || []);
  };
  useLayoutEffect(() => {
    getMovieDetail();
    getMovieActors();
  }, []);

  const renderItem = useCallback(({ item }: any) => {
    return (
      <View style={styles.actorCon}>
        <FastImage
          source={{
            uri: ImageURL + item?.profile_path,
          }}
          style={styles.actorProfile}
        />
        <Text style={styles.actor}>{item?.name}</Text>
      </View>
    );
  }, []);

  return { movie: detail || movie, isInWatchlist, actors, renderItem };
};

//make this component available to the app
export { useHook };
