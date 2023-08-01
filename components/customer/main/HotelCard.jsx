import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";

// Import Style & Theme
import { COLORS } from "../../../constants/theme";

export default function HotelCard({ props , navigation}) {
    return (
        <TouchableOpacity
            style={styles.card_container}
            // onPress={}
        >
            <ImageBackground
                source={require('../../../assets/customer/demo.jpg')}
                resizeMode="cover"
                style={styles.bg_image}
            >
                <Text style={styles.text}>{props.item.name}</Text>
                <Text style={styles.text}>{props.item.location}</Text>
                <Text style={styles.text}>{props.item.star}</Text>
                <Text style={styles.text}>{props.item.price}</Text>
            </ImageBackground>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        alignSelf: 'center',
        marginHorizontal: -20,
        height: 186,
        marginTop: 24,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 20,

        
    },

    bg_image: {
        flex: 1,
        justifyContent: 'center',
    },
});
