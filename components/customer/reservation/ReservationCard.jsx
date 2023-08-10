import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import JoyText from "../../general/JoyText";

// Import Style & Theme
import { COLORS } from "../../../constants/theme";

export default function ReservationCard({ props , navigation }) {
    console.log(props)
    return (
        <TouchableOpacity
            style={styles.card_container}
        >
            <View style={styles.thumbnail_wrapper}>
                <Image
                    source={require('../../../assets/customer/demo.jpg')}
                    style={styles.thumbnail_image}
                />
            </View>

            <View style={styles.text_container}>
                <JoyText>{props.status}</JoyText>
                <JoyText>{props.hotel_name}</JoyText>
                <JoyText>{props.room_name}</JoyText>
                <JoyText>{props.date}</JoyText>
                <JoyText>{props.price}</JoyText>

            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        height: 190,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    thumbnail_wrapper: {
        width: '30%',
        height: '88%',
        marginLeft: 12,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 8,
    },
    thumbnail_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    text_container: {
        color: 'white',
        flex: 1,
        paddingHorizontal: 8,
    }
});
