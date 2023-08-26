import { StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import JoyText from "../../general/JoyText";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function HotelCard({ props, navigation }) {
    // console.log(props)

    return (
        <TouchableOpacity
            style={styles.card_container}
            onPress={
                () => { navigation.navigate('HotelPage' , { slug: props._id }) }
            }
        >
            <ImageBackground
                source={{
                    uri: (props.image ? props.image : 'https://i.imgur.com/TMfTk0F.jpg'),
                }}
                resizeMode="cover"
                style={styles.bg_image}
            ></ImageBackground>

            <View style={styles.text_container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <JoyText style={styles.hotel_name}>{props.hotel_name}</JoyText>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <FontAwesome5Icon name={"star"} solid size={18} color='#FFCA18' />

                        <JoyText style={styles.hotel_star}>{props.star.toFixed(1)}</JoyText>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 2 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%'}}>
                        <FontAwesome5Icon name={"map-marker-alt"} solid size={18} color={COLORS.subheading_text} />
                        <JoyText style={styles.hotel_location} numberOfLines={1} ellipsizeMode='tail'>{props.address}</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <JoyText style={styles.hotel_price}>{props.smallest_price} JC</JoyText>
                        <JoyText>/night</JoyText>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
        marginTop: 24,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 10,
    },

    bg_image: {
        width: '100%',
        height: 210,
    },
    text_container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    hotel_name: {
        fontSize: TEXTS["3xl"],
        fontWeight: 'bold',
        color: COLORS.heading_text,
    },
    hotel_star: {
        marginLeft: 4,
        fontSize: TEXTS.md,
        color: COLORS.subheading_text,
    },
    hotel_location: {
        marginLeft: 4,
        fontSize: TEXTS.md,
        color: COLORS.subheading_text,
    },
    hotel_price: {
        fontSize: TEXTS.xxl,
        fontWeight: 'bold',
        color: COLORS.primary
    },
});
