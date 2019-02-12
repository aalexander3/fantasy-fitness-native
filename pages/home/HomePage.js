import React, { Component, Fragment } from 'react'
import { View } from 'react-native'
import { ViewStyles } from '../../styles/ViewStyles'
import { connect } from 'react-redux'

import CompletionLayer from './CompletionLayer'
import TeamLayer from './TeamLayer'
import UserLayer from './UserLayer'

class HomePage extends Component {

  state = {
    display: 'PROFILE',
    nextDisplay: 'PROFILE'
  }

  changeDisplay = newDisplay => {
    this.setState({ nextDisplay: newDisplay })
  }

  afterAnimation = () => {
    this.setState({ display: this.state.nextDisplay })
  }

  render(){
    const { attributes } = this.props.user
    const { nextDisplay, display } = this.state

    return (
      <View style={ ViewStyles.profile } >
        <View style={ ViewStyles.firstLayer } >
          { attributes && <UserLayer nextDisplay={nextDisplay} display={display} afterAnimation={this.afterAnimation} changeDisplay={this.changeDisplay} />}
        </View>
        <View style={ ViewStyles.secondLayer } >
          { attributes && <TeamLayer nextDisplay={nextDisplay} display={display} afterAnimation={this.afterAnimation} changeDisplay={this.changeDisplay} /> }
        </View>
        <View style={ ViewStyles.thirdLayer } >
          { attributes && <CompletionLayer nextDisplay={nextDisplay} display={display} afterAnimation={this.afterAnimation} changeDisplay={this.changeDisplay} /> }
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
   }
}

export default connect(mapStateToProps)(HomePage)
