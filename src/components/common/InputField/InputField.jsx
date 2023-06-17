import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { COLORS, TEXTS } from '../../../constants/theme'

export default function InputField({ plhd , setTextValue }) {
    return (
        <TextInput
            style={styles.container}
            placeholder={plhd}
            placeholderTextColor={COLORS.subheading_text}
            onChangeText={(e) => {
                setTextValue(e)
            }}
        />
    );
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: 50,
        marginBottom: 14,
        backgroundColor: COLORS.input_background,

        paddingLeft: 20,
        borderColor: COLORS.input_border,
        borderWidth: 2,
        borderRadius: 50,

        fontSize: TEXTS.md,
        color: COLORS.text
    },
});
