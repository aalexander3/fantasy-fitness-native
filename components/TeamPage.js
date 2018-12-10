import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import { AppStyle } from '../styles/AppStyle';
import { connect } from 'react-redux'

class TeamPage extends Component {

  render(){
    console.log(this.props.team)
    return (
      <View>
        <Text>{this.props.team.name}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { team: state.team }
}

export default connect(mapStateToProps)(TeamPage)
