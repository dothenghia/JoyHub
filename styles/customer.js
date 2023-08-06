import { StyleSheet, StatusBar } from "react-native";

import { COLORS, TEXTS } from '../constants/theme';

const customerStyles = StyleSheet.create({
    page_container: {
        flex: 1,
        backgroundColor: COLORS.background_color,
        marginTop: StatusBar.currentHeight || 0,
    },
    section_container: {
        paddingHorizontal: 32,
    },

    // Page Heading text styles
    heading_1 : {
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',

        marginTop: 10,
    },
    heading_2 : {
        color: COLORS.heading_text,
        fontSize: TEXTS.lg,
        fontWeight: '600',

        marginTop: 10,
    },
    page_name : {
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
    },

    subheading_1: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '600',

        marginTop: 8,
    },
    subheading_2: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '500',

        marginTop: 8,
    },
    heading_primary: {
        color: COLORS.primary,
        fontSize: TEXTS.lg,
        fontWeight: '600',

        marginTop: 8,
    },

    text_1: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.sm,
        fontWeight: '500',

        marginTop: 6,
    },

    // Button
    // 1/ Button rounded corners with ORANGE color, WHITE text inside
    button_1 :{
        backgroundColor: COLORS.primary,
        height: 52,
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    button_text_1: {
        color: '#fff',
        fontWeight: '800',
        fontSize: TEXTS.lg
    },

    // Divider styles
    divider : {
        marginTop: 20,
        width: '100%',
        height: 3,
        backgroundColor: '#DEDEDE',
    },
    divider_reservation : {
        width: '100%',
        height: 6,
        backgroundColor: '#DEDEDE',
    },
});

export default customerStyles
