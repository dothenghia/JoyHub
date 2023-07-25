import { StyleSheet } from "react-native";
import { COLORS, TEXTS } from '../constants/theme';


export const searchStyles = StyleSheet.create({
    // container for search bar
    container : {
        backgroundColor: "transparent",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: '100%',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderWidth: 0,
    },
    // search bar input
    input_container : {
        backgroundColor: COLORS.input_background,
        borderRadius: 10,
        height: 40,
        width: "100%",
        borderColor: COLORS.input_border,
        borderWidth: 1,
        borderBottomWidth: 1,
      },
    // search bar input text
    input_text : {
        fontSize: TEXTS.md,
        color: COLORS.text
    },
});

export default class adminStyle {
    static getSearchStyles() {
        return searchStyles;
    }
}
