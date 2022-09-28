import { StyleSheet } from 'react-native';
import { black } from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 32,
    flex: 60,
    flexWrap: 'wrap',
    color: black
  }
});

export default styles;