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
        textAlign: 'center',
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',

        marginTop: 10,
    },
    heading_2 : { 
        textAlign: 'center',
        color: COLORS.heading_text,
        fontSize: TEXTS.xl,
        fontWeight: '600',

        marginTop: 10,
    },

    subheading_1: {
        textAlign: 'center',
        color: COLORS.subheading_text,
        fontSize: TEXTS.xs,
        fontWeight: '500',

        marginTop: 8,
    },

    // Label styles
    input_label: {
        marginBottom: 4,
        color: COLORS.heading_text,
        fontSize: TEXTS.md,
        fontWeight: '500',
    },


});

export default generalStyles