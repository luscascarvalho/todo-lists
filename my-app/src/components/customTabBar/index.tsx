import React from "react";

import {
  ActivityIndicator,
  Text,
  TouchableHighlightProps,
  TouchableOpacity,
  View,
} from "react-native";

import { style } from "./style";

import {
  Ionicons,
  FontAwesome,
  Entypo,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

interface CustomTabBarProps {
  state: any;
  navigation: any;
}

export default function CustomTabBar({ state, navigation }: CustomTabBarProps) {
  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabItem}>
        <AntDesign name="bars" style={{ fontSize: 32 }} />
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItemButton}>
        <View>
            <Entypo name="plus" size={40}/>
        </View>
        <View>
        <MaterialIcons name="edit" size={30} style={{color: '#000'}}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItem}>
        <FontAwesome name="user" style={{ fontSize: 32 }} />
      </TouchableOpacity>
    </View>
  );
}
