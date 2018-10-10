import React from 'react';
import { Text, View, TextInput, Button, Alert, TouchableHighlight, ScrollView } from 'react-native';
import { AppStyle } from './styles/AppStyle';

import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import RootAdapter from './adapters/RootAdapter'
import { createStackNavigator } from 'react-navigation';



const Stack = createStackNavigator({
    Home: HomePage,
    Profile: ProfilePage
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {

  // componentDidMount(){
  //   const { WorkoutAdapter } = RootAdapter
  //   console.log(WorkoutAdapter)
  //   WorkoutAdapter.index().then(console.log)
  // }

  render() {
    return (
      <View style={AppStyle.container}>
        <Stack />
      </View>
    );
  }
}
