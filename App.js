import React, { Component } from 'react'
import { Provider } from 'react-redux'
import LandingPage from './pages/landing/LandingPage'
import Stack from './stack/Stack'

import initStore from './store'
const store = initStore()

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <LandingPage />
      </Provider>
    )
  }
}

export default App
