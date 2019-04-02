import React from 'react'
import { View, Image, } from 'react-native'
import { CardStyle } from './CardStyle'

const SmallSquareCard = ({ image_url }) => {
  return (
    <View style={ CardStyle.smallSquare } >
      <Image
        source={{uri: image_url }}
        style={ CardStyle.smallSquareImage } />
    </View>
  )
}

export default SmallSquareCard
