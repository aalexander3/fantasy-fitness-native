import React from 'react'
import { View, Text, Image, TouchableHighlight} from 'react-native'
import { Header } from '../headers'
import { TransparentLink } from '../buttons'
import { CardStyle } from './CardStyle'

const VerticalCard = ({ image_url, mainText, subText, handlePress }) => {
  return (
    <View style={ CardStyle.teamCard } >
      <Image
        source={{uri: image_url }}
        style={ CardStyle.avatar } />
      <TransparentLink text={mainText} handlePress={handlePress} />
      <Text>{ subText }</Text>
    </View>
  )
}

export default VerticalCard
