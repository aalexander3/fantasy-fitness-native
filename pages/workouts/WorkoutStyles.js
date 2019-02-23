import { StyleSheet } from 'react-native';


export const WorkoutStyles = StyleSheet.create({
  tabBar: {
    paddingTop: 80,
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    flex: .07,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  workoutCard: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 10,
    width: 350,
    height: 150,
    margin: 2,
  },
  cardHeader: {
    backgroundColor: '#22272E',
    opacity: .8,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    padding: 10,
    borderRadius: 10,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    opacity: .8,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  centeredView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '90%',
    marginBottom: '10%',
    paddingBottom: '10%',
  },
  workoutDisplay: {
    width: '100%',
    paddingTop: 10,
    flex: 1,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
  },
  bannerHeader: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    textTransform: 'uppercase',
  },
  bannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
  },
})
