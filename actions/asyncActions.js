import React from 'react'
import { View, AsyncStorage } from 'react-native'

export const _logout = async () => {
  await AsyncStorage.removeItem('token')
}

export const _getToken = async () => {
  try {
    let token = await AsyncStorage.getItem('token')
    if (token){
      return token
    }
  } catch (error) {
  }
}

export const _saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (error) {

  }
}
