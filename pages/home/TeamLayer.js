import React, { Fragment } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { TeamCard, SmallSquareCard } from '../../components/cards'
import { HorizontalScroll, ScrollStyle } from '../../components/scrollviews'
import { Header } from '../../components/headers'
import { TransparentLink } from '../../components/buttons'
import { ViewStyles } from '../../styles/ViewStyles'

const TeamLayer = ({ user, league, nextDisplay, display, changeDisplay, afterAnimation, navigation }) => {
  const checkForLeagues = () => {
      return (
        <Fragment>
          <Header text="It looks like you don't belong to a league yet!" />
          <TransparentLink text="Create a new league" handlePress={()=>{ navigation.navigate('League') }} />
        </Fragment>
      )
    }

  const renderTeams = () => {
    const { teams } = user.attributes

    if (!league) return checkForLeagues()

    if (display === 'TEAMS'){
      const teamCards = teams.map(team => <TeamCard team={ team } key={ team.name } nextDisplay={ nextDisplay } afterAnimation={ afterAnimation } navigation={navigation} />)
      return (
        <Fragment>
          <TransparentLink text="My Teams" handlePress={()=>changeDisplay("TEAMS")} />
          <HorizontalScroll active={true} children={teamCards}/>
        </Fragment>
      )
    } else {
      const teamCards = teams.map(team => <SmallSquareCard image_url={ team.image_url } key={ team.name } />)
      return (
        <Fragment>
          <TransparentLink text="My Teams" handlePress={()=>changeDisplay("TEAMS")} />
          <HorizontalScroll active={false} children={teamCards}/>
        </Fragment>
      )
    }
  }

  return (
    <View style={ ViewStyles.secondLayer } >
      {renderTeams()}
    </View>
  )
}



const mapStateToProps = state => {
  return {
    user: state.user,
    league: state.league.currentLeague
   }
}

export default connect(mapStateToProps)(TeamLayer)
