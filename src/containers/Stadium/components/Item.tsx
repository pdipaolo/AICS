import React from "react";
import { TouchableWithoutFeedback, View, Text, Platform, Linking, Alert } from "react-native";

import {getImage, ImageType} from "../../../utils/getImage";

import ItemStadium from "../types";

import styles from "./styles";
function Item (props : ItemStadium & {index: number}){
  const {index, name, description, lat, lng} = props;
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${lat},${lng}`;
  const label = 'Stadio';
  const url: string = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`
  }) || '' ;
  
  const mapsAlert = () => {
    Alert.alert(
      "Vuoi avviare la navigazione?",
      "Verrà aperta l'applicazione per la navigazione impostando il campo selezionato comedestinazione.",
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
