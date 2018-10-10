import React from 'react';
import { Text, View, TextInput, Button, Alert, TouchableHighlight, ScrollView } from 'react-native';
import { AppStyle } from './styles/AppStyle';
import Scroller from './components/Scroller'
import { WorkoutAdapter } from './adapters/RootAdapter'

export default class App extends React.Component {

  state = {
    text: ''
  }

  componentDidMount(){
    console.log(WorkoutAdapter)
    // WorkoutAdapter.index().then(console.log)
  }

  handleText = text => {
    this.setState({ text })
  }

  _onButtonPress = () => {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <View style={AppStyle.childOne} >
          <Text>Hello World</Text>
          <TextInput placeholder="hello from fantasy fitness"
            onChangeText={this.handleText}
            value={this.state.text} />
        </View>
        <Scroller />
        <Scroller />
        <View style={AppStyle.childTwo}>
          <Text>
            Welcome to Fantasy Fitness
          </Text>
          <Button onPress={this._onButtonPress}
            title="pressss"
            color="#841584" />
          <TouchableHighlight onPress={this._onButtonPress} underlayColor="white" >
            <Text> Touch here! </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
