import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { connect } from 'react-redux'

class LeaguePage extends Component {

  render(){
    return (
      <View>
        <Text>LEAGUE</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(LeaguePage)
