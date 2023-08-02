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
})

export default modStyles