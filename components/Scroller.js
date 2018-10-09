import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { AppStyle } from '../styles/AppStyle';

const Scroller = props => {
  return (
    <ScrollView style={{flex: 6}} horizontal >
      <View style={AppStyle.childOne} >
        <Text>Hello World</Text>
      </View>
      <View style={AppStyle.childTwo} >
        <Text>Hello World</Text>
      </View>
      <View style={AppStyle.childOne} >
        <Text>Hello World</Text>
      </View>
      <View style={AppStyle.childTwo} >
        <Text>Hello World</Text>
      </View>
    </ScrollView>
  )
}

export default Scroller
