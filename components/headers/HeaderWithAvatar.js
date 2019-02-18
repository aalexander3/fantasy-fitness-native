import React from 'react'
import { Text, View, Image } from 'react-native'
import { HeaderStyles } from './HeaderStyles'

const HeaderWithAvatar = ({ avatar, text }) => {

  return(
    <View style={ HeaderStyles.headerView }>
      <Image
        source={{uri: avatar }}
        style={ HeaderStyles.headerAvatar } />
      <Text style={ HeaderStyles.header }>
        { text }
      </Text>
    </View>
  )
}

export default HeaderWithAvatar
