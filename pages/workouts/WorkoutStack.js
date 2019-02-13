import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { StackStyle } from '../../stack/StackStyle'

// which other components???\
// FIXME:  can't make a second stack!!!!

import ExerciseList from './ExerciseList'
import WorkoutList from './WorkoutList'
import PackList from './PackList'

const Stack = createMaterialTopTabNavigator({
    Exercises: ExerciseList,
    Workouts: WorkoutList,
    Packs: PackList,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Exercises':
            iconName = `ios-person`
            break;
          case 'Workouts':
            iconName = `ios-people`
            break;
          case 'Packs':
            iconName = `ios-trophy`
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
    initialRouteName: 'Exercises',
  }
);


const AppContainer = createAppContainer(Stack)


export default AppContainer
