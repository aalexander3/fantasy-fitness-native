import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FormStyles } from './FormStyles'

class InputWithLabel extends Component {

  state = {
    focused: false
  }

  handleFocus = (e) => {
    this.setState({focused: true})
  }

  render(){
    const { label, icon, handleText, value, placeholder, name, type, keyboard } = this.props
    const { focused } = this.state

    return (
      <View>
        <Text style={ FormStyles.label }>{label}</Text>
        <View style={ focused ? FormStyles.form : FormStyles.focusedForm }>
          <Ionicons
            name={icon}
            transform={[{ rotateX: '45deg' }]}
            size={30}
            color={'#424242'} />
          <TextInput
            style={ FormStyles.input }
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
