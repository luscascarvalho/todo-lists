import React, { useContext } from "react";

import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input/intex";
import { MaterialIcons } from "@expo/vector-icons";
import { Ball } from "../../components/ball";
import { Flag } from "../../components/flag";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { formatDateToBR } from "../../global/function";

export default function List() {

  const {taskList} = useContext<AuthContextType>(AuthContextList)

  const renderCard = (item: PropCard) => {

    const color = item.flag == 'opcional' ? themas.color.blueLight : themas.color.red

    return (
      <TouchableOpacity style={style.card}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            <Ball color={color}/>

            <View>
              <Text style={style.titleCard}>{item.title}</Text>
              <Text style={style.descriptionCard}>{item.description}</Text>
              <Text style={style.descriptionCard}>até {formatDateToBR(item.timeLimit)}</Text>
            </View>
          </View>

          <Flag caption={item.flag} color={themas.color.red}/>
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
          data={taskList}
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
