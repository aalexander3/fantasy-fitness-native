import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert, TouchableHighlight, ScrollView } from 'react-native'
import { AppStyle } from './styles/AppStyle'

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer'
import Stack from './stack/Stack'

const enhancer = composeWithDevTools({})(applyMiddleware(thunk));
// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(rootReducer, {}, enhancer)

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <Stack />
      </Provider>
    )
  }
}
