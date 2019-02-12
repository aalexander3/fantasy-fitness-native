import React from 'react'
import { ScrollView } from 'react-native'
import { ScrollStyle } from './ScrollStyle'

const HorizontalScroll = ({ active, children }) => {

  return (
    <ScrollView horizontal style={active ? ScrollStyle.activeScroll : ScrollStyle.scrollView}>
      {children}
    </ScrollView>
  )
}


export default HorizontalScroll
