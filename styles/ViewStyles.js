import { StyleSheet } from 'react-native';

export const ViewStyles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: '#E53B49',
  },
  firstLayer: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#E53B49',
    opacity: 1,
  },
  secondLayer: {
    backgroundColor: '#E53B49',
    borderTopColor: 'white',
    borderTopWidth: 1,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: -15,
    opacity: .9,
  },
  thirdLayer: {
    backgroundColor: '#E53B49',
    borderTopColor: 'white',
    borderTopWidth: 1,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    opacity: 1,
  },
  signUpPage: {
    flex: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
})
