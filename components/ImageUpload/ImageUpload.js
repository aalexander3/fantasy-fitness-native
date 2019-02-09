import React from 'react'
import { Image, TouchableHighlight } from 'react-native'
import { ImagePicker, Permissions } from 'expo'
import { UploadStyles } from './UploadStyles'

const ImageUpload = ({ handlePhoto, imageUrl }) => {

  addPhoto = async () => {
    const options = {
      allowsEditing: true
    }

    let permission = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    let { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync(options)
      if (result.uri) return handlePhoto(result.uri)
    }
  }

  return (
    <TouchableHighlight
      onPress={this.addPhoto}
      underlayColor='transparent'
    >
    {imageUrl !== '' ?
      <Image
        source={{uri: imageUrl }}
        style={UploadStyles.imageUpload} /> :
      <Image
        source={{uri: 'http://pluspng.com/img-png/free-png-plus-sign-download-512.png' }}
        style={UploadStyles.imageUpload} />
    }
    </TouchableHighlight>
  )
}

export default ImageUpload
