import { StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import JoyText from "../../general/JoyText";

// Import Style & Theme
import { COLORS } from "../../../constants/theme";

export default function HotelCard({ props , navigation }) {
    return (
        <TouchableOpacity
            style={styles.card_container}
            onPress={
                () => {navigation.navigate('HotelPage', {slug : props.slug})}
            }
        >
            <ImageBackground
                source={require('../../../assets/customer/demo.jpg')}
                resizeMode="cover"
                style={styles.bg_image}
            >
                <JoyText style={styles.text}>{props.name}</JoyText>
                <JoyText style={styles.text}>{props.location}</JoyText>
                <JoyText style={styles.text}>{props.star}</JoyText>
                <JoyText style={styles.text}>{props.price}</JoyText>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        alignSelf: 'center',
        height: 186,
        marginTop: 24,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 10,
    },

    bg_image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
