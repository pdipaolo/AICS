import React from "react";
import { View, Text } from "react-native";
import {getImage, ImageType} from "../../../utils/getImage";
import { ItemPropsType } from "../types";
import itemStyle from "./styles";

function Item (props: ItemPropsType){
  const { name, total_match, points, gol_scores, gol_conceded, index  } = props;
  
  return <View style={itemStyle.container}>
          <Text style={{flex: 10, fontWeight: 'bold'}}>{index+1}</Text>
          <View style={{flex: 50, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{height:40, width: 80}}>
            {getImage(ImageType.Dream_1)}
            </View>
            <Text >{name}</Text>
          </View>
          <Text style={{flex: 10}}>{total_match}</Text>
          <Text style={{flex: 10}}>{gol_scores}</Text>
          <Text style={{flex: 10}}>{gol_conceded}</Text>
          <Text style={{flex: 10, fontWeight: 'bold'}}>{points}</Text>
        </View>
};

export default Item;