import React from 'react'
import { ScrollView } from 'react-native'
import { ScrollStyle } from './ScrollStyle'

const VerticalScroll = ({ active, children }) => {

  return (
    <ScrollView>
      {children}
    </ScrollView>
  )
}


export default VerticalScroll
