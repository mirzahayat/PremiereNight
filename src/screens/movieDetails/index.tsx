//import liraries
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Wrapper from '@components/wrapper';
import { Movie } from '../../types/movie';
import { useHook } from './useHook';
import { styles } from './styles';
import { DetailsCard } from './detailsCard';
import { Card } from './card';
import { PlaceHolder } from '@utils/constants';
import { ActorList } from '@components/actorList';
import CustomLoading from '../../shared/components/customLoading/index';
// create a component
type MovieDetailsRoute = { params: { movie: Movie } };
const MovieDetails = ({
  route,
}: {
  route: MovieDetailsRoute['params'] | any;
}) => {
  const { movie, isInWatchlist, actors, renderItem, loading } = useHook({
    route,
  });
  return (
    <Wrapper noPaddingTop={true}>
      {loading && <CustomLoading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>{movie?.title}</Text>
          <DetailsCard movie={movie} isInWatchlist={isInWatchlist} />
          <Card
            title={PlaceHolder.rating}
            value={Number(movie?.vote_average) / 10}
          />
          <Card
            title={PlaceHolder.releaseDate}
            value={new Date(movie.release_date || '').toLocaleDateString(
              'en-US',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              },
            )}
          />
          {!!actors?.length && <ActorList {...{ actors, renderItem }} />}
        </View>
      </ScrollView>
    </Wrapper>
  );
};

//make this component available to the app
export default MovieDetails;
