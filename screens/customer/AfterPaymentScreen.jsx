import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, ScrollView } from "react-native";
import JoyText from '../../components/general/JoyText'

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
                    <JoyText style={customerStyles.top_bar_title}>Booking Status</JoyText>
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
                    <JoyText style={styles.text_1}>Booking successfully</JoyText>
                    <JoyText style={styles.text_2}>Congratulations on your successful booking at</JoyText>
                    <JoyText style={styles.hotel_name}>Haley House</JoyText>
                </View>
            </ScrollView>

            <View style={styles.fixed_bar_container}>
                <TouchableOpacity
                    style={styles.check_button}
                    onPress={() => { navigation.navigate('ReservationPage') }}>
                    <JoyText style={styles.check_button_text}>Check Reservation</JoyText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.home_button}
                    onPress={() => { navigation.navigate('MainPage') }}>
                    <JoyText style={styles.home_button_text}>Back to Home Page</JoyText>
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
