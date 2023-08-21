// Import Hook & Component
import { useState, useRef, useCallback, useEffect, useContext } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, ScrollView, Dimensions, FlatList, Modal } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import JoyText from '../../components/general/JoyText'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import formatDate from "../../models/customer/formatDate";
import calculateDay from "../../models/customer/calculateDay";

import FacilityCard from "../../components/customer/main/FacilityCard";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Controller
import CController from "../../controllers/customerController";

// Import Context
import { globalContext } from "../../contexts/GlobalContext";

// Import Loading Modal
import LoadingModal from '../../components/general/LoadingModal'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.88);

const renderItem = ({ item }) => {
    return (
        <ImageBackground
            source={{
                uri: item.thumbnail,
            }}
            resizeMode="cover"
            style={styles.slider_image}
        >
        </ImageBackground>
    );
};

export default function RoomScreen({ navigation, route }) {
    const { role, dateRange } = useContext(globalContext)
    console.log('[Customer] RoomScreen')

    // ------ Data State
    const [roomInfo, setRoomInfo] = useState(null)
    const [loginModal, setLoginModal] = useState(false)
    const [currentThumbnail, setCurrentThumnail] = useState(0);
    const carouselRef = useRef(null);
    const [loading, setLoading] = useState(false)


    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchRoomInformation = async () => {
            setLoading(true);
            let data = await CController('GETROOMINFORMATION', route.params)
            setRoomInfo(data)
            setLoading(false);
        }

        fetchRoomInformation()
    }, [route.params])

    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }


    const bookHandler = () => {
        if (role === 'guest') {
            setLoginModal(true)
        }
        else if (role === 'customer') {
            navigation.navigate('PaymentPage')
        }
    }

    const closeLoginModalHandler = () => {
        setLoginModal(false)

    }

    const backToLoginHandler = () => {
        setLoginModal(false)
        navigation.navigate('LoginPage')
    }


    return (
        <View style={customerStyles.page_container}>
            <View style={{ flex: 1 }}>

                {/* Room Screen Scroll View */}
                <ScrollView style={{ flex: 1, marginBottom: 70 }}>

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
                        <JoyText style={customerStyles.top_bar_title}>Detail</JoyText>
                    </View>

                    {/* Thumbnail Slider */}
                    <View style={{ marginTop: 12, marginBottom: -32 }}>
                        <Carousel
                            ref={carouselRef}
                            data={(roomInfo && roomInfo.thumbnails) ? roomInfo.thumbnails : []}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            onSnapToItem={currentThumbnail => setCurrentThumnail(currentThumbnail)}
                        />
                        <Pagination
                            dotsLength={(roomInfo && roomInfo.thumbnails) ? roomInfo.thumbnails.length : 0}
                            activeDotIndex={currentThumbnail}
                            carouselRef={carouselRef}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 1,
                                backgroundColor: COLORS.primary,
                            }}
                            inactiveDotStyle={{
                                backgroundColor: COLORS.grey,
                            }}
                            tappableDots={true}
                            inactiveDotOpacity={0.5}
                            inactiveDotScale={1}
                        />
                        {roomInfo && roomInfo.isBooked === true && (<View style={styles.status_tag}>
                            <Feather name={"x-circle"} size={26} color={COLORS.warning} />
                            <JoyText style={styles.status_text}>Full</JoyText>
                        </View>)}
                    </View>



                    {/* Room Information */}
                    <View style={customerStyles.section_container}>
                        {/* Room NAME */}
                        <JoyText style={customerStyles.page_title}>{roomInfo ? roomInfo.name : 'Loading ...'} ({roomInfo && roomInfo.room_type})</JoyText>

                        {/* Room PROPERTY */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                            <Ionicons name={"expand"} size={24} color={COLORS.subheading_text} />
                            <JoyText style={styles.amenity}> {roomInfo && roomInfo.area} m2 </JoyText>
                            <FontAwesome name={"circle"} size={6} style={{ alignSelf: 'center', marginHorizontal: 6 }} color={COLORS.subheading_text} />
                            <Ionicons name={"person"} size={24} color={COLORS.subheading_text} />
                            <JoyText style={styles.amenity}> {roomInfo && roomInfo.guest} People </JoyText>
                            <FontAwesome name={"circle"} size={6} style={{ alignSelf: 'center', marginHorizontal: 6 }} color={COLORS.subheading_text} />
                            <Ionicons name={"bed-outline"} size={30} style={{ paddingTop: 4 }} color={COLORS.subheading_text} />
                            <JoyText style={styles.amenity}> {roomInfo && roomInfo.bedroom} Bed</JoyText>
                        </View>


                        {/* Room AMENITY */}
                        <FlatList style={{ height: 120, marginTop: 8 }}
                            horizontal data={roomInfo && roomInfo.amenities}

                            renderItem={({ item }) => (
                                <FacilityCard
                                    name={item}
                                />
                            )}
                        >
                        </FlatList>

                        {/* Room DESCRIPTION */}

                        <JoyText style={customerStyles.section_title}>Description</JoyText>
                        <JoyText style={styles.description} >{roomInfo && roomInfo.description}</JoyText>
                    </View>

                    <View style={customerStyles.divider}></View>


                    {/* Payment Information */}
                    <View style={customerStyles.section_container}>
                        <JoyText style={customerStyles.section_title}>Payment Information</JoyText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.text}>Per night</JoyText>
                            <JoyText style={styles.text}>{roomInfo && roomInfo.price} JoyCoin</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.text}>From</JoyText>
                            <JoyText style={styles.text}>{formatDate(dateRange.startDate)}</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.text}>To</JoyText>
                            <JoyText style={styles.text}>{formatDate(dateRange.endDate)}</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.text}>Total night</JoyText>
                            <JoyText style={styles.text}>{calculateDay(dateRange.startDate, dateRange.endDate)} night</JoyText>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <JoyText style={styles.primary_text}>Total</JoyText>
                            <JoyText style={styles.primary_text}>{roomInfo && Number(roomInfo.price * calculateDay(dateRange.startDate, dateRange.endDate))} JoyCoin</JoyText>
                        </View>
                    </View>

                    <View style={customerStyles.divider}></View>


                    {/* Cancellation Policy */}
                    <View style={customerStyles.section_container}>
                        <JoyText style={customerStyles.section_title}>Cancellation Policy</JoyText>
                        <JoyText style={styles.text}>Free cancellation 1 hour before check-in</JoyText>
                    </View>

                </ScrollView>


                {/* Fixed Booking Bar */}
                <View style={fixedBarStyle.bar_container}>
                    {/* Price - Book button */}
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <JoyText style={fixedBarStyle.bar_price}>{roomInfo && Number(roomInfo.price * calculateDay(dateRange.startDate, dateRange.endDate))} JoyCoin</JoyText>
                        <TouchableOpacity
                            style={(roomInfo && roomInfo.isBooked === true) ? fixedBarStyle.disable_book_button : fixedBarStyle.book_button}
                            disabled={roomInfo && roomInfo.isBooked === true}
                            onPress={bookHandler}>
                            <JoyText style={fixedBarStyle.book_button_text}>Book</JoyText>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


            {/* REMIND 'GUEST' USER TO LOGIN MODAL*/}
            <Modal
                animationType="none"
                transparent={true}
                visible={loginModal}
            >
                <View style={styles.modal_page}>
                    <View style={styles.modal_container}>
                        <View style={{ paddingHorizontal: 14, marginTop: 14, marginBottom: 8 }}>
                            <TouchableOpacity
                                onPress={closeLoginModalHandler}
                                style={{ width: 24, marginBottom: 6, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 4 }}
                            >
                                {/* <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                                    Close
                                </JoyText> */}
                                <AntDesign name={"close"} size={22} color={COLORS.primary} />

                            </TouchableOpacity>
                            <JoyText style={{ fontSize: TEXTS.lg, fontWeight: '600', color: COLORS.heading_text, marginTop: 8, marginBottom: 16 }}>Please Log in to continue booking</JoyText>

                            <TouchableOpacity
                                style={{ ...fixedBarStyle.book_button, width: '100%' }}
                                onPress={backToLoginHandler}>
                                <JoyText style={fixedBarStyle.book_button_text}>Confirm</JoyText>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    slider_image: {
        marginTop: 12,
        width: '100%',
        height: 210,
        borderRadius: 20,
        overflow: 'hidden',
    },

    status_tag: {
        position: 'absolute',
        top: 24,
        right: 36,
        backgroundColor: '#EEB0AE',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    status_text: {
        fontSize: TEXTS.xl,
        color: COLORS.warning,
        fontWeight: 'bold',
        marginLeft: 4,
    },


    amenity: {
        marginLeft: 4,
        fontSize: TEXTS.lg,
        color: COLORS.subheading_text,
    },
    description: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.sm,
        marginTop: 6,
        textAlign: 'justify',
    },



    text: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.lg,

        marginTop: 8,
    },
    primary_text: {
        color: COLORS.primary,
        fontSize: TEXTS.xxl,
        fontWeight: '600',

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
        height: 70,
        elevation: 20,
        // justifyContent: 'center',
        paddingHorizontal: 20,
        // paddingTop: 12,
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
        fontSize: TEXTS.lg,
    },
    bar_price: {
        color: COLORS.heading_text,
        fontSize: TEXTS["3xl"],
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
    disable_book_button: {
        backgroundColor: COLORS.disable,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '45%',
    },
    book_button_text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: TEXTS.xxl
    },
})