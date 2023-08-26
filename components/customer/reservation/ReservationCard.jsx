import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import JoyText from "../../general/JoyText";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function ReservationCard({ props, navigation }) {

    const tagMapping = {
        'waiting': (
            <View style={styles.tag_wrapper}>
                <JoyText style={{ ...styles.tag_status, backgroundColor: COLORS.primary_50, color: COLORS.primary }}>Waiting</JoyText>
            </View>
        ),
        'staying': (
            <View style={styles.tag_wrapper}>
                <JoyText style={{ ...styles.tag_status, backgroundColor: COLORS.primary_50, color: COLORS.primary }}>Staying</JoyText>
            </View>
        ),
        "completed": (
            <View style={styles.tag_wrapper}>
                <JoyText style={{ ...styles.tag_status, backgroundColor: COLORS.success_bg, color: COLORS.success }}>Completed</JoyText>
            </View>
        ),
        "approved": (
            <View style={styles.tag_wrapper}>
                <JoyText style={{ ...styles.tag_status, backgroundColor: COLORS.success_bg, color: COLORS.success }}>Approved</JoyText>
            </View>
        ),
        'cancelled': (
            <View style={styles.tag_wrapper}>
                <JoyText style={{ ...styles.tag_status, backgroundColor: COLORS.disable, color: COLORS.grey }}>Cancelled</JoyText>
            </View>
        ),
        'canceled': (
            <View style={styles.tag_wrapper}>
                <JoyText style={{ ...styles.tag_status, backgroundColor: COLORS.disable, color: COLORS.grey }}>Cancelled</JoyText>
            </View>
        ),
        'rejected': (
            <View style={styles.tag_wrapper}>
                <JoyText style={{ ...styles.tag_status, backgroundColor: COLORS.disable, color: COLORS.grey }}>Rejected</JoyText>
            </View>
        ),
    }

    function formatDate(inputDate) {
        const dateObject = new Date(inputDate);

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const dayOfWeek = daysOfWeek[dateObject.getDay()];

        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();

        const resultString = `${dayOfWeek},${day}/${month}/${year}`;

        return resultString
    }

    function calculateTotalPrice(start, end, price) {
        const startDate = new Date(start);
        const endDate = new Date(end);

        if (startDate && endDate) {
            return Number(price * Math.floor((endDate - startDate)/ (1000 * 60 * 60 * 24)))
        }
        return 0
    }

    return (
        <TouchableOpacity
            style={styles.card_container}
            onPress={() => { navigation.navigate('DetailReservationPage', {reservationData : props}) }}
        >
            <View style={styles.thumbnail_wrapper}>
                <Image
                    source={{
                        uri: (props.thumbnail === '' ?
                        "https://i.imgur.com/TMfTk0F.jpg" : props.thumbnail
                        ),
                    }}
                    style={styles.thumbnail_image}
                />
            </View>

            <View style={styles.text_container}>
                {tagMapping[props.status]}
                <JoyText style={styles.hotel_name}>{props.hotel_name}</JoyText>
                <JoyText style={styles.room_name}>{props.room_name} ({props.room_type})</JoyText>
                <JoyText style={styles.date}>{props.check_in && formatDate(props.check_in)} - {formatDate(props.check_out)}</JoyText>
                <JoyText style={styles.price}>{calculateTotalPrice(props.check_in, props.check_out, props.room_price)} JoyCoin</JoyText>
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
        width: '25%',
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
        marginTop: -6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        fontSize: TEXTS.lg,
        fontWeight: 'bold',
    },
    hotel_name: {
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        color: COLORS.heading_text,
        marginTop: 4,
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
        fontSize: TEXTS.xxl,
        fontWeight: '900',
        color: COLORS.primary,
        marginTop: 2,
    },
});
