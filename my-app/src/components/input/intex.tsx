import React, { forwardRef, Fragment, LegacyRef } from "react";

import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import { style } from "./style";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";

type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  IconLeftName?: string;
  IconRightName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};

export const Input = forwardRef(
  (Props: Props, ref: LegacyRef<TextInput> | null) => {
    const {
      IconLeft,
      IconRight,
      IconLeftName,
      IconRightName,
      title,
      onIconLeftPress,
      onIconRightPress,
      ...rest
    } = Props;

    return (
      <Fragment>
        <Text style={style.titleInput}>{title}</Text>
        <View style={style.boxInput}>
          <TouchableOpacity>
            <IconLeft name={IconLeftName as any} size={20} color={themas.color.gray} style={style.Icon}
          </TouchableOpacity>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={20} color={themas.color.gray} />
        </View>
      </Fragment>
    );
  }
);
