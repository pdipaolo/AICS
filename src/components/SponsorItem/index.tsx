import React from "react";
import { View, Text, Image } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import { createStyle } from "../../utils/utils";
import { sponsorItemStyle, sponsorSubItemStyle, sponsorStyle } from "./styles";
import { SponsorProps } from "./type";

function SponsorItem(props: SponsorProps){

  const {sponsorItems} = props;
  const { item, descriptionItem } = sponsorItems;
  const {title, subtitle, style: itemStyle, textStyle: itemTextStyle, image} = item;
  const {text,style: descriptionItemStyle, textStyle: descriptionTextStyle} = descriptionItem;

  // import stili statici
  const { container: containerItem, text: textItem } = sponsorItemStyle; 
  const { container: containerSubItem, text: textSubItem  } = sponsorSubItemStyle;

  return <View style={sponsorStyle.container} >
          <View style={createStyle([itemStyle, containerItem])}>
            <View style={sponsorItemStyle.leftView}>
            <YoutubePlayer
              height={100}
              play={false}
              videoId={''}
            />
            </View>
            <View style={sponsorItemStyle.rightView}>
              <Text style={createStyle([textItem,  itemTextStyle])}>{title}</Text>
              <Image 
                style={sponsorItemStyle.image}
                source={{
                  uri: image,
                }}
              />
              <Text style={createStyle([textItem,  itemTextStyle])}>{subtitle}</Text>
            </View>
          </View>
          <View style={createStyle([containerSubItem,descriptionItemStyle ])}>
            <Text style={createStyle([textSubItem, descriptionTextStyle])}>{text}</Text>
          </View> 

        </View>
};

export default SponsorItem;
