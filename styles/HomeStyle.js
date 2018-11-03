import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: '#D5DDE7'
  },
  userCard: {
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    backgroundColor: '#D5DDE7',
    padding: 10,
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
  teamAvatar: {
    height: 75,
    width: 75,
    flexDirection: 'column',
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  avatar: {
    height: 75,
    width: 75,
    borderRadius: 10,
  },
  firstLayer: {
    paddingTop: 50,
    backgroundColor: '#D5DDE7'
  },
  secondLayer: {
    backgroundColor: '#B5C9D3',
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
    paddingBottom: 20,
    marginBottom: -15,
  },
  thirdLayer: {
    flex: 1,
    backgroundColor: '#B994D8',
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
  },
})
