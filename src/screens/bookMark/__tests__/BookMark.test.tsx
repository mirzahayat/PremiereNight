import React from 'react';
import { render } from '@testing-library/react-native';
import { BookMark } from '../index';
import { Movie } from '../../../types/movie';

// Mock the useHook
jest.mock('../useHook.tsx', () => ({
  useHook: () => ({
    renderItem: jest.fn(),
    watchlist: [
      {
        id: 1,
        title: 'Test Movie 1',
        poster_path: '/test1.jpg',
        genre_ids: [1],
      } as Movie,
      {
        id: 2,
        title: 'Test Movie 2',
        poster_path: '/test2.jpg',
        genre_ids: [2],
      } as Movie,
    ],
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

jest.mock('@components/header/index', () => ({
  __esModule: true,
  default: ({ title, testID }: { title: string; testID?: string }) => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID }, title);
  },
}));

jest.mock('@components/FlashList', () => ({
  FlashList: ({ testID }: { testID?: string }) => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID });
  },
}));

describe('BookMark Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<BookMark />);
    expect(getByTestId('bookmark-screen')).toBeTruthy();
  });
});
