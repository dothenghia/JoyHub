import { Card, Text } from "@rneui/themed";
import { View, Image } from "react-native";
import { COLORS, TEXTS } from "../../constants/theme";
import { StyleSheet } from "react-native";
const hotelImage = require("../../assets/admin/hotel.jpg");

export const AvatarCard = ({ Title, ImageUri, Description }) => {
    return (
        <View style={styles.container}>
            {/* Avatar part */}
            <View style={styles.imageContainer}>
                <Image source={hotelImage} style={styles.avatarImage} />
            </View>
            {/* Information part */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>{Title}</Text>
                <Text style={styles.description}>{Description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        borderWidth: 1,
        borderColor: COLORS.input_border,
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        // justifyContent: "space-between",
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
        fontWeight: 700,
        color: COLORS.text,
        // margin: "auto"
    },
    description: {
        fontSize: TEXTS.sm,
        color: COLORS.text,
        // width: "50%",
        lineHeight: 20,
    },
});
