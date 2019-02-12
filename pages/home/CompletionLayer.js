import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import { CompletionCard, SmallSquareCard } from '../../components/cards'
import { HorizontalScroll, ScrollStyle } from '../../components/scrollviews'
import { Header } from '../../components/headers'
import { TransparentLink } from '../../components/buttons'

const CompletionLayer = ({ user, nextDisplay, display, afterAnimation, changeDisplay }) => {

  const checkForCompletions = () => {
    return (
      <View style={ScrollStyle.scrollView}>
        <Header text="You haven't finished any workouts yet!" />
      </View>
    )
  }

  const renderCompletions = () => {
    const { completions } = user.attributes

    if (completions.length === 0) return checkForCompletions()

    if (display === 'WORKOUTS'){
      const workoutCards = completions.map((completion) => <CompletionCard completion={ completion } key={ completion.id } nextDisplay={ nextDisplay } afterAnimation={ afterAnimation } />)
      return (
        <Fragment>
          <TransparentLink text="Claimed Workouts" handlePress={()=> changeDisplay("WORKOUTS")} />
          <HorizontalScroll active={true} children={workoutCards}/>
        </Fragment>
      )
    } else {
      const workoutCards = completions.map((completion) => <SmallSquareCard image_url={ completion.workout.image_url } key={ completion.id } />)
      return (
        <Fragment>
          <TransparentLink text="Claimed Workouts" handlePress={()=>this.changeDisplay("WORKOUTS")} />
          <HorizontalScroll active={false} children={workoutCards}/>
        </Fragment>
      )
    }
  }


  return (
    renderCompletions()
  )
}



const mapStateToProps = state => {
  return {
    user: state.user
   }
}

export default connect(mapStateToProps)(CompletionLayer)
