import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Controller
import CController from "../../controllers/customerController";

// Import Component
import NotificationCard from "../../components/customer/notification/NotificationCard";

// Import Context
import { globalContext } from "../../contexts/GlobalContext";

export default function NotificationScreen({ navigation }) {
    const { role } = useContext(globalContext)
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
        <View style={customerStyles.page_container}>
            <View style={customerStyles.fixed_top_bar}>
                <JoyText style={{ ...customerStyles.top_bar_title, top: 12 }}>Notification</JoyText>
            </View>


            {
                role === 'guest' && (
                    <View style={{ flex: 1, marginTop: 60 - 6, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.heading_text }}>Please </JoyText>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('LoginPage')}}
                        >
                            <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.primary, fontWeight: '600' }}>Log in</JoyText>
                        </TouchableOpacity>
                        <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.heading_text }}> to see Notification</JoyText>
                    </View>
                )
            }

            {
                role === 'customer' && (
                    <ScrollView style={{ flex: 1, marginTop: 60 }}>
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
                    </ScrollView>
                )
            }


        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        marginTop: 12,
        paddingHorizontal: 20,
    },
});
