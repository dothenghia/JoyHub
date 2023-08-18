import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
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

export default function ReservationScreen({ navigation }) {
    const { role } = useContext(globalContext)
    console.log('[Customer] ReservationScreen')

    // ------ Data State
    const [reservationList, setReservationList] = useState([])

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchReservationList = async () => {
            let data = await CController('GETRESERVATIONLIST')
            setReservationList(data)
        }

        fetchReservationList()
    }, [])


    return (
        <View style={customerStyles.page_container}>
            <View style={customerStyles.fixed_top_bar}>
                <JoyText style={{ ...customerStyles.top_bar_title, top: 12 }}>Reservation</JoyText>
            </View>

            {
                role === 'guest' && (
                    <View style={{ flex: 1, marginTop: 60 - 6 , alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                        <JoyText style={{fontSize: TEXTS.xl, color: COLORS.heading_text }}>Please </JoyText>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('LoginPage')}}
                        >
                            <JoyText style={{fontSize: TEXTS.xl, color: COLORS.primary, fontWeight: '600' }}>Log in</JoyText>
                        </TouchableOpacity>
                        <JoyText style={{fontSize: TEXTS.xl, color: COLORS.heading_text }}> to see Reservation</JoyText>
                    </View>
                )
            }

            {
                role === 'customer' && (
                    <ScrollView style={{ flex: 1, marginTop: 60 - 6 }}>
                        {
                            reservationList.map((reservation) => (
                                <View key={reservation.id}>
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


        </View>
    );
}