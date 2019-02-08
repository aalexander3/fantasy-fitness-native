import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AppStyle } from '../../styles/AppStyle'
import { HomeStyle } from '../../styles/HomeStyle'

class InputWithLabel extends Component {

  state = {
    focused: false
  }

  handleFocus = (e) => {
    this.setState({focused: true})
  }

  render(){
    const {label, icon, handleText, value, placeholder, name, type, keyboard} = this.props
    const { focused } = this.state

    return (
      <View>
        <Text style={ AppStyle.label }>{label}</Text>
        <View style={ focused ? AppStyle.form : AppStyle.focusedForm }>
          <Ionicons
            name={icon}
            transform={[{ rotateX: '45deg' }]}
            size={30}
            color={'#424242'} />
          <TextInput
            style={ AppStyle.input }
            onChangeText={(text) => handleText(text, name)}
            value={value}
            placeholder={placeholder}
            textContentType={type}
            autoCapitalize='none'
            secureTextEntry={type==="password"}
            onFocus={this.handleFocus}
            keyboardType={keyboard ? keyboard : 'default' }
          />
        </View>
      </View>
    )
  }
}

export default InputWithLabel
