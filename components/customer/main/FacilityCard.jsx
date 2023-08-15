import { StyleSheet, View, Image } from "react-native";
import JoyText from "../../general/JoyText";
import JoyIcon from "../../general/JoyIcon";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function FacilityCard({ name }) {

    return (
        <View style={styles.card_container} >
            <View style={styles.image_wrapper}>
                <JoyIcon name={name.icon} size={35}/>
            </View>
            <JoyText style={styles.text}>{name.name}</JoyText>
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
