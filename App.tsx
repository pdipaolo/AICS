import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/containers/Home';
import Torneo from './src/containers/Torneo';
import Ranking from './src/containers/Ranking';
import Campi from './src/containers/Campi';
import Info from './src/containers/Info';

import { activeTintColor, inactiveTintColor} from './src/constants/colors';
import { ROUTE } from './src/constants/constants';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarIcon: ({ color }) => {
          //   switch (route.name) {
          //     case ROUTE.HOME:
          //       return <HomeIcon width={26} height={26} fill={color} />
          //     case ROUTE.TORNEO:
          //       return <HomeIcon width={26} height={26} fill={color} />
          //     case ROUTE.RANKING:
          //       return <HomeIcon width={26} height={26} fill={color} />
          //     case ROUTE.CAMPI:
          //       return <HomeIcon width={26} height={26} fill={color} />
          //     case ROUTE.INFO:
          //       return <HomeIcon width={26} height={26} fill={color} />
          //     default:
          //       break;
          //   }
          // },
            tabBarActiveTintColor: activeTintColor,
            tabBarInactiveTintColor: inactiveTintColor,
            tabBarStyle: [
              {
                display: "flex"
              },
              null
            ]
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Torneo" component={Torneo} />
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="Campi" component={Campi} />
        <Tab.Screen name="Info" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}; 

export default App;