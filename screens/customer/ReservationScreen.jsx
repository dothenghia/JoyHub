import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Controller
import CController from "../../controllers/customerController";

// Import Component
import ReservationCard from "../../components/customer/reservation/ReservationCard";

export default function ReservationScreen({ navigation }) {
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
                <JoyText style={customerStyles.top_bar_title}>Reservation</JoyText>
            </View>

            <ScrollView style={{ flex: 1 , marginTop: 70-6}}>
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

        </View>
    );
}

const styles = StyleSheet.create({

});
