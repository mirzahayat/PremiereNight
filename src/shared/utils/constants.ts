import { Platform } from 'react-native';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';

const PlaceHolder = {
  BookMark: 'BookMark',
  NowPlaying:"Now Playing",
  Popular:"Popular",
  search:"search",
  TopRated:"Top Rated",
  upComming:"up Comming",
  RemoveFavorite:"Remove Favorite",
  AddtoFavorites:"Add to Favorites",
  rating:"Rating",
  releaseDate:"Release Date:",
  noDataFound:"No movies found",
  editing:"while-editing",
};
export { ANDROID, IOS, PlaceHolder };
