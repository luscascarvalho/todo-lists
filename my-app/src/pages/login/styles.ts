import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffffff'
  },

  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  boxMid: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    paddingHorizontal: 37
  },

  boxBottom: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 80,
    height: 80
  },

  text: {
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 18
  },

  titleInput: {
    marginLeft: 5,
    color: themas.color.gray,
    marginTop: 20
  },

  boxInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: themas.color.lightGray,
    borderColor: themas.color.lightGray
  },

  input: {
    height: '100%',
    width: '90%',
    borderRadius: 40,
  },

  button: {
    width: 200,
    height: 50,
    alignItems: 'center',
  }
});
