import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Controller
import CController from "../../controllers/customerController";

// Import Component
import NotificationCard from "../../components/customer/notification/NotificationCard";

export default function NotificationScreen({ navigation }) {
    console.log('[Customer] NotificationScreen')

    // ------ Data State
    const [notificationList, setNotificationList] = useState([])

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchNotificationList = async () => {
            let data = await CController('GETNOTIFICATIONLIST')
            setNotificationList(data)
        }

        fetchNotificationList()
    }, [])


    return (
        <ScrollView style={customerStyles.page_container}>
            <JoyText style={customerStyles.page_name}>Notification</JoyText>

            <View>
                {
                    notificationList.map((notification) => (
                        <View key={notification.id} style={styles.card_container}>
                            <NotificationCard
                                props={notification}
                                navigation={navigation}
                            />
                        </View>
                    ))
                }
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card_container: {
        marginTop: 12,
        paddingHorizontal: 20,
    },
});
