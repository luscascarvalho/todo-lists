import React, { createContext, useContext, useRef } from "react";
import { Alert, Dimensions, Text } from "react-native";
import { Modalize } from "react-native-modalize";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    Alert.alert("Atenção", "Modal aberto");
  };

  const container = () => {
    return <Text></Text>
  }

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        modalHeight={Dimensions.get("window").height / 1.3}
      >
        {container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);
