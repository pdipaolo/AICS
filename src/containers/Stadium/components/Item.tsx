import React from "react";
import { TouchableWithoutFeedback, View, Text, Platform, Linking } from "react-native";

import {getImage, ImageType} from "../../../utils/getImage";

import ItemStadium from "../types";

import styles from "./styles";
function Item (props : ItemStadium & {index: number}){
  const {index, name, description, lat, lng} = props;
  var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
  var url = scheme + `${lat},${lng}`;
  // TODO fare alert
  return (
  <TouchableWithoutFeedback onPress={()=> Linking.openURL(url)}>
    <View style={styles.container}>
      <View style={styles.image}>
        {getImage(ImageType.Dream_1)}
      </View>
      <View style={styles.textView}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>)
};

export default Item;
