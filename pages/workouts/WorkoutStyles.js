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
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  workoutCard: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 350,
    height: 150,
    margin: 2,
  }
})
