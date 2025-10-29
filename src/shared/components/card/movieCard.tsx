import { Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {
  selectWatchlistMap,
  removeFromWatchlist,
  addToWatchlist,
} from '@redux/reducers/movieSlice';
import { StarIcon } from '@components/starIcon';
import { Movie } from '../../../types/movie';
import { GST } from '@theme/globalStyles';
import { ImageURL } from '@utils/config';
import { styles } from './styles';

type MovieCardProps = {
  onPress: () => void;
  id?: number;
  data?: Movie;
};

const MovieCard = ({ onPress, id, data }: MovieCardProps) => {
  const dispatch = useDispatch();
  const watchMap = (useSelector as any)(
    (s: any) => selectWatchlistMap(s),
    shallowEqual,
  ) as Record<string, any>;
  const inWatchlist = id != null ? Boolean(watchMap[id]) : false;
  return (
    <Pressable onPress={onPress}>
      <View>
        <FastImage
          source={{ uri: `${ImageURL}${data?.poster_path}` }}
          style={styles.container}
        />
        {id != null && (
          <Pressable
            hitSlop={GST.HITSLOP}
            style={styles.starBadge}
            onPress={() => {
              if (inWatchlist) {
                dispatch(removeFromWatchlist(data?.id));
              } else {
                dispatch(addToWatchlist(data));
              }
            }}
          >
            <StarIcon enable={inWatchlist} />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

export default React.memo(MovieCard);
