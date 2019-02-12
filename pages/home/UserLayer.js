import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { UserCard  } from '../../components/cards'
import { HeaderWithAvatar } from '../../components/headers'

const UserLayer = ({ user, nextDisplay, display, changeDisplay, afterAnimation }) => {
  const renderUser = () => {
    const { first_name, last_name, avatar } = user.attributes
    const fullName = `${first_name} ${last_name}`

    if (display !== 'PROFILE') {
      return (
          <TouchableHighlight
            onPress={()=>changeDisplay('PROFILE')}
            underlayColor='transparent' >
            <HeaderWithAvatar avatar={avatar} text={fullName}/>
          </TouchableHighlight>
        )
    } else {
      return <UserCard user={ user } nextDisplay={ nextDisplay } afterAnimation={ afterAnimation } />
    }
  }

  return (
    renderUser()
  )
}



const mapStateToProps = state => {
  return {
    user: state.user
   }
}

export default connect(mapStateToProps)(UserLayer)
