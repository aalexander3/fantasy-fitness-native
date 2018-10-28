import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert, TouchableHighlight, ScrollView } from 'react-native'
import { AppStyle } from './styles/AppStyle'

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'
import RootAdapter from './adapters/RootAdapter'
import Stack from './stack/Stack'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <View style={AppStyle.container}>
          <Stack />
        </View>
      </Provider>
    )
  }
}
