import { useState, useEffect, useContext, useCallback } from "react";
import { StyleSheet, RefreshControl, View, ScrollView, TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import customerStyles from '../../styles/customer'
import { COLORS, TEXTS } from '../../constants/theme'

// Import Controller
import CController from "../../controllers/customerController";

// Import Component
import ReservationCard from "../../components/customer/reservation/ReservationCard";

// Import Context
import { globalContext } from "../../contexts/GlobalContext";

// Import Loading Modal
import LoadingModal from '../../components/general/LoadingModal'

export default function ReservationScreen({ navigation }) {
    const { role } = useContext(globalContext)
    console.log('[Customer] ReservationScreen')

    // ------ Data State
    const [reservationList, setReservationList] = useState([])
    const [loading, setLoading] = useState(false)

    // Refresh Control
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        const fetchReservationList = async () => {
            setRefreshing(true);
            let data = await CController('GETRESERVATIONLIST')
            setReservationList(data)
            console.log('Again')
            setRefreshing(false);
        }

        fetchReservationList()
    }, []);

    // ------ Fetch Data at first render
    useEffect(() => {
        if (role === 'customer') {
            const fetchReservationList = async () => {
                setLoading(true);
                let data = await CController('GETRESERVATIONLIST')
                setReservationList(data)
                setLoading(false);
            }

            fetchReservationList()
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
                <JoyText style={{ ...customerStyles.top_bar_title, top: 12 }}>Reservation</JoyText>
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
                        <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.heading_text }}> to see Reservation</JoyText>
                    </View>
                )
            }

            {
                role === 'customer' && reservationList && (
                    <ScrollView style={{ flex: 1, marginTop: 60 - 6 }}>
                        {
                            reservationList.map((reservation, index) => (
                                <View key={index}>
                                    <View style={customerStyles.divider} />
                                    <ReservationCard
                                        props={reservation}
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