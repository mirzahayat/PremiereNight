import React from 'react';
import { render } from '@testing-library/react-native';
import MovieDetails from '../index';

// Mock the useHook
jest.mock('../useHook.tsx', () => ({
  useHook: jest.fn(),
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

jest.mock('@components/customLoading/index', () => ({
  __esModule: true,
  default: () => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID: 'custom-loading' });
  },
}));

jest.mock('../detailsCard.tsx', () => ({
  DetailsCard: () => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID: 'details-card' });
  },
}));

jest.mock('../card.tsx', () => ({
  Card: () => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID: 'card' });
  },
}));

jest.mock('@components/actorList', () => ({
  ActorList: () => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, { testID: 'actor-list' });
  },
}));

const mockUseHook = require('../useHook').useHook;

describe('MovieDetails Component', () => {
  const mockMovie = {
    id: 1,
    title: 'Test Movie',
    vote_average: 8.5,
    release_date: '2023-01-01',
  };

  const mockRoute = {
    params: {
      movie: mockMovie,
    },
  };

  beforeEach(() => {
    mockUseHook.mockReturnValue({
      movie: mockMovie,
      isInWatchlist: false,
      actors: [],
      renderItem: jest.fn(),
      loading: false,
    });
  });

  it('renders correctly', () => {
    const { getByTestId } = render(<MovieDetails route={mockRoute} />);

    expect(getByTestId('movie-details-screen')).toBeTruthy();
  });

  it('shows loading when loading is true', () => {
    mockUseHook.mockReturnValue({
      movie: mockMovie,
      isInWatchlist: false,
      actors: [],
      renderItem: jest.fn(),
      loading: true,
    });

    const { getByTestId } = render(<MovieDetails route={mockRoute} />);

    expect(getByTestId('custom-loading')).toBeTruthy();
  });

  it('renders movie title', () => {
    const { getByText } = render(<MovieDetails route={mockRoute} />);

    expect(getByText('Test Movie')).toBeTruthy();
  });

  it('renders DetailsCard', () => {
    const { getByTestId } = render(<MovieDetails route={mockRoute} />);

    expect(getByTestId('details-card')).toBeTruthy();
  });

  it('renders Cards for rating and release date', () => {
    const { getAllByTestId } = render(<MovieDetails route={mockRoute} />);

    expect(getAllByTestId('card')).toHaveLength(2);
  });

  it('renders ActorList when actors are present', () => {
    mockUseHook.mockReturnValue({
      movie: mockMovie,
      isInWatchlist: false,
      actors: [{ id: 1, name: 'Actor 1' }],
      renderItem: jest.fn(),
      loading: false,
    });

    const { getByTestId } = render(<MovieDetails route={mockRoute} />);

    expect(getByTestId('actor-list')).toBeTruthy();
  });
});
