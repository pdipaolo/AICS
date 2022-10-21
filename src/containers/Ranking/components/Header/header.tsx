import React from "react";
import { View, Text } from "react-native";

import headerStyle from "./styles";
function Header() {
  return <View style={headerStyle.container} >
    <Text style={headerStyle.posFlex}></Text>
    <Text style={headerStyle.text}>Club</Text>
    <Text style={headerStyle.flex}>PTs</Text>
    <Text style={headerStyle.flex}>PG</Text>
    <Text style={headerStyle.flex}>V</Text>
    <Text style={headerStyle.flex}>N</Text>
    <Text style={headerStyle.flex}>P</Text>
    <Text style={headerStyle.flex}>GF</Text>
    <Text style={headerStyle.flex}>GS</Text>
    </View>
};

export default Header;