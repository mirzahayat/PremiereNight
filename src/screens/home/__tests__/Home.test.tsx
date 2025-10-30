import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import { Home } from '../index';
import { Movie } from '../../../types/movie';

// Mock the useHook
jest.mock('../useHook.tsx', () => ({
  useHook: () => ({
    loading: false,
    nowPlaying: [
      {
        id: 1,
        title: 'Test Movie 1',
        poster_path: '/test1.jpg',
        genre_ids: [1],
      } as Movie,
    ],
    popular: [
      {
        id: 2,
        title: 'Test Movie 2',
        poster_path: '/test2.jpg',
        genre_ids: [2],
      } as Movie,
    ],
    topRated: [
      {
        id: 3,
        title: 'Test Movie 3',
        poster_path: '/test3.jpg',
        genre_ids: [3],
      } as Movie,
    ],
    upcoming: [
      {
        id: 4,
        title: 'Test Movie 4',
        poster_path: '/test4.jpg',
        genre_ids: [4],
      } as Movie,
    ],
    renderItem: jest.fn(),
    onRefresh: jest.fn(),
  }),
}));

// Mock components
jest.mock('@components/wrapper', () => ({
  __esModule: true,
  default: ({ children, testID }: { children: React.ReactNode; testID?: string }) => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID }, children);
  },
}));

jest.mock('@components/homePoster', () => ({
  Poster: () => <></>,
}));

jest.mock('@components/movieCarousels', () => ({
  MovieCarousels: () => <></>,
}));

jest.mock('@components/customLoading', () => ({
  __esModule: true,
  default: () => <></>,
}));

describe('Home Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home-screen')).toBeTruthy();
  });
});
