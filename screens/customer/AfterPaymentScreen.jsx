import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

export default function AfterPaymentScreen({ navigation, route, parentSlug }) {
    console.log('[Customer] AfterPaymentScreen')

    return (
        <View style={customerStyles.page_container}>
            <ScrollView style={{flex: 1}}>
                {/* Top Bar */}
                <View style={customerStyles.top_bar}>
                    <Text style={customerStyles.top_bar_title}>Booking Status</Text>
                </View>



                {/* Illustration */}
                <View style={styles.illustration_wrapper}>
                    <Image
                        source={require('../../assets/customer/booking_successfully.png')}
                        style={styles.illustration_image}
                    />
                </View>

                {/* Illustration */}
                <View style={styles.icon_wrapper}>
                    <Image
                        source={require('../../assets/customer/notification_tick.png')}
                        style={styles.icon_image}
                    />
                </View>

                {/* Booking Status */}
                <View style={customerStyles.section_container}>
                    <Text style={styles.text_1}>Booking successfully</Text>
                    <Text style={styles.text_2}>Congratulations on your successful booking at</Text>
                    <Text style={styles.hotel_name}>Haley House</Text>
                </View>
            </ScrollView>

            <View style={styles.fixed_bar_container}>
                <TouchableOpacity
                    style={styles.check_button}
                    onPress={() => { navigation.navigate('ReservationPage') }}>
                    <Text style={styles.check_button_text}>Check Reservation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.home_button}
                    onPress={() => { navigation.navigate('MainPage') }}>
                    <Text style={styles.home_button_text}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    illustration_wrapper: {
        alignSelf: 'center',
        width: 400,
        height: 400,
    },
    illustration_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    icon_wrapper: {
        marginTop: -30,
        alignSelf: 'center',
        width: 100,
        height: 50,
    },
    icon_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    text_1 : {
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        textAlign: 'center',
    },
    text_2 : {
        color: COLORS.subheading_text,
        fontSize: TEXTS.sm,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 20,
    },
    hotel_name : {
        color: COLORS.heading_text,
        fontSize: TEXTS.lg,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 4,
    },

    check_button: {
        backgroundColor: COLORS.primary,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
    },
    check_button_text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: TEXTS.lg
    },

    home_button: {
        marginTop: 16,
        backgroundColor: '#CCC',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
    },
    home_button_text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: TEXTS.lg
    },

    fixed_bar_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 160,
        elevation: 20,
        paddingHorizontal: 24,
        paddingTop: 12,
    },
});
