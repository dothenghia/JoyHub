import { StyleSheet, View, Image } from "react-native";
import JoyText from "../../general/JoyText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";

// Import Style & Theme
import { COLORS, TEXTS } from "../../../constants/theme";

export default function NotificationCard({ props, navigation }) {


    const tagMapping = {
        'accepted': (
            <View style={styles.thumbnail_wrapper}>
                <Octicons name={"check-circle"} size={52} color={COLORS.success} />
            </View>
        ),
        'cancelled': (
            <View style={styles.thumbnail_wrapper}>
                <MaterialCommunityIcons name={"cancel"} size={60} color={COLORS.grey} />
            </View>
        ),
        'canceled': (
            <View style={styles.thumbnail_wrapper}>
                <MaterialCommunityIcons name={"cancel"} size={60} color={COLORS.grey} />
            </View>
        ),
        'rejected': (
            <View style={styles.thumbnail_wrapper}>
                <MaterialCommunityIcons name={"cancel"} size={60} color={COLORS.grey} />
            </View>
        ),
    }

    function toTime(date) {
        const currentDate = new Date();
        seconds = Math.abs(currentDate - new Date(date)) / 1000;

        if (seconds < 60)
            return "Just now"
        if (seconds < 3600) {
            let minutes = parseInt(seconds / 60)
            return minutes + ((minutes > 1) ? " minutes" : " minute") + " ago"
        }
        if (seconds < 86400) {
            let hours = parseInt(seconds / 3600)
            return hours + ((hours > 1) ? " hours" : " hour") + " ago"
        }
        if (seconds < (86400 * 2)) {
            return "Yesterday"
        }
        else {
            let days = parseInt(seconds / 86400)
            return days + ((days > 1) ? " days" : " day") + " ago"
        }
    }

    return (
        <View
            style={styles.card_container}
        >
            {tagMapping[props.status]}

            <View style={styles.text_container}>
                <JoyText numberOfLines={1} style={styles.title}>{props.title}</JoyText>
                <JoyText numberOfLines={2} style={styles.content}>{props.content}</JoyText>
                <JoyText style={{ textAlign: 'right', color: COLORS.primary, fontWeight: '600' }}>{toTime(props.updated_at)}</JoyText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 10,
    },

    thumbnail_wrapper: {
        width: 60,
        height: 60,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text_container: {
        height: '100%',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: TEXTS.lg,
        fontWeight: '600',
        color: COLORS.heading_text,
    },
    content: {
        fontSize: TEXTS.md,
        color: COLORS.heading_text,
    },
});
