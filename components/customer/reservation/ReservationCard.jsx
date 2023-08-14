import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import JoyText from "../../general/JoyText";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function ReservationCard({ props , navigation }) {
    console.log(props)

    const tagMappind = {
        Waiting: (
            <View style={styles.tag_wrapper}>
                <JoyText style={{...styles.tag_status, backgroundColor: COLORS.primary_50, color: COLORS.primary}}>Waiting</JoyText>
            </View>
        ),
        Completed: (
            <View style={styles.tag_wrapper}>
                <JoyText style={{...styles.tag_status, backgroundColor: COLORS.success_bg, color: COLORS.success}}>Completed</JoyText>
            </View>
        ),
        Cancelled: (
            <View style={styles.tag_wrapper}>
                <JoyText style={{...styles.tag_status, backgroundColor: COLORS.disable, color: COLORS.grey}}>Cancelled</JoyText>
            </View>
        ),
    }

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
                {tagMappind[props.status]}
                <JoyText style={styles.hotel_name}>{props.hotel_name}</JoyText>
                <JoyText style={styles.room_name}>{props.room_name}</JoyText>
                <JoyText style={styles.date}>{props.date}</JoyText>
                <JoyText style={styles.price}>{props.price} VND</JoyText>

            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        height: 190,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    thumbnail_wrapper: {
        width: '30%',
        height: '88%',
        marginLeft: 12,
        borderRadius: 8,
        overflow: 'hidden',
    },
    thumbnail_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    text_container: {
        color: 'white',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 6,
    },
    tag_wrapper: {
        flexDirection: 'row',
    },
    tag_status: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        fontSize: TEXTS.lg,
        fontWeight: 'bold',
    },
    hotel_name: {
        fontSize: TEXTS.xl,
        fontWeight: '600',
        color: COLORS.heading_text,
        marginTop: 2,
    },
    room_name: {
        fontSize: TEXTS.lg,
        color: COLORS.subheading_text,
        marginTop: 2,
    },
    date: {
        fontSize: TEXTS.lg,
        color: COLORS.subheading_text,
        marginTop: 2,
    },
    price: {
        fontSize: TEXTS.xl,
        fontWeight: '900',
        color: COLORS.primary,
        marginTop: 2,
    },
});
