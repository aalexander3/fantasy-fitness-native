import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { StackStyle } from './StackStyle'

import HomePage from '../pages/home/HomePage'
import TeamPage from '../pages/team/TeamPage'
import LeaguePage from '../pages/league/LeaguePage'
import WorkoutsPage from '../pages/workouts/WorkoutsPage'


const Stack = createBottomTabNavigator({
    Home: HomePage,
    Team: TeamPage,
    League: LeaguePage,
    Workouts: WorkoutsPage,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = `ios-person`
            break;
          case 'Team':
            iconName = `ios-people`
            break;
          case 'League':
            iconName = `ios-trophy`
            break;
          case 'Workouts':
            iconName = `ios-heart`
            break;
          default:
            iconName = `ios-heart`
            break;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons
                  name={iconName}
                  transform={[{ rotateX: '45deg' }]}
                  size={focused ? 30 : 25}
                  color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#5481AF',
      inactiveTintColor: 'black',
      // showLabel: false,
      style: StackStyle.navigation
    },
    initialRouteName: 'Workouts',
  }
);


const AppContainer = createAppContainer(Stack)


export default AppContainer
