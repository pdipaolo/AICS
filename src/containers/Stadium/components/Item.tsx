import React from "react";
import { TouchableWithoutFeedback, View, Text, Platform, Linking, Alert } from "react-native";

import {getImage, ImageType} from "../../../utils/getImage";

import ItemStadium from "../types";

import styles from "./styles";
function Item (props : ItemStadium & {index: number}){
  const {id, name, description, lat, lng} = props;
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${lat},${lng}`;
  const url: string = Platform.select({
    ios: `${scheme}${name}@${latLng}`,
    android: `${scheme}${latLng}(${name})`
  }) || '' ;
  
  const mapsAlert = () => {
    Alert.alert(
      "Vuoi avviare la navigazione?",
      "Verrà aperta l'applicazione per la navigazione impostando il campo selezionato come destinazione.",
      [
        {
          text: "Annulla",
          style: "cancel"
        },
        { text: "Avvia GPS", onPress: () => Linking.openURL(url) }
      ]
    );
  }

  return (
  <TouchableWithoutFeedback onPress={mapsAlert}>
    <View style={styles.container}>
      <View style={styles.image}>
        {getImage(ImageType[id])}
      </View>
      <View style={styles.textView}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>)
};

export default Item;
