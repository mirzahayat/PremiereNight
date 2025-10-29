import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  movieList: {},
  bookMarkList: {},
  loading: false,
  error: null,
  nextPage: 1,
  hasMore: true,
};

const movieSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      if (!movie || movie.id == null) return;
      state.bookMarkList[movie.id] = movie;
    },
    removeFromWatchlist: (state, action) => {
      const id = action.payload;
      if (id == null) return;
      delete state.bookMarkList[id];
    },
    setAllMovies: (state, action) => {
      state.movieList = action.payload;
    },

    Reset_State: state => {
      state.error = null;
      state.loading = false;
      state.nextPage = 1,
      state.hasMore = true;
    },
  }
});

export const { setAllMovies, addToWatchlist, removeFromWatchlist, Reset_State} = movieSlice.actions;
export default movieSlice.reducer;

// Memoized selectors to avoid rerenders when data is unchanged
const selectMovieState = (state) => state.movieList;
export const selectMovieList = createSelector([selectMovieState], s => s.movieList);
export const selectWatchlistArray = createSelector([selectMovieState], s => {
  const items = s.bookMarkList || {};
  return Object.values(items);
});
export const selectWatchlistMap = createSelector([selectMovieState], s => s.bookMarkList || {});


