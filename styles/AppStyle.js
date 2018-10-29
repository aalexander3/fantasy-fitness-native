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
    paddingBottom: 30,
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1,
    backgroundColor: 'lightgrey'
  },
  profile: {
    paddingTop: 60,
    paddingBottom: 300,
    paddingLeft: 40,
    paddingRight: 40,
    flex: 2,
    backgroundColor: 'lightgrey'
  },
  userCard: {
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 40,
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
  userSlice: {
    height: 150,
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
  teamCard: {
    height: 300,
    width: 200,
    flexDirection: 'column',
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    shadowColor: 'grey',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  avatar: {
    borderColor: 'black',
    borderWidth: 1,
    width: 150,
    height: 150,
    borderRadius: 75,

  }
})
