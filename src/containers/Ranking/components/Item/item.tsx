import React from "react";
import { View, Text } from "react-native";
import {getImage, ImageType} from "../../../../utils/getImage";
import { ItemPropsType } from "../../types";
import itemStyle from "./styles";

function Item (props: ItemPropsType){
  const { name, total_match, points, gol_scores, gol_conceded, index  } = props;
  
  return <View style={itemStyle.container}>
          <Text style={itemStyle.textBold}>{index+1}</Text>
          <View style={itemStyle.view}>
            <View style={itemStyle.subView}>
            {getImage(ImageType.Dream_1)}
            </View>
            <Text >{name}</Text>
          </View>
          <Text style={itemStyle.text}>{total_match}</Text>
          <Text style={itemStyle.text}>{gol_scores}</Text>
          <Text style={itemStyle.text}>{gol_conceded}</Text>
          <Text style={itemStyle.textBold}>{points}</Text>
        </View>
};

export default Item;