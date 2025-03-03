import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

type Props = {
  caption: string;
  color: string;
};

export function Flag({ ...rest }: Props) {
  return (
    <TouchableOpacity style={[style.container, {backgroundColor: rest?.color}]}>
      <Text style={{color: '#FFF'}}>{rest.caption}</Text>
    </TouchableOpacity>
  );
}
