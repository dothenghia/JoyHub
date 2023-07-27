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
        height: 42,
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

export const AvatarCardStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        borderWidth: 1,
        borderColor: COLORS.input_border,
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
    },
    imageContainer: {
        flex: 1,
    },
    avatarImage: {
        width: 147,
        height: 120,
        resizeMode: "cover",
        borderRadius: 7,

    },
    textContainer: {
        flex: 1,
        flexDirection : 'column',
        alignContent : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        width: "50%",
        marginLeft: 10,
    },
    title: {
        fontSize: TEXTS.lg,
        fontWeight: "700",
        color: COLORS.text
    },
    description: {
        fontSize: TEXTS.sm,
        color: COLORS.text,
        lineHeight: 20,
   },
});