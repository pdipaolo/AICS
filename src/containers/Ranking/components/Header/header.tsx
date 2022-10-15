import React from "react";
import { View, Text } from "react-native";

import headerStyle from "./styles";
function Header() {
  return <View style={headerStyle.container} >
    <Text style={headerStyle.flex}>Pos</Text>
    <Text style={headerStyle.text}>Club</Text>
    <Text style={headerStyle.flex}>PT</Text>
    <Text style={headerStyle.flex}>GF</Text>
    <Text style={headerStyle.flex}>GS</Text>
    <Text style={headerStyle.flex}>PTs</Text>
    </View>
};

export default Header;