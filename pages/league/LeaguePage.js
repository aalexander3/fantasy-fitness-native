import React, { Component } from 'react'
import { View, Text, Animated, Easing, Image } from 'react-native'
import NewLeague from './NewLeague'
import { ViewStyles } from '../../styles/ViewStyles';
import { AppStyle } from '../../styles/AppStyle';
import { CardStyle } from '../../components/cards/CardStyle';
import { connect } from 'react-redux'
import { setLeague } from '../../actions/leagueActions'
import Header from '../../components/headers/Header'

class LeaguePage extends Component {

  renderLeague = () => {
    if (this.props.currentLeague) {
      const { name, image_url, description, number_of_teams } = this.props.currentLeague

      return (
        <View style={ ViewStyles.profile } >
          <View style={ ViewStyles.firstLayer } >
            <View style={CardStyle.userCard} >
              <Image
                source={{uri: image_url }}
                style={[AppStyle.avatar, { height: 150, width: 150}, { borderRadius: 75 }]} />
              <Header text={name} />
              <Header text={description} />
            </View>
          </View>
          <View style={ ViewStyles.secondLayer } >
            <Header text="This week's workouts"/>
            <Text>so many workouts</Text>
          </View>
        </View>
      )
    } else {
        return <NewLeague />
    }
  }

  render(){
    return(
      <View style={ ViewStyles.profile } >
        {this.renderLeague()}
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
