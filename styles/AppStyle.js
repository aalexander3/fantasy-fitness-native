import { StyleSheet } from 'react-native';

export const AppStyle = StyleSheet.create({
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 10,
    marginBottom: 10,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'blue'
  },
  avatar: {
    borderColor: 'black',
    borderWidth: 1,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  button: {
    padding: 10,
    backgroundColor: 'cyan',
    borderWidth: 1,
    width: 300,
    alignItems: 'center',
  },
  signUpPage: {
    flex: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageUpload: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 30,
  }
})
