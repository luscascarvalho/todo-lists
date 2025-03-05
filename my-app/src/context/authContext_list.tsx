import React, { createContext, useContext, useRef } from "react";
import {
  Alert,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Input } from "../components/input/intex";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const container = () => {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>

          <Text style={style.title}>Criar tarefa</Text>

          <TouchableOpacity>
            <AntDesign name="check" size={30} />
          </TouchableOpacity>
        </View>
        <View style={style.content}>
          <Input title="Titulo:" labelStyle={style.label} />
          <Input title="Descrição:" labelStyle={style.label} height={100} multiline numberOfLines={5}/>

          <View style={{ width: "40%" }}>
            <Input title="Tempo limite:" labelStyle={style.label}/>
          </View>

          <View style={style.containerFlag}>
            <Text style={style.label}>Flags: </Text>
            <View style={{}}></View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{ height: Dimensions.get("window").height / 1.3 }}
        adjustToContentHeight={true}
      >
        {container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);

export const style = StyleSheet.create({
  container: {
    width: "100%",
  },

  header: {
    width: "100%",
    height: 40,
    paddingHorizontal: 40,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  content: {
    width: "100%",
    paddingHorizontal: 20,
  },

  containerFlag: {
    width: "100%",
  },

  label: {
    fontWeight: "bold",
    color: "FFFFFF",
  },
});
