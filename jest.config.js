module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-redux|@reduxjs/toolkit|react-native-responsive-fontsize|react-native|@react-native|react-native-iphone-x-helper|@react-navigation|immer|react-native-indicators|@react-native-async-storage)/)',
  ],
  setupFiles: ['./jest.setup.js'],
};
