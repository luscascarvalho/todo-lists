import React from "react";
import { style } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Login from "../login";

export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogout = () => {
    Alert.alert("Logout", "Você saiu da conta.");
    return navigation.reset({ routes: [{ name: "Login" }] });
  };

  return (
    <View>
      <Text style={style.name}>Usuário.</Text>
      <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
        <Ionicons name="exit" style={{ color: "gray" }} size={40} />
      </TouchableOpacity>
    </View>
  );
}
