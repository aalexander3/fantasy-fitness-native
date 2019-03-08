import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

const IsAsync = (WrappedComponent) => {
  return class extends Component {

    getToken = async () => {
      let token = await AsyncStorage.getItem('token')
      return token
    }

    setToken = async (token) => {
      await AsyncStorage.setItem('token', token)
      return token
    }

    removeToken = async () => {
      await AsyncStorage.removeItem('token')
    }

    render(){
      return <WrappedComponent
        getToken={this.getToken}
        setToken={this.setToken}
        removeToken={this.removeToken}
        {...this.props} />
    }
  }
}

export default IsAsync
