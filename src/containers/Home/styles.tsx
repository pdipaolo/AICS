
import { StyleSheet } from 'react-native';
import { grey, black } from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 16
  },
  video: {
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    width: '90%',
    margin: 16,
    padding: 16,
    backgroundColor: 'black',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1, 
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  containerImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop:  16,
    marginBottom: 32,
  },
  image: {
    height: 130,
    width:  100
  },
  hLine: {
    height: 100,
    width:  2, 
    backgroundColor: grey,
    alignSelf: 'center',
  },
  vLine: {
    height: 3,
    width: 100, 
    backgroundColor: grey,
    alignSelf: 'center',
  }
})

export default styles;