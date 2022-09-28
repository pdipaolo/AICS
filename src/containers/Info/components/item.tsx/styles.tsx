
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  text: {
    fontSize: 32,
    flex: 60,
    flexWrap: 'wrap'
  }
});

export default styles;