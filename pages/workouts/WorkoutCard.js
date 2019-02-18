import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, Image, Animated, Easing, TouchableHighlight } from 'react-native'
import { AppStyle } from '../../styles/AppStyle';

import { CardStyle } from '../../components/cards/CardStyle';
// import { HomeStyle } from '../../styles/HomeStyle';

import { updateUserCompletion } from '../../actions/userActions'
import RootAdapter from '../../adapters/RootAdapter'


class WorkoutCard extends Component {

  state = {
    profileY:  new Animated.Value(0)
  }

  componentDidMount(){
    this.setState({ profileY: new Animated.Value(0)}, this.profileIn)
  }

  componentDidUpdate(prevProps){
    if (this.props.nextDisplay !== 'WORKOUTS') {
      this.profileOut()
    }
  }

  changeCompletionStatus = () => {
    let { CompletionAdapter } = RootAdapter
    let {user, currentTeam, league_pack, workout, pack} = this.props
    let workoutPack = league_pack.workout_packs.find(wop => {
      return wop.pack_id  === pack.id  && wop.workout_id === workout.id
    })

    let completionObj = {
      user_id: user.id,
      team_id: currentTeam.id,
      league_pack_id: league_pack.id,
      workout_pack_id: workoutPack.id,
      completed: true
    }

    CompletionAdapter.create(completionObj).then(updateUserCompletion)
  }

  // t.integer "user_id"
  // t.integer "team_id"
  // t.integer "workout_pack_id"
  // t.integer "league_pack_id"
  // t.boolean "completed"

  profileIn = () => {
    Animated.timing(
    this.state.profileY,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start()
  }

  profileOut = () => {
    Animated.timing(
      this.state.profileY,
        {
          toValue: 0,
          duration: 50,
          easing: Easing.linear
        }
      ).start(this.props.afterAnimation)
  }

  render(){
        // debugger

    // const { username, bio, avatar, tagline, } = this.props.teammate
    const { name, category, image_url, description, default_points } = this.props.workout

    const profileY = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [-200, 0]})
    const height = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [100, 300]})
    const opacity = this.state.profileY.interpolate({inputRange: [0, 1], outputRange: [.35, 1]})

    return (
      <Animated.View style={{ opacity, height }} >
        <View style={ CardStyle.teamCard } >
          <Image
            source={{uri: image_url }}
            style={ AppStyle.avatar } />
          <TouchableHighlight
            onPress={this.goToTeam} // make go to workout function?
            underlayColor='transparent' >
            <Text style={AppStyle.header}>Name: {name}</Text>
          </TouchableHighlight>
          <Text>Category: { category }</Text>
          <Text>Points: { default_points }</Text>
          {/* <Text>{}</Text> */}
          <Button title="Mark As Complete" onPress={this.changeCompletionStatus}></Button>
        </View>
      </Animated.View>
    )
  }
}

const mapStateToProps = state => {
  console.log('STATE', state)
   return {
     user: state.user,
     currentTeam: state.team.currentTeam
   }
}


export default connect(mapStateToProps, { updateUserCompletion })(WorkoutCard)


// import React from 'react'
// import { View, Text } from 'react-native'
//
// const WorkoutCard = (props) => {
//   // debugger
//   return (
//     <View>
//       <Text>
//         {props.workout.name}
//       </Text>
//     </View>
//   )
// }
//
// export default WorkoutCard
