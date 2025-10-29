import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../shared/services/NavService';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from '../screens/movieDetails/index';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={({ route, navigation }) => ({
            title: 'MyTheresa Movies',
            headerShown: false,
          })}
          name="HomeTab"
          component={TabNavigator}
        />
        <Stack.Screen
          options={({ route, navigation }) => ({
            title: 'Details',
          })}
          name="MovieDetails"
          component={MovieDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export { MainNavigator };
