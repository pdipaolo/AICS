import React from "react";
import { View, Text } from "react-native";

import headerStyle from "./styles";
function Header() {
  return <View style={headerStyle.container} >
    <Text style={{flex: 10}}>Pos</Text>
    <Text style={{flex: 50, position: 'relative', left: 20}}>Club</Text>
    <Text style={{flex: 10}}>PT</Text>
    <Text style={{flex: 10}}>GF</Text>
    <Text style={{flex: 10}}>GS</Text>
    <Text style={{flex: 10}}>PTs</Text>
    </View>
};

export default Header;