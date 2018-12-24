import React, { Component } from 'react'
import { View, Text, Animated, Easing, Image  } from 'react-native'
import { HomeStyle } from '../../styles/HomeStyle';
import { AppStyle } from '../../styles/AppStyle';
import { connect } from 'react-redux'
import { setLeague } from '../../actions/leagueActions'
import Header from '../../components/headers/Header'

class LeaguePage extends Component {

  render(){
    const { name, image_url, description, number_of_teams } = this.props.currentLeague
    return (
      <View style={ HomeStyle.profile } >
        <View style={ [ HomeStyle.secondLayer, { paddingTop: 80 } ]} >
          <Header text={name} />
          <Header text={description} />
        </View>
        <View style={ HomeStyle.firstLayer } >
          <Header text="This week's workouts"/>
          <View>
            <Text>so many workouts</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    team: state.team,
    currentLeague: state.league.currentLeague
   }
}

export default connect(mapStateToProps, { setLeague })(LeaguePage)
