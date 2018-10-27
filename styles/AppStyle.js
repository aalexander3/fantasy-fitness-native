import { StyleSheet } from 'react-native';

export const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    backgroundColor: 'black',
    height: 60,
  },
  home: {
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1.5,
    backgroundColor: 'lightgrey'
  },
  userCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatar: {
    // borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    height: 200,
  }
})
