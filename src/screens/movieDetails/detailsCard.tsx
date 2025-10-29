//import liraries
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ImageURL } from '@utils/config';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { GST } from '../../shared/theme/globalStyles';
import { StarIcon } from '@components/starIcon';
import { useDispatch } from 'react-redux';
import { PlaceHolder } from '@utils/constants';
import {
  removeFromWatchlist,
  addToWatchlist,
} from '@redux/reducers/movieSlice';
const DetailsCard = ({
  movie,
  isInWatchlist,
}: {
  movie: any;
  isInWatchlist: boolean;
}) => {
  const dispatch = useDispatch();
  const onPress = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };
  return (
    <View style={GST.FDRow}>
      <View style={GST.FLEX}>
        <FastImage
          source={{
            uri: `${ImageURL}${movie?.poster_path}`,
          }}
          style={styles.imagePoster}
        />
      </View>

      <View style={styles.overViewCon}>
        <View style={styles.subContainer}>
          <Text>{movie?.overview}</Text>
        </View>
        <View>
          <Pressable hitSlop={GST.HITSLOP} onPress={onPress}>
            <View style={styles.Icon}>
              <StarIcon enable={isInWatchlist} />
              <Text style={styles.iconTitle}>
                {isInWatchlist ? PlaceHolder.RemoveFavorite : PlaceHolder.AddtoFavorites}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
//make this component available to the app
export { DetailsCard };
