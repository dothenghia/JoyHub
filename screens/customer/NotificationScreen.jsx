import { useState, useEffect, useContext, useCallback } from "react";
import { StyleSheet, RefreshControl, View, ScrollView, TouchableOpacity } from "react-native";
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

// Import Loading Modal
import LoadingModal from '../../components/general/LoadingModal'

export default function NotificationScreen({ navigation }) {
    const { role } = useContext(globalContext)
    console.log('[Customer] NotificationScreen')

    // ------ Data State
    const [notificationList, setNotificationList] = useState([])
    const [loading, setLoading] = useState(false)

    // Refresh Control
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        if (role === 'customer') {
            const fetchNotificationList = async () => {
                setRefreshing(true);
                let data = await CController('GETNOTIFICATIONLIST')
                setNotificationList(data)
                setRefreshing(false);
            }

            fetchNotificationList()
        }
    }, []);

    // ------ Fetch Data at first render
    useEffect(() => {
        if (role === 'customer') {
            const fetchNotificationList = async () => {
                setLoading(true);
                let data = await CController('GETNOTIFICATIONLIST')
                setNotificationList(data)
                setLoading(false);
            }

            fetchNotificationList()
        }
    }, [])


    return (
        <ScrollView
            style={customerStyles.page_container}
            refreshControl={ // DÙNG ĐỂ VUỐT XUỐNG RELOAD TRANG
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#FF6400']}
                />
            }
        >
            <View style={customerStyles.fixed_top_bar}>
                <JoyText style={{ ...customerStyles.top_bar_title, top: 12 }}>Notification</JoyText>
            </View>

            {/* ------ LOADING MODAL ------ */}
            <LoadingModal isLoading={loading} />


            {
                role === 'guest' && (
                    <View style={{ flex: 1, marginTop: 400 - 6, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.heading_text }}>Please </JoyText>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('LoginPage') }}
                        >
                            <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.primary, fontWeight: '600' }}>Log in</JoyText>
                        </TouchableOpacity>
                        <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.heading_text }}> to see Notification</JoyText>
                    </View>
                )
            }

            {
                role === 'customer' && notificationList && (
                    <ScrollView style={{ flex: 1, marginTop: 60 }}>
                        {
                            notificationList.map((notification, index) => (
                                <View key={index} style={styles.card_container}>
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


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card_container: {
        marginTop: 12,
        paddingHorizontal: 20,
        marginBottom: 12,
    },
});
