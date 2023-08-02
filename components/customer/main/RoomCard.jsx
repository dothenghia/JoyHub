import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function RoomCard({ props , parentSlug, navigation }) {
    // console.log(props)
    return (
        <TouchableOpacity
            style={styles.card_container}
            onPress={
                () => {navigation.navigate('RoomPage', {slug : props.slug, parentSlug: parentSlug})}
            }
        >
            <ImageBackground
                source={require('../../../assets/customer/demo.jpg')}
                resizeMode="cover"
                style={styles.bg_image}
            ></ImageBackground>

            <View style={styles.text_container}>
                <Text style={styles.hotel_name}>{props.name}</Text>
                <Text>{props.price}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        height: 310,
        alignSelf: 'center',
        marginTop: 24,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 20,
    },

    bg_image: {
        width: '100%',
        height: 210,
        justifyContent: 'center',
    },

    text_container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 10
    },
    hotel_name: {
        color: COLORS.heading_text,
        fontSize: TEXTS.lg,
        fontWeight: '600',

        marginTop: 8,
    }
});
