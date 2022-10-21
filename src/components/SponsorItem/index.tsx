import React from "react";
import { View, Text, TouchableWithoutFeedback, Linking } from "react-native";
import { getImage } from "../../utils/getImage";
import { createStyle } from "../../utils/utils";
import { sponsorItemStyle, sponsorSubItemStyle, sponsorStyle } from "./styles";
import { SponsorProps } from "./type";

function SponsorItem(props: SponsorProps){

  const {sponsorItems} = props;
  const { item, descriptionItem, link } = sponsorItems;
  const { style: itemStyle, image } = item;
  const {text,style: descriptionItemStyle, textStyle: descriptionTextStyle} = descriptionItem;

  // import stili statici
  const { container: containerItem } = sponsorItemStyle; 
  const { container: containerSubItem, text: textSubItem  } = sponsorSubItemStyle;

  return <View style={sponsorStyle.container} >
          <View style={createStyle([itemStyle, containerItem])}>
            {/* <View style={sponsorItemStyle.leftView}>
            <YoutubePlayer
              height={100}
              play={false}
              videoId={''}
            />
            </View> */}
            <View style={sponsorItemStyle.rightView}>
              <TouchableWithoutFeedback onPress={() => Linking.openURL(link)}>
                {getImage(image)}
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={createStyle([containerSubItem,descriptionItemStyle ])}>
            <Text style={createStyle([textSubItem, descriptionTextStyle])}>{text}</Text>
          </View> 

        </View>
};

export default SponsorItem;
