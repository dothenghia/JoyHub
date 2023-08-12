import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, ScrollView, Modal } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

export default function PaymentScreen({ navigation, route }) {
    console.log('[Customer] PaymentScreen')

    const [confirmModal, setConfirmModal] = useState(false)


    return (
        <View style={customerStyles.page_container}>
            <View style={{ flex: 1 }}>

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
                            <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                        </TouchableOpacity>
                        <JoyText style={customerStyles.top_bar_title}>Confirm & Payment</JoyText>
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
                        <JoyText style={customerStyles.page_title}>Haley House</JoyText>
                        <JoyText style={styles.room_name}>Deluxe Room</JoyText>
                        <JoyText style={styles.location}>District 7, HCM</JoyText>
                    </View>

                    <View style={customerStyles.divider}></View>


                    {/* Payment Information */}
                    <View style={customerStyles.section_container}>
                        <JoyText style={customerStyles.section_title}>Payment Information</JoyText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>Per night</JoyText>
                            <JoyText style={styles.payment_text}>200.000 VND</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>From</JoyText>
                            <JoyText style={styles.payment_text}>Thu, 4/6/2023</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>To</JoyText>
                            <JoyText style={styles.payment_text}>Sat, 6/6/2023</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>Total night</JoyText>
                            <JoyText style={styles.payment_text}>2 night</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text_primary}>Total</JoyText>
                            <JoyText style={styles.payment_text_primary}>400.000 VND</JoyText>
                        </View>
                    </View>

                    <View style={customerStyles.divider}></View>

                    {/* JoyCoin checking */}
                    <View style={customerStyles.section_container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <JoyText style={customerStyles.section_title}>JoyCoin</JoyText>
                            <JoyText style={styles.joycoin}>200.000</JoyText>
                        </View>
                        <JoyText style={styles.warning}>You don't have enough JoyCoin to make payment</JoyText>
                    </View>

                    <View style={customerStyles.divider}></View>

                    <View style={customerStyles.section_container}>
                        <JoyText style={styles.payment_text}>Please check the reservation information carefully before confirming payment.</JoyText>
                        <JoyText style={styles.payment_text}>Once paid you will not be able to change the booking information.</JoyText>
                    </View>

                </ScrollView>




                {/* Fixed Booking Bar */}
                <View style={fixedBarStyle.bar_container}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 28 }}>
                        <TouchableOpacity
                            style={fixedBarStyle.book_button}
                            onPress={() => { setConfirmModal(true) }}>
                            <JoyText style={fixedBarStyle.book_button_text}>Book</JoyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            {/* See all Review Modal */}
            <Modal
                animationType="none"
                transparent={true}
                visible={confirmModal}
            >
                <View style={styles.modal_page}>
                    <View style={styles.modal_container}>
                        <TouchableOpacity
                            onPress={() => setConfirmModal(false)}
                            style={{ width: 46, marginBottom: 6 }}
                        >
                            <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                                Close
                            </JoyText>
                        </TouchableOpacity>
                        <JoyText style={{fontSize: TEXTS.lg, fontWeight: '600', color: COLORS.heading_text, marginTop: 8, marginBottom: 16}}>Confirm this Booking Reservation ?</JoyText>
                        <TouchableOpacity
                            style={fixedBarStyle.book_button}
                            onPress={() => { setConfirmModal(false) ; navigation.navigate('AfterPaymentPage') }}>
                            <JoyText style={fixedBarStyle.book_button_text}>Confirm</JoyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        fontSize: TEXTS.xxl,

        marginTop: 8,
    },
    location: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,

        marginTop: 8,
    },
    payment_text: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.lg,
        marginTop: 8,
        textAlign: 'justify',
    },
    payment_text_primary: {
        color: COLORS.primary,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        marginTop: 8,
    },


    joycoin: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.lg,
    },
    warning: {
        color: COLORS.warning,
        fontSize: TEXTS.sm,
        textAlign: 'center',
        marginTop: 8,
    },


    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_container: {
        width: 360,
        height: 168,
        paddingHorizontal: 24,
        paddingTop: 14,
        backgroundColor: 'white',
        borderRadius: 16,
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