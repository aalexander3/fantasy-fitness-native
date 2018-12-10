import React, { Component } from 'react'
import { View, Text, Animated, Easing, Image  } from 'react-native'
import { HomeStyle } from '../styles/HomeStyle';
import { AppStyle } from '../styles/AppStyle';
import { connect } from 'react-redux'
import RootAdapter from '../adapters/RootAdapter'
import { setLeague } from '../actions/leagueActions'

class LeaguePage extends Component {

  componentDidMount(){
    // const league_id = this.props.team.league_id
    // const { LeagueAdapter } = RootAdapter
    // LeagueAdapter.show(league_id).then(this.props.setLeague)
  }

  render(){
    const { name, image_url, description, number_of_teams } = this.props.league
    return (
      <View style={ HomeStyle.profile } >
        <View style={ HomeStyle.firstLayer } >
          <View style={HomeStyle.userCard} >
            <Text style={ AppStyle.header } >{name}</Text>
            <Text style={ AppStyle.header } >{description}</Text>
            <Image
              source={{uri: image_url }}
              style={ AppStyle.avatar } />
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    team: state.team,
    league: state.league
   }
}

export default connect(mapStateToProps, { setLeague })(LeaguePage)
