import { StyleSheet } from "react-native";

import { COLORS, TEXTS } from '../constants/theme';

const generalStyles = StyleSheet.create({
    page_container: {
        flex: 1,
        backgroundColor: COLORS.background_color,
        marginTop: 33,
        paddingHorizontal: 32,
    },
    
    // Page Heading text styles
    heading_1 : { 
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',

        marginTop: 10,
    },

    subheading_1: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.xs,
        fontWeight: '500',

        marginTop: 8,
    },
    subheading_2: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
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


    // Label & Text Input styles
    input_label: {
        marginBottom: 4,
        color: COLORS.heading_text,
        fontSize: TEXTS.md,
        fontWeight: '500',
    },
    input_field: {
        width: '100%',
        height: 50,
        marginBottom: 14,
        backgroundColor: COLORS.input_background,

        paddingHorizontal: 20,
        borderColor: COLORS.input_border,
        borderWidth: 2,
        borderRadius: 50,

        fontSize: TEXTS.md,
        color: COLORS.text
    },

    // Divider styles
    divider : {
        marginTop: 40,
        width: '100%',
        height: 2,
        backgroundColor: '#DEDEDE',
    },
});

export default generalStyles