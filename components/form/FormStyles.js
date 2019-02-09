import { StyleSheet } from 'react-native';

export const FormStyles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    color: '#424242',
  },
  label: {
    fontSize: 14,
    paddingLeft: 10,
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
  }
})
