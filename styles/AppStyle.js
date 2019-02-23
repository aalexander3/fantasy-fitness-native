import { StyleSheet } from 'react-native';


export const AppStyle = StyleSheet.create({
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E53B49',
    marginTop: 10,
    marginBottom: 10,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#2F669E'
  },
  avatar: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#FCF9FF',
    borderRadius: 75,
    shadowColor: '#2B2C3A',
    shadowOffset: { width: 2, height: 2 },
  },
  button: {
    padding: 10,
    backgroundColor: '#E53B49',
    width: 225,
    borderRadius: 50,
    alignItems: 'center',
  },
  medAvatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 30,
  },
  icon: {
    padding: 10,
    backgroundColor: '#E53B49',
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
  }
})
