import React from 'react'
import { Text, View, Image } from 'react-native'
import { AppStyle } from '../../styles/AppStyle'
import { HomeStyle } from '../../styles/HomeStyle'
import { HeaderStyles } from '../../styles/HeaderStyles'

const HeaderWithAvatar = ({ avatar, text }) => {

  return(
    <View style={ HeaderStyles.headerView }>
      <Image
        source={{uri: avatar }}
        style={ HeaderStyles.headerAvatar } />
      <Text style={ AppStyle.header }>
        { text }
      </Text>
    </View>
  )
}

export default HeaderWithAvatar
