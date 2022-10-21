import { StyleSheet } from 'react-native';

const itemStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 100,
    width: "100%",
  },
  image: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  textView: {
    display: "flex",
    flexDirection: "column",
    flex: 70,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Didot'
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Didot'
  }
})

export default itemStyle;
