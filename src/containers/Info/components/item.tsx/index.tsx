import React from "react";
import { Text, View } from "react-native";
import { getImage } from "../../../../utils/getImage";
import ItemProps from "./types";
import styles from "./styles";

function Item (props: ItemProps) {
  const {text, image } = props;
  
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {getImage(image)}
    </View>)
};

export default Item;