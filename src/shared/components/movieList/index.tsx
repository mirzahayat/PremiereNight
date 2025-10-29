//import liraries
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Movie } from '../../../types/movie';
import { navigate } from '@services/NavService';
import { ImageURL } from '@utils/config';
import { styles } from './styles';
import { ROUTES } from '../../utils/routes';
// create a component
type MovieListProps = { item: Movie };
const MovieList = ({ item }: MovieListProps) => {
  return (
    <Pressable
      onPress={() => navigate(ROUTES.MovieDetails, { movie: item })}
      style={styles.container}
    >
      <FastImage
        source={{
          uri: `${ImageURL}${item.poster_path}`,
        }}
        style={styles.Image}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View style={styles.title}>
        <Text style={styles.titleCon} numberOfLines={2}>
          {item.title}
        </Text>
        <Text numberOfLines={5}>{item.overview}</Text>
      </View>
    </Pressable>
  );
};
//make this component available to the app
export default React.memo(MovieList);
