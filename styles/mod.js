import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from '../constants/theme';

const modStyles = StyleSheet.create({
    page_container: {
        flex: 1,
        backgroundColor: COLORS.background_color,
        marginTop: StatusBar.currentHeight || 0,
    },

    page_padding:{
        paddingHorizontal: 32,
    },

    top_bar_button: {
        height: 40,
        width: 40,
        padding: 10,
        backgroundColor: '#fff' ,
        borderRadius: 10,
        marginHorizontal: 24,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        borderWidth: 1,
        borderColor: COLORS.top_button_border,
    },

})

export default modStyles