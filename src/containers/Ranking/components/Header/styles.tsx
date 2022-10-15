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
    flex: 50,
    position: 'relative',
    left: 20
  },
  flex: {
    flex: 10
  }
})

export default headerStyle;