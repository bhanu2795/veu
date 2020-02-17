import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import screens from '../constants/screens';
import { OnBoarding } from '../screens'
import { HomeNavigator, LoginNavigator, ProfileNavigator } from './navigators';


import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

const TabBarComponent = props => <BottomTabBar {...props} />;

const TabScreens = createBottomTabNavigator(
  {
    [screens.HomeRoot]: {
      screen: HomeNavigator,
      navigationOptions: {
        header: null
      }
    },
    [screens.ProfileRoot]: {
      screen: ProfileNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    tabBarComponent: props => <TabBarComponent {...props} style={{ borderTopWidth: 0 }} />
  }
);

export default createStackNavigator({
  [screens.OnBoarding]: {
    screen: OnBoarding,
    navigationOptions: {
      header: null
    }
  },
  [screens.LoginRoot]: {
    screen: LoginNavigator,
    navigationOptions: {
      header: null
    }
  },
  [screens.TabRoot]: {
    screen: TabScreens,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: screens.OnBoarding
});
