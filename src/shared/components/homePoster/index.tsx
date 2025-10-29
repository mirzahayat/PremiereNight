import React from 'react';
import { Pressable, useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageURL } from '@utils/config';
import { Movie } from '../../../types/movie';
import { navigate } from '@services/NavService';
import { ROUTES } from '../../utils/routes';

const Poster = ({ data }: { data?: Movie }) => {
  const { width } = useWindowDimensions();
  const imageWidth = width;
  const imageHeight = Math.round(imageWidth * 1);

  return (
    <Pressable onPress={() => navigate(ROUTES.MovieDetails, { movie: data })}>
      <FastImage
        source={{ uri: `${ImageURL}${data?.poster_path}` }}
        style={{
          width: imageWidth,
          height: imageHeight,
          borderRadius: RFValue(8),
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </Pressable>
  );
};

export { Poster };
