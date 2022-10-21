import { StyleSheet } from 'react-native';

const headerStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 30,
    width: "100%",
    backgroundColor: "#ddd",
    paddingLeft: 10,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center"
  },
  text: {
    flex: 45,
    position: 'relative',
    left: 20
  },
  flex: {
    flex: 8,
    textAlign:'center'
  },
  posFlex: {
    flex: 5
  }
})

export default headerStyle;