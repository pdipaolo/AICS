import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/containers/Home';
import Sponsor from './src/containers/Sponsor';
import Ranking from './src/containers/Ranking';
import Stadium from './src/containers/Stadium';
import Info from './src/containers/Info';

import { activeTintColor, inactiveTintColor} from './src/constants/colors';
import { ROUTE } from './src/constants/constants';
import { getImage, ImageType } from './src/utils/getImage';

import HomeIcon from './src/assets/home.svg';
import SponsorIcon from './src/assets/sponsor.svg';
import RankingIcon from './src/assets/ranking.svg';
import StadiumIcon from './src/assets/stadium.svg';
import InfoIcon from './src/assets/info.svg';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            switch (route.name) {
              case ROUTE.HOME:
                return <HomeIcon width={26} height={26} fill={color}/>
              case ROUTE.SPONSOR:
                return <SponsorIcon width={30} height={30} fill={color}/>
              case ROUTE.RANKING:
                return <RankingIcon width={26} height={26} fill={color}/>
              case ROUTE.STADIUM:
                return <StadiumIcon width={26} height={26} fill={color}/>
              case ROUTE.INFO:
                return <InfoIcon width={26} height={26} fill={color}/>
              default:
                break;
            }
          },
            headerTitle: route.name === ROUTE.HOME ? (() => getImage(ImageType.Logo_1)) : undefined,
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
        <Tab.Screen name="Sponsor" component={Sponsor} />
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="Stadium" component={Stadium} />
        <Tab.Screen name="Info" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}; 

export default App;