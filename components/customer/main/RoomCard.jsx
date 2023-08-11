import { StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import JoyText from "../../general/JoyText";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function RoomCard({ name , navigation }) {
    console.log(name)
    return (
        <TouchableOpacity
            style={styles.card_container}
            // onPress={
            //     () => {navigation.navigate('RoomPage', {slug : name.slug, parentSlug: parentSlug})}
            // }
        >
            <ImageBackground
                source={require('../../../assets/customer/demo.jpg')}
                resizeMode="cover"
                style={styles.bg_image}
            ></ImageBackground>

            <View style={styles.text_container}>
                <JoyText style={styles.hotel_name}>{name.name}</JoyText>
                <JoyText>{name.price}</JoyText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: 320,
        height: 320,
        alignSelf: 'flex-start',
        marginRight: 10,
        marginLeft: 3,
        elevation: 3,
        borderRadius: 16,
        overflow: 'hidden',
    },

    bg_image: {
        width: '100%',
        height: 210,
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
