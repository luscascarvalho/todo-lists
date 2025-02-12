import React from "react";

import { Image, Text, TextInput, View } from "react-native";

import { style } from "./styles";
import Logo from "../../assets/logo.png";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo}  style={style.logo} resizeMode="contain"/>
        <Text style={style.text}>Seja bem vindo!</Text>
      </View>

      <View style={style.boxMid}>
        <Text>E-mail</Text>
        <TextInput />
        <Text>Senha</Text>
        <TextInput />
      </View>

      <View style={style.boxBottom}>
        <Text>Bottom</Text>
      </View>
    </View>
  );
}
