import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import WorkoutCard from './WorkoutCard'
import { WorkoutStyles } from './WorkoutStyles'
import { Header } from '../../components/headers'
import { VerticalScroll } from '../../components/scrollviews'
import { ViewStyles } from '../../styles/ViewStyles'


const PackList = ({packs}) => {
  const packCards = packs.map(pack => <WorkoutCard workout={pack} key={pack.id} />)

  return (
    <View style={ViewStyles.profile} >
      <View style={WorkoutStyles.centeredView}>
        <VerticalScroll children={packCards} />
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    packs: state.workout.packs
  }
}

export default connect(mapStateToProps)(PackList)
