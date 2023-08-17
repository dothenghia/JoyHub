import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Modal, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import JoyText from '../../components/general/JoyText'

// Import Controller
import CController from "../../controllers/customerController";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

export default function DetailReservationScreen({ navigation, route }) {
    console.log('[Customer] DetailReservationScreen')

    // ------ Data State
    const [reservationInfo, setReservationInfo] = useState(null)
    const [reportModal, setReportModal] = useState(false)
    const [reportTitle, setReportTitle] = useState('')
    const [reportContent, setReportContent] = useState('')

    const [ratingModal, setRatingModal] = useState(false)
    const [ratingStar, setRatingStar] = useState(5)
    const [ratingContent, setRatingContent] = useState('')

    const [cancelModal, setCancelModal] = useState(false)

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchReservationInformation = async () => {
            let data = await CController('GETDETAILRESERVATION')
            setReservationInfo(data)
        }

        fetchReservationInformation()
    }, [])

    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }

    const openReportHandler = () => {
        setReportModal(true)
    }
    const closeReportModalHandler = () => {
        setReportModal(false)
    }
    const submitReportHandler = () => {
        console.log(reportTitle)
        console.log(reportContent)
    }


    const openRatingHandler = () => {
        setRatingModal(true)
    }
    const closeRatingModalHandler = () => {
        setRatingModal(false)
    }
    const decreaseStarHandler = () => {
        if (ratingStar >= 1) {
            setRatingStar(ratingStar - 1)
        }
    }
    const increaseStarHandler = () => {
        if (ratingStar <= 4) {
            setRatingStar(ratingStar + 1)
        }
    }
    const submitRatingHandler = () => {
        console.log(ratingStar)
        console.log(ratingContent)
    }


    const openCancelHandler = () => {
        setCancelModal(true)
    }
    const closeCancelModalHandler = () => {
        setCancelModal(false)
    }
    const submitCancelHandler = () => {

    }


    const tagMapping = {
        Waiting: (
            <View style={{ ...styles.status_tag, backgroundColor: COLORS.primary_2 }}>
                <Feather name={"clock"} size={26} color={COLORS.primary} />
                <JoyText style={{ ...styles.status_text, color: COLORS.primary }}>Waiting</JoyText>
            </View>
        ),
        Completed: (
            <View style={{ ...styles.status_tag, backgroundColor: COLORS.success_bg }}>
                <Octicons name={"check-circle"} size={25} color={COLORS.success} />
                <JoyText style={{ ...styles.status_text, color: COLORS.success }}>Completed</JoyText>
            </View>
        ),
        Cancelled: (
            <View style={{ ...styles.status_tag, backgroundColor: COLORS.disable }}>
                <MaterialCommunityIcons name={"cancel"} size={26} color={COLORS.grey} />
                <JoyText style={{ ...styles.status_text, color: COLORS.grey }}>Cancelled</JoyText>
            </View>
        ),
    }

    return (
        <View style={customerStyles.page_container}>

            {/* Detail Reservation Screen Scroll View */}
            <View style={{ flex: 1 }}>
                {/* Top Bar */}
                <View style={{ ...customerStyles.top_bar, justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        style={customerStyles.top_bar_button}
                        onPress={backHandler}
                    >
                        <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                    <JoyText style={customerStyles.top_bar_title}>Detail Reservation</JoyText>

                    {
                        reservationInfo && reservationInfo.status === 'Completed' && (
                            <TouchableOpacity
                                style={customerStyles.top_bar_button}
                                onPress={openReportHandler}
                            >
                                <MaterialIcons name={"report"} size={32} color={COLORS.primary} />
                            </TouchableOpacity>
                        )
                    }
                </View>



                {/* Thumbnail Image */}
                <View style={customerStyles.section_container_no_py}>
                    <ImageBackground
                        source={require('../../assets/customer/demo.jpg')}
                        resizeMode="cover"
                        style={styles.thumbnail_slider}
                    >
                    </ImageBackground>

                    {reservationInfo && tagMapping[reservationInfo.status]}

                </View>


                {/* Room Information */}
                <View style={customerStyles.section_container}>
                    <JoyText style={customerStyles.page_title}>{reservationInfo ? reservationInfo.hotel_name : 'Loading ...'}</JoyText>
                    <JoyText style={styles.room_name}>{reservationInfo && reservationInfo.room_name} ({reservationInfo && reservationInfo.room_type})</JoyText>
                    <JoyText style={styles.location}>{reservationInfo && reservationInfo.location}</JoyText>
                </View>

                <View style={customerStyles.divider}></View>


                {/* Payment Information */}
                <View style={customerStyles.section_container}>
                    <JoyText style={customerStyles.section_title}>Payment Information</JoyText>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.payment_text}>From</JoyText>
                        <JoyText style={styles.payment_text}>{reservationInfo && reservationInfo.start_date}</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.payment_text}>To</JoyText>
                        <JoyText style={styles.payment_text}>{reservationInfo && reservationInfo.end_date}</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.payment_text}>Total night</JoyText>
                        <JoyText style={styles.payment_text}>2 night</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.payment_text_primary}>Total</JoyText>
                        <JoyText style={styles.payment_text_primary}>{reservationInfo && reservationInfo.price}VND</JoyText>
                    </View>
                </View>

                <View style={customerStyles.divider}></View>


                {reservationInfo && reservationInfo.status === 'Completed' &&
                    (<View style={customerStyles.section_container}>
                        <TouchableOpacity
                            style={styles.bottom_button}
                            onPress={openRatingHandler}
                        >
                            <JoyText style={styles.bottom_button_text}>Rating</JoyText>
                        </TouchableOpacity>
                    </View>)
                }

                {reservationInfo && reservationInfo.status === 'Waiting' &&
                    (<View style={customerStyles.section_container}>
                        <TouchableOpacity
                            style={styles.bottom_button}
                            onPress={openCancelHandler}
                        >
                            <JoyText style={styles.bottom_button_text}>Cancel Reservation</JoyText>
                        </TouchableOpacity>
                    </View>)
                }


            </View>

            {/* ======= Report Modal ====== */}
            <Modal
                animationType="none"
                transparent={true}
                visible={reportModal}
            >
                <View style={styles.report_modal}>
                    <View style={styles.report_modal_containter}>
                        <View style={{ ...customerStyles.top_bar, height: 52 }}>
                            <TouchableOpacity
                                style={{ ...customerStyles.top_bar_button, marginTop: 0, marginHorizontal: 0, height: 32, width: 32 }}
                                onPress={closeReportModalHandler}
                            >
                                <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                            </TouchableOpacity>
                            <JoyText style={{ ...customerStyles.top_bar_title, top: 6 }}>Report</JoyText>
                        </View>


                        {/* ====== Input ====== */}
                        <JoyText style={styles.input_label}>Title</JoyText>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Title of Report'
                            allowFontScaling={false}
                            placeholderTextColor={COLORS.subheading_text}
                            onChangeText={(e) => setReportTitle(e)}
                        />

                        <JoyText style={styles.input_label}>Content</JoyText>
                        <TextInput
                            style={{ ...styles.input, height: 200, borderRadius: 20, paddingTop: 12 }}
                            placeholder='Content of Report'
                            placeholderTextColor={COLORS.subheading_text}
                            allowFontScaling={false}
                            multiline={true}
                            numberOfLines={8}
                            textAlignVertical={'top'}
                            onChangeText={(e) => setReportContent(e)}
                        />

                        <TouchableOpacity
                            style={styles.bottom_button}
                            onPress={submitReportHandler}
                        >
                            <JoyText style={styles.bottom_button_text}>Submit</JoyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>




            {/* ======= Rating Modal ====== */}
            <Modal
                animationType="none"
                transparent={true}
                visible={ratingModal}
            >
                <View style={styles.report_modal}>
                    <View style={styles.rating_modal_containter}>
                        <View style={{ ...customerStyles.top_bar, height: 52 }}>
                            <TouchableOpacity
                                style={{ ...customerStyles.top_bar_button, marginTop: 0, marginHorizontal: 0, height: 32, width: 32 }}
                                onPress={closeRatingModalHandler}
                            >
                                <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                            </TouchableOpacity>
                            <JoyText style={{ ...customerStyles.top_bar_title, top: 6 }}>Rating</JoyText>
                        </View>

                        <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
                            <JoyText style={styles.input_label}>Give star :</JoyText>
                            <TouchableOpacity
                                style={{ ...customerStyles.top_bar_button, marginTop: 0, marginHorizontal: 0, marginLeft: 6, height: 32, width: 32 }}
                                onPress={decreaseStarHandler}
                            >
                                <AntDesign name={"minus"} size={18} color={COLORS.primary} />
                            </TouchableOpacity>
                            <JoyText style={styles.input_label}>{ratingStar} </JoyText>

                            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{alignItems: 'flex-start'}} />

                            <TouchableOpacity
                                style={{ ...customerStyles.top_bar_button, marginTop: 0, marginHorizontal: 0, marginLeft: 6, height: 32, width: 32 }}
                                onPress={increaseStarHandler}
                            >
                                <AntDesign name={"plus"} size={18} color={COLORS.primary} />
                            </TouchableOpacity>
                        </View>



                        <JoyText style={styles.input_label}>Content</JoyText>
                        <TextInput
                            style={{ ...styles.input, height: 200, borderRadius: 20, paddingTop: 12 }}
                            placeholder='Content of Report'
                            placeholderTextColor={COLORS.subheading_text}
                            allowFontScaling={false}
                            multiline={true}
                            numberOfLines={8}
                            textAlignVertical={'top'}
                            onChangeText={(e) => setRatingContent(e)}
                        />

                        <TouchableOpacity
                            style={styles.bottom_button}
                            onPress={submitRatingHandler}
                        >
                            <JoyText style={styles.bottom_button_text}>Submit Rating</JoyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>



            {/* ======= Cancel Modal ====== */}
            <Modal
                animationType="none"
                transparent={true}
                visible={cancelModal}
            >
                <View style={styles.report_modal}>
                    <View style={styles.cancel_modal_containter}>
                        <View style={{ ...customerStyles.top_bar, height: 52 }}>
                            <TouchableOpacity
                                style={{ ...customerStyles.top_bar_button, marginTop: 0, marginHorizontal: 0, height: 32, width: 32 }}
                                onPress={closeCancelModalHandler}
                            >
                                <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                            </TouchableOpacity>
                            <JoyText style={{ ...customerStyles.top_bar_title, top: 6 }}>Cancel</JoyText>
                        </View>

                        <JoyText style={{ fontSize: TEXTS.lg, fontWeight: '600', color: COLORS.heading_text, marginTop: 8, marginBottom: 12 }}>Confirm Cancel this Reservation ?</JoyText>

                        <TouchableOpacity
                            style={styles.bottom_button}
                            onPress={submitCancelHandler}
                        >
                            <JoyText style={styles.bottom_button_text}>Confirm</JoyText>
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
        borderRadius: 12,
        overflow: 'hidden',
    },

    status_tag: {
        position: 'absolute',
        top: 24,
        right: 36,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    status_text: {
        fontSize: TEXTS.xl,
        fontWeight: 'bold',
        marginLeft: 5,
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

    bottom_button: {
        marginTop: 12,
        backgroundColor: COLORS.primary,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
    },
    bottom_button_text: {
        color: COLORS.white,
        fontSize: TEXTS.xl,
        fontWeight: '600',
    },



    input: {
        width: '100%',
        height: 52,
        marginBottom: 14,
        backgroundColor: COLORS.input_background,

        paddingHorizontal: 20,
        borderColor: COLORS.input_border,
        borderWidth: 2,
        borderRadius: 50,

        fontSize: TEXTS.md,
        color: COLORS.text
    },
    input_label: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.lg,
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 6,
        marginBottom: 6,
    },


    report_modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    report_modal_containter: {
        width: 360,
        height: 500,
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 16,
    },
    rating_modal_containter: {
        width: 360,
        height: 450,
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 16,
    },
    cancel_modal_containter: {
        width: 360,
        height: 200,
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 16,
    },
});
