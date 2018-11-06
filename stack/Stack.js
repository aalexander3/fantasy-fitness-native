import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'
import { StackStyle } from '../styles/StackStyle'
// import{ Animated } from 'react-native'

import HomePage from '../components/HomePage'
import TeamPage from '../components/TeamPage'
import LeaguePage from '../components/LeaguePage'
import WorkoutsPage from '../components/WorkoutsPage'

const Stack = createBottomTabNavigator({
    Home: HomePage,
    Team: TeamPage,
    League: LeaguePage,
    Workouts: WorkoutsPage,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = `ios-person${focused ? '' : '-outline'}`
            break;
          case 'Team':
            iconName = `ios-people${focused ? '' : '-outline'}`
            break;
          case 'League':
            iconName = `ios-trophy${focused ? '' : '-outline'}`
            break;
          case 'Workouts':
            iconName = `ios-heart${focused ? '' : '-outline'}`
            break;
          default:
            iconName = `ios-heart${focused ? '' : '-outline'}`
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
      activeTintColor: 'white',
      inactiveTintColor: 'lightgrey',
      // showLabel: false,
      style: StackStyle.navigation
    },
    initialRouteName: 'Home',
  }
);

export default Stack
