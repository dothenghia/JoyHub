import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

export default function PaymentScreen({ navigation, route }) {
    console.log('[Customer] PaymentScreen')

    return (
        <View style={customerStyles.page_container}>

            {/* Payment Screen Scroll View */}
            <ScrollView style={{ flex: 1, marginBottom: 80 }}>
                {/* Top Bar */}
                <View style={customerStyles.top_bar}>
                    <TouchableOpacity
                        style={customerStyles.top_bar_button}
                        onPress={
                            () => { navigation.goBack() }
                        }
                    >
                        <FontAwesome5Icon name={"arrow-left"} size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                    <Text style={customerStyles.top_bar_title}>Confirm & Payment</Text>
                </View>



                {/* Thumbnail Slider */}
                <View style={customerStyles.section_container_no_py}>
                    <ImageBackground
                        source={require('../../assets/customer/demo.jpg')}
                        resizeMode="cover"
                        style={styles.thumbnail_slider}
                    >
                    </ImageBackground>
                </View>


                {/* Room Information */}
                <View style={customerStyles.section_container}>
                    <Text style={customerStyles.page_title}>Haley House</Text>
                    <Text style={styles.room_name}>Deluxe Room</Text>
                    <Text style={styles.location}>District 7, HCM</Text>
                </View>

                <View style={customerStyles.divider}></View>


                {/* Payment Information */}
                <View style={customerStyles.section_container}>
                    <Text style={customerStyles.section_title}>Payment Information</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.payment_text}>Per night</Text>
                        <Text style={styles.payment_text}>200.000 VND</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.payment_text}>From</Text>
                        <Text style={styles.payment_text}>Thu, 4/6/2023</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.payment_text}>To</Text>
                        <Text style={styles.payment_text}>Sat, 6/6/2023</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.payment_text}>Total night</Text>
                        <Text style={styles.payment_text}>2 night</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.payment_text_primary}>Total</Text>
                        <Text style={styles.payment_text_primary}>400.000 VND</Text>
                    </View>
                </View>

            </ScrollView>




            {/* Fixed Booking Bar */}
            <View style={fixedBarStyle.bar_container}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 28 }}>
                    <TouchableOpacity
                        style={fixedBarStyle.book_button}
                        onPress={() => { navigation.navigate('AfterPaymentPage') }}>
                        <Text style={fixedBarStyle.book_button_text}>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    thumbnail_slider: {
        marginTop: 12,
        width: '100%',
        height: 210,
        borderRadius: 20,
        overflow: 'hidden',
    },

    room_name: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.lg,
        fontWeight: '500',

        marginTop: 8,
    },
    location: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '500',

        marginTop: 8,
    },
    payment_text: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '500',

        marginTop: 8,
    },
    payment_text_primary: {
        color: COLORS.primary,
        fontSize: TEXTS.xl,
        fontWeight: '600',

        marginTop: 8,
    },

});

const fixedBarStyle = StyleSheet.create({
    bar_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 80,
        elevation: 20,
    },
    book_button: {
        backgroundColor: COLORS.primary,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
    },
    book_button_text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: TEXTS.lg
    },
});