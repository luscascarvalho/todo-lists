import React, { forwardRef, Fragment } from "react";

import { Text, TextInput, View } from "react-native";

import { style } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";

export const Input = forwardRef(() => {
  return (
    <Fragment>
      <Text style={style.titleInput}>E-mail</Text>
      <View style={style.boxInput}>
        <TextInput style={style.input} />
        <MaterialIcons name="email" size={20} color={themas.color.gray} />
      </View>
    </Fragment>
  );
});
