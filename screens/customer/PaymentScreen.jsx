import { useState, useEffect, useContext } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, ScrollView, Modal } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import JoyText from '../../components/general/JoyText'
import formatDate from "../../models/customer/formatDate";
import calculateDay from "../../models/customer/calculateDay";

// Import Controller
import CController from "../../controllers/customerController";
// Import Context
import { globalContext } from "../../contexts/GlobalContext";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Loading Modal
import LoadingModal from '../../components/general/LoadingModal'

export default function PaymentScreen({ navigation, route }) {
    const { dateRange } = useContext(globalContext)
    console.log('[Customer] PaymentScreen')

    // ------ Data State
    const [paymentInfo, setPaymentInfo] = useState(null)
    const [confirmModal, setConfirmModal] = useState(false)
    const [loading, setLoading] = useState(false)

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchPaymentInformation = async () => {
            setLoading(true);
            let data = await CController('GETPAYMENTINFORMATION', route.params, dateRange)
            setPaymentInfo(data)
            setLoading(false);
        }

        fetchPaymentInformation()
    }, [route.params])

    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }

    const topupHandler = () => {
        navigation.navigate('UserPage')
    }

    const showConfirmModalHandler = () => {
        setConfirmModal(true)
    }

    const closeConfirmModalHandler = () => {
        setConfirmModal(false)
    }

    const confirmBookingHandler = () => {
        const sendPayment = async () => {
            setLoading(true);
            let data = await CController('SENDPAYMENT', paymentInfo, dateRange)
            setConfirmModal(false)
            setLoading(false);
            navigation.navigate('AfterPaymentPage', { hotel_name: paymentInfo.hotel_name })
        }

        sendPayment()
    }

    return (
        <View style={customerStyles.page_container}>
            <View style={{ flex: 1 }}>

                {/* Payment Screen Scroll View */}
                <ScrollView style={{ flex: 1, marginBottom: 80 }}>

                    {/* ------ LOADING MODAL ------ */}
                    <LoadingModal isLoading={loading} />


                    {/* Top Bar */}
                    <View style={customerStyles.top_bar}>
                        <TouchableOpacity
                            style={customerStyles.top_bar_button}
                            onPress={backHandler}
                        >
                            <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                        </TouchableOpacity>
                        <JoyText style={customerStyles.top_bar_title}>Confirm & Payment</JoyText>
                    </View>



                    {/* Thumbnail Image */}
                    <View style={customerStyles.section_container_no_py}>
                        <ImageBackground
                            source={{
                                uri: (paymentInfo && paymentInfo.thumbnail),
                            }}
                            resizeMode="cover"
                            style={styles.thumbnail_slider}
                        >
                        </ImageBackground>
                    </View>


                    {/* Room Information */}
                    <View style={customerStyles.section_container}>
                        <JoyText style={customerStyles.page_title}>{paymentInfo ? paymentInfo.hotel_name : 'Loading ...'}</JoyText>
                        <JoyText style={styles.room_name}>{paymentInfo && paymentInfo.room_name} ({paymentInfo && paymentInfo.room_type})</JoyText>
                        <JoyText style={styles.location}>{paymentInfo && paymentInfo.address}</JoyText>
                    </View>

                    <View style={customerStyles.divider}></View>


                    {/* Payment Information */}
                    <View style={customerStyles.section_container}>
                        <JoyText style={customerStyles.section_title}>Payment Information</JoyText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>Per night</JoyText>
                            <JoyText style={styles.payment_text}>{paymentInfo && paymentInfo.price} JoyCoin</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>From</JoyText>
                            <JoyText style={styles.payment_text}>{formatDate(dateRange.startDate)}</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>To</JoyText>
                            <JoyText style={styles.payment_text}>{formatDate(dateRange.endDate)}</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>Total night</JoyText>
                            <JoyText style={styles.payment_text}>{calculateDay(dateRange.startDate, dateRange.endDate)} night</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text_primary}>Total</JoyText>
                            <JoyText style={styles.payment_text_primary}>{paymentInfo && Number(paymentInfo.price * calculateDay(dateRange.startDate, dateRange.endDate))} JoyCoin</JoyText>
                        </View>
                    </View>

                    <View style={customerStyles.divider}></View>

                    {/* User Information */}
                    <View style={customerStyles.section_container}>
                        <JoyText style={customerStyles.section_title}>User Information</JoyText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>Name</JoyText>
                            <JoyText style={styles.payment_text}>{paymentInfo && paymentInfo.full_name}</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.payment_text}>Phone</JoyText>
                            <JoyText style={styles.payment_text}>{paymentInfo && paymentInfo.phone}</JoyText>
                        </View>
                    </View>

                    <View style={customerStyles.divider}></View>

                    {/* JoyCoin checking */}
                    <View style={customerStyles.section_container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <JoyText style={customerStyles.section_title}>JoyCoin</JoyText>
                            <JoyText style={styles.joycoin}>{paymentInfo && paymentInfo.joycoin}</JoyText>
                        </View>
                        {
                            paymentInfo && (Number(paymentInfo.price * calculateDay(dateRange.startDate, dateRange.endDate)) > paymentInfo.joycoin)
                            && (
                                <View>
                                    <JoyText style={styles.warning}>You don't have enough JoyCoin to make payment !</JoyText>
                                    <TouchableOpacity
                                        style={styles.topup_button}
                                        onPress={topupHandler}
                                    >
                                        <JoyText style={styles.topup_text}>Go to Top up JoyCoin</JoyText>
                                    </TouchableOpacity>
                                </View>
                            )}
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
                            style={(paymentInfo && (Number(paymentInfo.price * calculateDay(dateRange.startDate, dateRange.endDate)) > paymentInfo.joycoin)) ? fixedBarStyle.disable_book_button : fixedBarStyle.book_button}
                            disabled={paymentInfo && (Number(paymentInfo.price * calculateDay(dateRange.startDate, dateRange.endDate)) > paymentInfo.joycoin)}
                            onPress={showConfirmModalHandler}>
                            <JoyText style={fixedBarStyle.book_button_text}>Book</JoyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            {/* Confirm Modal */}
            <Modal
                animationType="none"
                transparent={true}
                visible={confirmModal}
            >
                <View style={styles.modal_page}>
                    <View style={styles.modal_container}>
                        <TouchableOpacity
                            onPress={closeConfirmModalHandler}
                            style={{ width: 24, marginBottom: 6, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 4 }}
                        >
                            <AntDesign name={"close"} size={22} color={COLORS.primary} />

                        </TouchableOpacity>
                        <JoyText style={{ fontSize: TEXTS.lg, fontWeight: '600', color: COLORS.heading_text, marginTop: 8, marginBottom: 16 }}>Confirm this Booking Reservation ?</JoyText>
                        <TouchableOpacity
                            style={fixedBarStyle.book_button}
                            onPress={confirmBookingHandler}>
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
        fontWeight: '600',
    },
    warning: {
        color: COLORS.warning,
        fontSize: TEXTS.sm,
        textAlign: 'center',
        marginTop: 8,
    },
    topup_button: {
        marginTop: 12,
        backgroundColor: COLORS.primary,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
    },
    topup_text: {
        color: COLORS.white, fontSize: TEXTS.lg, fontWeight: '600', textAlign: 'center'
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
    disable_book_button: {
        backgroundColor: COLORS.disable,
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