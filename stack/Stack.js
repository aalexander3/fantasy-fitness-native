import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation';
import { AppStyle } from '../styles/AppStyle';

import HomePage from '../components/HomePage'
import ProfilePage from '../components/ProfilePage'

const Stack = createBottomTabNavigator({
    Home: HomePage,
    Profile: ProfilePage
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = `ios-information-circle${focused ? '' : '-outline'}`
            break;
          case 'Profile':
            iconName = `ios-contact${focused ? '' : '-outline'}`
            break;
          default:
            iconName = `ios-options${focused ? '' : '-outline'}`
            break;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      // showLabel: false,
      style: AppStyle.navigation
    },
    initialRouteName: 'Home',
  }
);

export default Stack
