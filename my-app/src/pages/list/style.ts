import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }, 

    header: {
        width: '100%',
        height: Dimensions.get('window').height/6,
        backgroundColor: themas.color.primary,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

    greeting: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 20
    }, 

    boxInput: {
        width: '80%'
    },

    boxList: {
        flex: 1,
        width: '100%',
    },

    card: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFF',
        marginTop: 6,
        borderRadius: 10, 
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: themas.color.lightGray
    },

    rowCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    rowCardLeft: {
        width: '70%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },

    titleCard: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    descriptionCard: {
        color: themas.color.gray
    }
    
})