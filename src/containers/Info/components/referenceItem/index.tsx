import React from "react";
import { Linking, Text, TouchableWithoutFeedback, View, Alert } from "react-native";
import ItemProps from "./types";
import styles from "./styles";
import { getImage, ImageType } from "../../../../utils/getImage";


function ItemReference (props: ItemProps) {
  const {name, reference, number, email, description } = props;

  const callNumber = () => {
    Alert.alert(
      `Chiama ${name}?`,
      `Cliccando "Chiama" verrà avviata una chiamata verso ${name} attraverso il telefono.`,
      [
        {
          text: "Annulla",
          style: "cancel"
        },
        { text: "Chiama", onPress: () => Linking.openURL(`tel:${number}`) }
      ]
    );
  };

  return(
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.text}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{reference}</Text>
        </View>

        {number && 
          <TouchableWithoutFeedback onPress={callNumber}>
            <View style={styles.button}>
              {getImage(ImageType.Phone)}
            </View>
          </TouchableWithoutFeedback>
          }
        {email && 
          <TouchableWithoutFeedback onPress={()=> Linking.openURL(`mailto:${email}`)}>
            <View style={styles.button}>
              {getImage(ImageType.Mail)}
            </View>
          </TouchableWithoutFeedback>
          }
      </View>
      <Text style={styles.subText}>{description}</Text>
    </View>)
};

export default ItemReference;