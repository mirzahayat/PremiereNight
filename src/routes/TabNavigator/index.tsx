import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@screens/home';
import { homeIcon, searchIcon, bookmarkIcon } from '@assets/icon';
import TabBarIcon from '../../shared/components/tabIcon/index';
import { Search } from '@screens/search';
import { BookMark } from '@screens/bookMark';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabBarIcon source={homeIcon} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon source={searchIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="BookMark"
        component={BookMark}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon source={bookmarkIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export { TabNavigator };
