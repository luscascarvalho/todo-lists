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
import { themas } from "../../global/themes";

interface CustomTabBarProps {
  state: any;
  navigation: any;
}

export default function CustomTabBar({ state, navigation }: CustomTabBarProps) {

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
        <AntDesign
          name="bars"
          style={{
            opacity: state.index === 0 ? 1 : 0.2,
            color: themas.color.primary,
            fontSize: 32,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItemButton}>
        <View style={{ width: "100%", left: 10, top: 4 }}>
          <Entypo name="plus" size={40} color="#FFFFFF" />
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            width: "100%",
            right: 10,
            bottom: 10,
          }}
        >
          <MaterialIcons name="edit" size={30} style={{ color: "#FFFFFF" }} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
        <FontAwesome
          name="user"
          style={{
            opacity: state.index === 1 ? 1 : 0.2,
            color: themas.color.primary,
            fontSize: 32,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
