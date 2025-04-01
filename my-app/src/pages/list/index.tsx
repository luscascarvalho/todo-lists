import React, { useContext, useRef } from "react";

import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input/intex";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Ball } from "../../components/ball";
import { Flag } from "../../components/flag";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { formatDateToBR } from "../../global/function";

import { Swipeable } from "react-native-gesture-handler";

export default function List() {
  const { taskList, handleDelete, handleEdit } =
    useContext<AuthContextType>(AuthContextList);
  const swipeableRefs = useRef<(Swipeable | null)[]>([]);
  const renderRightActions = () => {
    return (
      <View style={style.button}>
        <AntDesign name="delete" size={20} color={"#FFFFFF"} />
      </View>
    );
  };

  const renderLeftActions = () => {
    return (
      <View style={[style.button, { backgroundColor: themas.color.blueLight }]}>
        <AntDesign name="edit" size={20} color={"#FFFFFF"} />
      </View>
    );
  };

  const handleSwipeOpen = (
    directions: "right" | "left",
    item: PropCard,
    index: number
  ) => {
    if (directions === "right") {
      handleDelete(item);
    } else {
      handleEdit(item);
    }

    swipeableRefs.current[index]?.close();
  };

  const renderCard = (item: PropCard, index: number) => {
    const color =
      item.flag == "opcional" ? themas.color.blueLight : themas.color.red;

    return (
      <Swipeable
        ref={(ref) => (swipeableRefs.current[index] = ref)}
        key={index}
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
        onSwipeableOpen={(directions) =>
          handleSwipeOpen(directions, item, index)
        }
      >
        <View style={style.card}>
          <View style={style.rowCard}>
            <View style={style.rowCardLeft}>
              <Ball color={color} />

              <View>
                <Text style={style.titleCard}>{item.title}</Text>
                <Text style={style.descriptionCard}>{item.description}</Text>
                <Text style={style.descriptionCard}>
                  até {formatDateToBR(item.timeLimit)}
                </Text>
              </View>
            </View>

            <Flag caption={item.flag} color={themas.color.red} />
          </View>
        </View>
      </Swipeable>
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
          <Input
            IconLeft={MaterialIcons}
            IconLeftName="search"
            labelStyle={{ color: "black" }}
          />
        </View>
      </View>

      <View style={style.boxList}>
        <FlatList
          data={taskList}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {
            return renderCard(item, index);
          }}
        />
      </View>
    </View>
  );
}
