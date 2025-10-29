//import liraries
import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieList from '@components/movieList/index';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { removeFromWatchlist } from '@redux/reducers/movieSlice';
import { RF } from '@theme/responsive';
import { selectWatchlistArray } from '../../shared/redux/reducers/movieSlice';
import { Movie } from '../../types/movie';
import { COLORS } from '../../shared/theme/colors';

// create a component
const useHook = () => {
  const dispatch = useDispatch();
  const useSel = useSelector as any;
  const watchlist = useSel(
    (s: any) => selectWatchlistArray(s),
    shallowEqual,
  ) as Movie[];
  const renderItem = useCallback(
    ({ item }: { item: Movie }) => (
      <View>
        <MovieList item={item} />
        <Text
          onPress={() => dispatch(removeFromWatchlist(item.id))}
          style={styles.container}
        >
          Remove
        </Text>
      </View>
    ),
    [dispatch],
  );

  return { renderItem, watchlist };
};

const styles = StyleSheet.create({
  container: {
    color: COLORS.RED,
    marginLeft: RF(10),
  },
});

//make this component available to the app
export { useHook };
