module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/shared/components',
          '@redux': './src/shared/redux',
          '@theme': './src/shared/theme',
          '@utils': './src/shared/utils',
          '@hooks': './src/shared/hooks',
          '@services': './src/shared/services',
          '@routes': './src/routes',
          '@assets': './src/shared/assets',
        },
      },
    ],
    ['module:react-native-dotenv', { moduleName: '@env', path: '.env', allowUndefined: true }],
    'react-native-reanimated/plugin',
  ],
};
