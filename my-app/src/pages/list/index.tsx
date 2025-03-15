import React, { useContext } from "react";

import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input/intex";
import { MaterialIcons } from "@expo/vector-icons";
import { Ball } from "../../components/ball";
import { Flag } from "../../components/flag";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";

type PropCard = {
  item: number;
  title: string;
  description: string;
  flag: "urgente" | "opcional";
};

export default function List() {

  const {} = useContext<AuthContextType>(AuthContextList)

  const renderCard = (item: PropCard) => {
    return (
      <TouchableOpacity style={style.card}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            <Ball color="red"/>

            <View>
              <Text style={style.titleCard}>{item.title}</Text>
              <Text style={style.descriptionCard}>{item.description}</Text>
            </View>
          </View>

          <Flag caption="Urgente" color={themas.color.red}/>
        </View>
      </TouchableOpacity>
    );
  };

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
        <FlatList
          data={data}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {
            return renderCard(item);
          }}
        />
      </View>
    </View>
  );
}
