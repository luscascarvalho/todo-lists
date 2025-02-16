import React, { useState } from "react";

import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        Alert.alert("Atenção", "Informe os campos obrigatórios!");
        return setLoading(false); 
      }

      setTimeout(() => {
        if (email == "usuario@gmail.com" && password == "123456") {
          Alert.alert("Logado com sucesso!");
        } else {
          Alert.alert("Usuário não encontrado!");
        }

        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Seja bem vindo!</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.titleInput}>E-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <MaterialIcons name="email" size={20} color={themas.color.gray} />
        </View>
        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <MaterialIcons
            name="remove-red-eye"
            size={20}
            color={themas.color.gray}
          />
        </View>
      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={() => getLogin()}>
          {loading ? (
            <ActivityIndicator color={"#FFFFFF"} size={"small"} />
          ) : (
            <Text style={style.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={style.textBottom}>
        Não tem conta?{" "}
        <Text style={{ color: themas.color.primary }}>Crie agora!</Text>
      </Text>
    </View>
  );
}
