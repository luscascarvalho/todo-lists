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
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input/intex";
import { Button } from "../../components/button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
  
      if (!email || !password) {
        Alert.alert("Atenção", "Informe os campos obrigatórios!");
        setLoading(false); 
        return; 
      }
  
      setTimeout(() => {
        if (email === "usuario@gmail.com" && password === "123456") {
          Alert.alert("Logado com sucesso!");
          navigation.navigate("BottomRoutes");
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
        <Input
          title="E-mail"
          IconRightName="email"
          IconRight={MaterialIcons}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          title="Senha"
          IconRightName={showPassword ? "eye-closed" : "eye"}
          IconRight={Octicons}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <View style={style.boxBottom}>
        <Button text="ENTRAR" loading={loading} onPress={() => getLogin()} />
      </View>
      <Text style={style.textBottom}>
        Não tem conta?{" "}
        <Text style={{ color: themas.color.primary }}>Crie agora!</Text>
      </Text>
    </View>
  );
}
