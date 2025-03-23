import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Alert,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Input } from "../components/input/intex";
import { themas } from "../global/themes";
import { Flag } from "../components/flag";
import CustomDateTimePicker from "../components/customDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContextList: any = createContext({});

const flags = [
  {
    caption: "urgente",
    color: themas.color.red,
  },

  {
    caption: "opcional",
    color: themas.color.blueLight,
  },
];

export const AuthProviderList = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("urgente");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [item, setItem] = useState(0);
  const [useTaskList, setUseTaskList] = useState([]);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef?.current?.close();
  };

  useEffect(() => {
    getTaskList();
  }, []);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSave = async () => {
    if (!title || !description || !selectedFlag) {
      return Alert.alert("Atenção, preencha os campos ai djow");
    }
    try {
      const newItem = {
        item: item !== 0 ? item : Date.now(),
        title,
        description,
        flag: selectedFlag,
        timeLimite: new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          selectedTime.getHours(),
          selectedTime.getMinutes()
        ).toISOString(),
      };

      const storageData = await AsyncStorage.getItem("taskList");
      let taskList = storageData ? JSON.parse(storageData) : [];

      taskList.push(newItem);

      await AsyncStorage.setItem("taskList", JSON.stringify(taskList));

      setUseTaskList(taskList);
      setData();
      onClose();
    } catch (error) {}
  };

  const setData = () => {
    setTitle("");
    setDescription("");
    setSelectedFlag("urgente");
    setItem(0);
    setSelectedDate(new Date());
    setSelectedTime(new Date());
  };

  const renderFlag = () =>
    flags.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setSelectedFlag(item.caption);
        }}
      >
        <Flag
          caption={item.caption}
          color={item.color}
          selected={item.caption == selectedFlag}
        />
      </TouchableOpacity>
    ));

  async function getTaskList() {
    try {
      const storageData = await AsyncStorage.getItem("taskList");
      const taskList = storageData ? JSON.parse(storageData) : [];
      setUseTaskList(taskList);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (itemToDelete: PropCard) => {
    try {
      const storageData = await AsyncStorage.getItem("taskList");
      const taskList: Array<any> = storageData ? JSON.parse(storageData) : [];

      const updateTaskList = taskList.filter(
        (item) => item.item !== itemToDelete.item
      );

      await AsyncStorage.setItem("taskList", JSON.stringify(updateTaskList));

      setUseTaskList(updateTaskList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (itemToEdit: PropCard) => {
    try {
      setTitle(itemToEdit.title);
      setDescription(itemToEdit.description);
      setItem(itemToEdit.item);

      const timeLimit = new Date(itemToEdit.timeLimit);
      setSelectedDate(timeLimit);
      setSelectedTime(timeLimit);

      onOpen();
    } catch (error) {
      console.log(error);
    }
  };

  const container = () => {
    return (
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={style.header}>
          <TouchableOpacity onPress={() => onClose()}>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>

          <Text style={style.title}>Criar tarefa</Text>

          <TouchableOpacity onPress={() => handleSave()}>
            <AntDesign name="check" size={30} />
          </TouchableOpacity>
        </View>
        <View style={style.content}>
          <Input
            title="Titulo:"
            labelStyle={style.label}
            value={title}
            onChangeText={setTitle}
          />
          <Input
            title="Descrição:"
            labelStyle={style.label}
            height={100}
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />

          <View style={{ width: "40%" }}>
            <View style={{ flexDirection: "row", gap: 10, width: "100%" }}>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={{ width: 200 }}
              >
                <Input
                  title="Data limite:"
                  labelStyle={style.label}
                  editable={false}
                  value={selectedDate.toLocaleDateString()}
                  onPress={() => setShowDatePicker(true)}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setShowTimePicker(true)}
                style={{ width: 100 }}
              >
                <Input
                  title="Hora limite:"
                  labelStyle={style.label}
                  editable={false}
                  value={selectedTime.toLocaleTimeString()}
                  onPress={() => setShowTimePicker(true)}
                />
              </TouchableOpacity>
            </View>
            <CustomDateTimePicker
              onDateChange={handleDateChange}
              setShow={setShowDatePicker}
              show={showDatePicker}
              type={"date"}
            />
            <CustomDateTimePicker
              onDateChange={handleTimeChange}
              setShow={setShowTimePicker}
              show={showTimePicker}
              type={"time"}
            />
          </View>

          <View style={style.containerFlag}>
            <Text style={style.label}>Flags: </Text>
            <View style={style.rowFlags}>{renderFlag()}</View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen, useTaskList, handleDelete, handleEdit }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{ height: Dimensions.get("window").height / 1.7 }}
        adjustToContentHeight={true}
      >
        {container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);

export const style = StyleSheet.create({
  container: {
    width: "100%",
  },

  header: {
    width: "100%",
    height: 40,
    paddingHorizontal: 40,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  content: {
    width: "100%",
    paddingHorizontal: 20,
  },

  containerFlag: {
    width: "100%",
  },

  label: {
    fontWeight: "bold",
    color: "FFFFFF",
  },

  rowFlags: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});
