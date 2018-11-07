import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert, TouchableHighlight, ScrollView } from 'react-native'
import { Provider, connect } from 'react-redux'

import { AppStyle } from './styles/AppStyle'
import Stack from './stack/Stack'
import initStore from './store'

const store = initStore()

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <Stack />
      </Provider>
    )
  }
}
