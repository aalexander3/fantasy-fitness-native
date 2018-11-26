import { StyleSheet } from 'react-native';

export const AppStyle = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
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
  label: {
    fontSize: 14,
    paddingLeft: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'orange',
    borderWidth: 1,
    width: 100,
  }
})
