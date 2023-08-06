import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

export default function RoomScreen({ navigation, route }) {
    console.log('[Customer] RoomScreen')

    return (
        <View style={ customerStyles.page_container }>

            {/* Room Screen Scroll View */}
            <ScrollView style={{ flex: 1, marginBottom: 140 }}>
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
                    <Text style={customerStyles.top_bar_title}>Detail Room</Text>
                </View>

                {/* Thumbnail Slider */}
                <View style={styles.slider_container}>
                    <ImageBackground
                        source={require('../../assets/customer/demo.jpg')}
                        resizeMode="cover"
                        style={styles.slider_image}
                    >
                    </ImageBackground>
                </View>


                {/* Room Information */}
                <View style={customerStyles.section_container}>
                    <Text style={customerStyles.page_title}>Deluxe room</Text>
                    <Text>Bla bla</Text>
                </View>

                <View style={customerStyles.divider}></View>


                {/* Payment Information */}
                <View style={customerStyles.section_container}>
                    <Text style={customerStyles.section_title}>Payment Information</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Per night</Text>
                        <Text style={styles.text}>200.000 VND</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>From</Text>
                        <Text style={styles.text}>Thu, 4/6/2023</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>To</Text>
                        <Text style={styles.text}>Sat, 6/6/2023</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Total night</Text>
                        <Text style={styles.text}>2 night</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.primary_text}>Total</Text>
                        <Text style={styles.primary_text}>400.000 VND</Text>
                    </View>
                </View>

                <View style={customerStyles.divider}></View>


                {/* Cancellation Policy */}
                <View style={customerStyles.section_container}>
                    <Text style={customerStyles.section_title}>Cancellation Policy</Text>
                    <Text style={styles.text}>Free cancellation 1 hour before check-in</Text>
                </View>

            </ScrollView>


            {/* Fixed Booking Bar */}
            <View style={fixedBarStyle.bar_container}>
                {/* Choose Date */}
                <TouchableOpacity
                    style={fixedBarStyle.bar_calendar}
                >
                    <FontAwesome5Icon name={"calendar-alt"} size={28} color={COLORS.primary} />
                    <Text style={fixedBarStyle.calendar_text}>Thu, 4/6/2023 - Sat, 6/6/2023</Text>
                </TouchableOpacity>


                {/* Price - Book button */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={fixedBarStyle.bar_price}>400.000 VND</Text>
                    <TouchableOpacity
                        style={fixedBarStyle.book_button}
                        onPress={() => { navigation.navigate('PaymentPage') }}>
                        <Text style={fixedBarStyle.book_button_text}>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    slider_container: {
        paddingHorizontal: 24,
    },
    slider_image: {
        marginTop: 12,
        width: '100%',
        height: 210,
        borderRadius: 20,
        overflow: 'hidden',
    },

    text: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '500',

        marginTop: 8,
    },
    primary_text: {
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
        height: 140,
        elevation: 20,
        // justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 12,
    },
    bar_calendar: {
        height: 52,
        width: '100%',
        backgroundColor: COLORS.primary_50,
        borderRadius: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    calendar_text: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: TEXTS.md,
    },
    bar_price: {
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        alignSelf: 'center'
    },
    book_button: {
        backgroundColor: COLORS.primary,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '45%',
    },
    book_button_text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: TEXTS.lg
    },
})