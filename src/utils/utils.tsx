import { StyleSheet } from "react-native";

const createStyle = (array: object[])  => {

  return StyleSheet.flatten(array)
}

export {
  createStyle
};