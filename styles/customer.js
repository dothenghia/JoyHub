import { StyleSheet, StatusBar } from "react-native";

import { COLORS, TEXTS } from '../constants/theme';

const customerStyles = StyleSheet.create({
    page_container: {
        flex: 1,
        backgroundColor: COLORS.background_color,
        marginTop: StatusBar.currentHeight || 0,
    },
    page_title : { // Hotel Name, Room Name
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
    },


    top_bar: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    top_bar_title: {
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        position: 'absolute',
        left: 0,
        top: 20,
        right: 0,
        textAlign: 'center',
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


    section_container: {
        paddingHorizontal: 24,
        paddingBottom: 14,
        paddingTop: 10,
    },
    section_title: {
        color: COLORS.heading_text,
        fontSize: TEXTS.lg,
        fontWeight: '600',
    },




    

    divider: {
        width: '100%',
        height: 6,
        backgroundColor: '#DEDEDE',
    },
});


export default customerStyles;