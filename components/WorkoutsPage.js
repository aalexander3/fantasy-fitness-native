import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { connect } from 'react-redux'

class WorkoutsPage extends Component {

  render(){
    return (
      <View>
        <Text>WORKOUTS</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(WorkoutsPage)
