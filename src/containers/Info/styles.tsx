import { StyleSheet } from 'react-native';
import { black, grey, white } from '../../constants/colors';

const styles = StyleSheet.create({
  site: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: grey
  },
  text: {
    marginTop: 32,
    fontSize: 18,
    color: black,
  },
  subText: {
    margin: 16,
    width: '90%',
    fontSize: 12,
    textAlign: 'center',
    color: black,
  },
  button: {
    backgroundColor: black,
    borderRadius: 10,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    color: white,
    padding: 8,
    paddingRight: 32,
    paddingLeft: 32
  }
});

export default styles;