import React from "react";

import { FlatList, Text, View } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input/intex";
import { MaterialIcons } from "@expo/vector-icons";

const data: any = [
  {
    item: 0,
    title: "Realizar a tarefa de casa",
    description: "página 10 a 20",
    flag: "urgente",
  },

  {
    item: 1,
    title: "Passear com a Malu",
    description: "16h30",
    flag: "urgente",
  },

  {
    item: 2,
    title: "Ir para a academia",
    description: "10h",
    flag: "urgente",
  },
];

export default function List() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.greeting}>
          Bom dia,{" "}
          <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
            seu doidinho
          </Text>
        </Text>

        <View style={style.boxInput}>
          <Input IconLeft={MaterialIcons} IconLeftName="search" />
        </View>
      </View>

      <View style={style.boxList}>
        <FlatList />
      </View>
    </View>
  );
}
