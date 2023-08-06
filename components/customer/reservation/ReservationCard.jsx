import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

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
                <Text>{props.status}</Text>
                <Text>{props.hotel_name}</Text>
                <Text>{props.room_name}</Text>
                <Text>{props.date}</Text>
                <Text>{props.price}</Text>

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
