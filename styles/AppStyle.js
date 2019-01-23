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
  input: {
    flex: 1,
    padding: 10,
    color: '#424242',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 5,
    height: 40,
    width: 300,
    margin: 10,
  },
  focusedForm: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
    height: 40,
    width: 300,
    margin: 10,
  },
  label: {
    fontSize: 14,
    paddingLeft: 10,
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
