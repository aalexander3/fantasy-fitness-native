import { StyleSheet } from 'react-native';

export const CardStyle = StyleSheet.create({
  smallSquare: {
    height: 75,
    width: 75,
    flexDirection: 'column',
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  smallSquareImage: {
    height: 75,
    width: 75,
    borderRadius: 10,
  },
  avatar: {
    borderColor: 'black',
    borderWidth: 1,
    width: 150,
    height: 150,
    borderRadius: 75,
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
})
