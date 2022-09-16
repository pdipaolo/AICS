import React from "react";
import { View, Text } from "react-native";
import { ItemPropsType } from "../type";
import itemStyle from "./styles";

function Item (props: ItemPropsType){
  const { name, total_match, points, gol_scores, gol_conceded, index  } = props;
  
  return <View style={itemStyle.container}>
          <Text style={{flex: 10, fontWeight: 'bold'}}>{index+1}</Text>
          <>
            {/* TODO: inserire immagine */}
            <Text style={{flex: 50}}>{name}</Text>
          </>
          <Text style={{flex: 10}}>{total_match}</Text>
          <Text style={{flex: 10}}>{points}</Text>
          <Text style={{flex: 10}}>{gol_scores}</Text>
          <Text style={{flex: 10, fontWeight: 'bold'}}>{gol_conceded}</Text>
        </View>
};

export default Item;