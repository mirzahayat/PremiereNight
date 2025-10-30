## Overview
PremiereNight is a React Native (0.81.4) + TypeScript app (React 19.1.0) with a bottom tab (Home, Search, BookMark), TMDB‑backed movie lists, search, and a locally persisted watchlist.

## Tooling and prerequisites
- Node >= 20
- iOS: Xcode 15+, CocoaPods installed (Ruby available)
- Optional Android: Android Studio + SDKs, Java 17

Install JS deps:
```bash
cd PremiereNight
npm install
```
Install iOS pods (first time / after native deps change):
```bash
cd ios
bundle install || true
pod install
```

## Environment (.env)
Create a `.env` file at the project root:
```bash
BASEURL=https://api.themoviedb.org/3/
APPIMAGE=https://image.tmdb.org/t/p/w500
APP_KEY=YOUR_TMDB_API_KEY
```
The app reads these via `@env` (react-native-dotenv). After changing env/Babel config, restart Metro with a cache reset.

## Run (iOS)
From project root:
```bash
# Restart Metro after Babel/env changes
npm start -- --reset-cache

# In another terminal
npm run ios
```
If the Simulator doesn’t open, run from Xcode using `ios/PremiereNight.xcworkspace`.

## Testing
The project uses Jest for unit testing React Native components. Test files are located in `__tests__/` directories alongside the components.

Run all tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --config jest.config.js
```

Run specific test file:
```bash
npm test -- --testPathPattern=Home.test.tsx
```

The tests cover the main screens: Home, BookMark, Search, and MovieDetails, using mocked hooks and components to ensure isolated unit testing.

## Architecture, trade‑offs, assumptions
- Navigation: React Navigation bottom tabs + native stack for details.
- State: Redux Toolkit + redux‑persist; watchlist stored as id→movie map for O(1) membership checks.
- Data: Axios to TMDB; `BASEURL`, `APPIMAGE`, `APP_KEY` from `.env`.
- Performance: memoized selectors, React.memo list items, tuned FlatList options, FastImage for images.
- TypeScript: Types for entities, hooks, and components (slice typing minimized where RN ESLint/parsers can be strict).
- Trade‑offs: Used `--legacy-peer-deps` for ecosystem peer ranges with React 19; API key in runtime env (.env kept local).
- Assumptions: iOS is primary target; RN 0.81.x defaults (Hermes/New Arch) used.
