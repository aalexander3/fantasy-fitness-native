import React from 'react'
import { View } from 'react-native'
import { InputWithLabel } from '../../components/form'

const Invite = ({invitation, handleText, idx}) => {

  const updateInvitation = (text, name) => {
    handleText(text, name, idx)
  }

  return (
    <View>
      <InputWithLabel
        label="First Name"
        name="name"
        icon='ios-person'
        handleText={updateInvitation}
        value={invitation.name}
        type="none"
        placeholder="Enter your friend's name..." />
      <InputWithLabel
        label="Email"
        name="email"
        icon='ios-person'
        handleText={updateInvitation}
        value={invitation.email}
        type="none"
        placeholder="Enter your friend's email..." />
    </View>
  )
}

export default Invite
