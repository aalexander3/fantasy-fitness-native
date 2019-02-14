import React, { Component } from 'react'
import { Provider } from 'react-redux'
import LandingPage from './pages/landing/LandingPage'

import { Font, AppLoading } from 'expo'

import initStore from './store'
const store = initStore()

class App extends Component {

  state = {
    loaded: false
  }

  async componentDidMount(){
    await Font.loadAsync({
          'rubik': require('./assets/fonts/Rubik-Regular.ttf'),
        })

    this.setState({ loaded: true })
  }

  render() {
    return (
      <Provider store={store} >
        {this.state.loaded ? <LandingPage /> : <AppLoading />}
      </Provider>
    )
  }
}

export default App
