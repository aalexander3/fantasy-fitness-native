import React from 'react'
import { View, Text, Image, TouchableHighlight} from 'react-native'
import Header from '../headers/Header'
import { CardStyle } from '../../styles/CardStyle'

const VerticalCard = ({ image_url, mainText, subText, handlePress }) => {
  return (
    <View style={ CardStyle.teamCard } >
      <Image
        source={{uri: image_url }}
        style={ CardStyle.avatar } />
      <TouchableHighlight
        onPress={handlePress}
        underlayColor='transparent' >
        <Header text={mainText} />
      </TouchableHighlight>
      <Text>{ subText }</Text>
    </View>
  )
}

export default VerticalCard
