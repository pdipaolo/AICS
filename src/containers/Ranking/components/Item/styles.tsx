import { StyleSheet } from 'react-native';

const itemStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 50,
    width: "100%",
    paddingLeft: 10,
    textAlign: "center",
    alignItems: "center",
  },
  view :{
    flex: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  subView: {
    height:40,
    width: 80
  },
  text : {
    flex: 10,
  },
  textBold: {
    flex: 10,
    fontWeight: 'bold'
  }
})

export default itemStyle;