import { StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import JoyText from "../../general/JoyText";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function RoomCard({ name, navigation }) {
    // console.log(name)
    return (
        <TouchableOpacity
            style={styles.card_container}
            onPress={
                () => { navigation.navigate('RoomPage') }
            }
        >
            <ImageBackground
                source={require('../../../assets/customer/demo.jpg')}
                resizeMode="cover"
                style={styles.bg_image}
            ></ImageBackground>

            <View style={styles.text_container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <JoyText style={styles.name}>{name.name}</JoyText>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <JoyText style={styles.price}>{name.price}</JoyText>
                        <JoyText> JoyCoin/night</JoyText>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                    <Ionicons name={"expand"} size={20} color={COLORS.subheading_text} />
                    <JoyText style={styles.amenity}> {name.area} m2 </JoyText>
                    <FontAwesome name={"circle"} size={6} style={{ alignSelf: 'center', marginHorizontal: 6 }} color={COLORS.subheading_text} />
                    <Ionicons name={"person"} size={20} color={COLORS.subheading_text} />
                    <JoyText style={styles.amenity}> {name.guest} People </JoyText>
                    <FontAwesome name={"circle"} size={6} style={{ alignSelf: 'center', marginHorizontal: 6 }} color={COLORS.subheading_text} />
                    <Ionicons name={"bed-outline"} size={26} style={{ paddingTop: 4 }} color={COLORS.subheading_text} />
                    <JoyText style={styles.amenity}> {name.bedroom} Bed</JoyText>
                </View>
            </View>

            {name.isBooked === true && (<View style={styles.status_tag}>
                <Feather name={"x-circle"} size={26} color={COLORS.warning} />
                <JoyText style={styles.status_text}>Full</JoyText>
            </View>)}

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: 320,
        height: 286,
        alignSelf: 'flex-start',
        marginRight: 12,
        marginLeft: 3,
        elevation: 3,
        borderRadius: 16,
        overflow: 'hidden',
    },

    bg_image: {
        width: '100%',
        height: 200,
    },

    text_container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 6,
        paddingHorizontal: 10
    },
    name: {
        fontSize: TEXTS["xxl"],
        fontWeight: 'bold',
        color: COLORS.heading_text,
    },
    price: {
        fontSize: TEXTS.xxl,
        fontWeight: 'bold',
        color: COLORS.heading_text
    },
    amenity: {
        marginLeft: 4,
        fontSize: TEXTS.md,
        color: COLORS.subheading_text,
    },

    status_tag: {
        position: 'absolute',
        top: 12,
        right: 12,
        backgroundColor: COLORS.warning_bg,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    status_text: {
        fontSize: TEXTS.xl,
        color: COLORS.warning,
        fontWeight: 'bold',
        marginLeft: 4,
    },
});