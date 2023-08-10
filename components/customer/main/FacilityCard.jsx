import { StyleSheet, View, Text, Image } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function FacilityCard({ name }) {
    return (
        <View style={styles.card_container} >
            <View style={styles.image_wrapper}>
                <Image
                    style={styles.image}
                    source={{
                        uri: name.f_icon,
                    }}
                />
            </View>
            <Text style={styles.text}>{name.f_name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: 92,
        height: 100,
        marginRight: 8,
        backgroundColor: '#EEEEEE',
        alignSelf: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
    },
    image_wrapper: {
        width: '100%',
        height: 40,
        marginTop: 14,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    text: {
        marginBottom: 12,
        textAlign: 'center',
        fontSize: TEXTS.sm,
    },
});
