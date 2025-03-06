import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

type Props = {
  caption: string;
  color: string;
  selected?: boolean;
};

export function Flag({ ...rest }: Props) {
  return (
    <TouchableOpacity style={[style.container, {backgroundColor: rest?.color}, rest?.selected && {borderWidth: 2}]}>
      <Text style={{color: '#FFF'}}>{rest.caption}</Text>
    </TouchableOpacity>
  );
}
