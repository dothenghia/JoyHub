import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

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
        <ScrollView style={customerStyles.page_container}>
            <Text style={customerStyles.page_name}>Reservation</Text>

            <View>
                {
                    reservationList.map((reservation) => (
                        <View key={reservation.id}>
                            <View style={customerStyles.divider_reservation} />
                            <ReservationCard
                                props={reservation}
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

});
