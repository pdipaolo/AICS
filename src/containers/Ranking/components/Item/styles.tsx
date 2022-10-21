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
    flex: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subView: {
    height:30,
    width: 55
  },
  text : {
    flex: 8,
    textAlign:'center'
  },
  textBoldPos: {
    flex: 5,
    fontWeight: 'bold'
  },
  textBold: {
    flex: 8,
    fontWeight: 'bold',
    textAlign:'center'
  }
})

export default itemStyle;