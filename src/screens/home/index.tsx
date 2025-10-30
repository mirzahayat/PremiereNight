import Wrapper from '@components/wrapper';
import {
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  View,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { IOS, PlaceHolder } from '@utils/constants';
import { useHook } from './useHook';
import { Poster } from '@components/homePoster';
import React from 'react';
import { MovieCarousels } from '@components/movieCarousels';
import CustomLoading from '../../shared/components/customLoading/index';

// create a component
const Home = () => {
  const {
    loading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    renderItem,
    onRefresh,
  } = useHook();
  return (
    <Wrapper noPaddingTop noPaddingBottom testID="home-screen">
      {loading && <CustomLoading />}
      <ScrollView
        contentContainerStyle={{ paddingBottom: IOS ? 0 : RFValue(10) }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      >
        <Poster data={nowPlaying[0]} />
        <MovieCarousels
          data={nowPlaying}
          renderItem={renderItem}
          title={PlaceHolder.NowPlaying}
        />
        <MovieCarousels
          data={topRated}
          renderItem={renderItem}
          title={PlaceHolder.Popular}
        />
        <MovieCarousels
          data={popular}
          renderItem={renderItem}
          title={PlaceHolder.TopRated}
        />
        <MovieCarousels
          data={upcoming}
          renderItem={renderItem}
          title={PlaceHolder.upComming}
        />
      </ScrollView>
    </Wrapper>
  );
};
export { Home };
