import { StyleSheet } from 'react-native';
import { black, grey } from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 24,
    borderBottomColor:  grey,
    borderBottomWidth: 1,
    borderTopColor:  grey,
    borderTopWidth: 1,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8
  },
  textView: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 16,
    flex: 60,
    flexWrap: 'wrap',
    textAlign: 'left',
    color: black,
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 9,
    flexWrap: 'wrap',
    textAlign: 'right',
    alignSelf: 'flex-end',
    width: '75%',
    color: black,
  },
  button: {
    width: 32,
    height: 32,
    backgroundColor: black,
    borderRadius: 16,
    margin: 8,
    display:'flex',
    justifyContent : 'center'
  }
});

export default styles;