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

    const calculateSizeWidth = () => {
      if (IconLeft && IconRight) {
        return "80%";
      } else if (IconLeft || IconRight) {
        return "90%";
      } else {
        return "100%";
      }
    };

    const calculateSizePaddingLeft = () => {
      if (IconLeft && IconRight) {
        return 0;
      } else if (IconLeft || IconRight) {
        return 10;
      } else {
        return 20;
      }
    };

    return (
      <Fragment>
        {title && <Text style={style.titleInput}>{title}</Text>}
        <View
          style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft() }]}
        >
          {IconLeft && IconLeftName && (
            <TouchableOpacity onPress={onIconLeftPress} style={style.button}>
              <IconLeft
                name={IconLeftName as any}
                size={20}
                color={themas.color.gray}
                style={style.Icon}
              />
            </TouchableOpacity>
          )}
          <TextInput
            style={[style.input, { width: calculateSizeWidth() }]}
            {...rest}
          />

          {IconRight && IconRightName && (
            <TouchableOpacity onPress={onIconRightPress} style={style.button}>
              <IconRight
                name={IconRightName as any}
                size={20}
                color={themas.color.gray}
                style={style.Icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </Fragment>
    );
  }
);
