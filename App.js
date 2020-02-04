import React from 'react'

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

const App = createAppContainer(AppNavigator);

export default App
