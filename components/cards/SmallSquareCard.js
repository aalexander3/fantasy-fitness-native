import React from 'react'
import { View, Text, Image, } from 'react-native'
import { CardStyle } from '../../styles/CardStyle'

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
