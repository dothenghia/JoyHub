import { StyleSheet, StatusBar } from "react-native";

import { COLORS, TEXTS } from '../constants/theme';

const customerStyles = StyleSheet.create({
    page_container: {
        flex: 1,
        backgroundColor: COLORS.background_color,
        marginTop: StatusBar.currentHeight || 0,
    },
    page_title_left : { // Hotel Name, Room Name
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
    },
    page_title_center : { // Hotel Name, Room Name
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },



    section_container: {
        paddingHorizontal: 32,
        paddingBottom: 14,
        paddingTop: 10,
    },
    section_title: {
        color: COLORS.heading_text,
        fontSize: TEXTS.lg,
        fontWeight: '600',
    },


    top_button: {
        height: 40,
        width: 40,
        padding: 10,
        backgroundColor: '#fff' ,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    

    divider: {
        width: '100%',
        height: 6,
        backgroundColor: '#DEDEDE',
    },
});


export default customerStyles;