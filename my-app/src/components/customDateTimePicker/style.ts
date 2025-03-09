import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    modalOverlay: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themas.color.transparent
    },

    container: {
        width: '90%',
        padding: 16,
        backgroundColor: themas.color.transparent,
        elevation: 5, 
        alignItems: 'center'
    },

    dateText: {
        marginTop: 20,
        fontSize: 18, 
        textAlign: 'center'
    }
})