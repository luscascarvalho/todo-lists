import React, { useEffect, useState } from "react";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Modal, Platform, View } from "react-native";
import { style } from "./style";
import { themas } from "../../global/themes";

interface CustomDateTimePickerProps {
  type: "date" | "time";
  onDateChange: (date: Date) => void;
  show: boolean;
  setShow: (show: boolean) => void;
}

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  type,
  onDateChange,
  show,
  setShow,
}) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date, onDateChange]);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(selectedDate);
    }
    setShow(false);
  };

  return (
    <Modal
      transparent={true}
      visible={show}
      onRequestClose={() => setShow(false)}
    >
      <View style={style.modalOverlay}>
        <View
          style={[
            style.container,
            Platform.OS === "android" && {
              backgroundColor: "transparent",
            },
          ]}
        >
          <DateTimePicker
            value={date}
            mode={type}
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={onChange}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomDateTimePicker;
