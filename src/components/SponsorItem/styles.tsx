import { StyleSheet } from 'react-native';
import { grey } from '../../constants/colors';

const sponsorStyle = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomColor: grey,
    borderBottomWidth: 4,
  }
})

const sponsorItemStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 100,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,   
    elevation: 8,
    justifyContent: 'space-between',
    zIndex: 1
  },
  leftView: {
    height:  '100%',
    width: 120,
    borderColor: '#fff',
    borderWidth: 2,
  },
  rightView:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height:  100,
    width: 100,
    margin: 8
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  }
});

const sponsorSubItemStyle = StyleSheet.create({
  container:{
    minHeight: 100,
    marginRight: 16,
    marginLeft: 16,
    padding: 8,
    borderBottomLeftRadius:  16,
    borderBottomRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    fontSize: 24,
  },
  text: {
  }
});


export {sponsorStyle, sponsorItemStyle, sponsorSubItemStyle};