import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MainNavigator } from './src/routes';
import { useEffect } from 'react';
import { initialConfig } from './src/shared/utils/config';
import { persistor, store } from './src/shared/redux/store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    initialConfig();
    console.log('App');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <MainNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
