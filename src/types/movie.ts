export type Movie = {
  id: number;
  title?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  genre_ids?: number[];
  vote_average?: number;
  release_date?: string;
};

export type MovieCategoryLists = {
  NowPlaying: Movie[];
  Popular: Movie[];
  TopRated: Movie[];
  Upcoming: Movie[];
};


