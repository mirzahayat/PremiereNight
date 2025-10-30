import React from 'react';
import { render } from '@testing-library/react-native';
import { Search } from '../index';
import { Movie } from '../../../types/movie';

// Mock the useHook
jest.mock('../useHook', () => ({
  useHook: () => ({
    data: [
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
    query: '',
    setQuery: jest.fn(),
    renderItem: jest.fn(),
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

jest.mock('@components/search/index', () => ({
  __esModule: true,
  default: ({ testID }: { testID?: string }) => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID });
  },
}));

jest.mock('@components/FlashList', () => ({
  FlashList: ({ testID }: { testID?: string }) => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID });
  },
}));

describe('Search Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Search />);
    expect(getByTestId('search-screen')).toBeTruthy();
  });
});
