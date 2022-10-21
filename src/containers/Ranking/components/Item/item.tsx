import React from "react";
import { View, Text } from "react-native";
import {getImage, ImageType} from "../../../../utils/getImage";
import { ItemPropsType } from "../../types";
import itemStyle from "./styles";

function Item (props: ItemPropsType){
  const { item, index  } = props;
  const { id, name, points, total_match, total_win, total_draw, total_lose, gol_scores, gol_conceded } = item;
  
  return <View style={itemStyle.container}>
          <Text style={itemStyle.textBoldPos}>{index+1}</Text>
          <View style={itemStyle.view}>
            <View style={itemStyle.subView}>
              {getImage(ImageType[id])}
            </View>
            <Text style={{height: '100%', width: 100,}} >{name}</Text>
          </View>
          <Text style={itemStyle.textBold}>{points}</Text>
          <Text style={itemStyle.text}>{total_match}</Text>
          <Text style={itemStyle.text}>{total_win}</Text>
          <Text style={itemStyle.text}>{total_draw}</Text>
          <Text style={itemStyle.text}>{total_lose}</Text>
          <Text style={itemStyle.text}>{gol_scores}</Text>
          <Text style={itemStyle.text}>{gol_conceded}</Text>

        </View>
};

export default Item;