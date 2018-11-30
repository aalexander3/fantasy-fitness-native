import React from 'react'
import { View, TextInput, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AppStyle } from '../../styles/AppStyle'
import { HomeStyle } from '../../styles/HomeStyle'

const InputWithLabel = ({label, icon, handleText, value, placeholder, name, type}) => {

  return (
    <View>
      <Text style={ AppStyle.label }>{label}</Text>
      <View style={ AppStyle.form }>
        <Ionicons
          name={icon}
          transform={[{ rotateX: '45deg' }]}
          size={30}
          color={'#424242'} />
        <TextInput
          style={ AppStyle.input }
          onChangeText={(text)=>handleText(text, name)}
          value={value}
          placeholder={placeholder}
          textContentType={type}
          autoCapitalize='none'
          secureTextEntry={type==="password"}
        />
      </View>
    </View>
  )
}

export default InputWithLabel
