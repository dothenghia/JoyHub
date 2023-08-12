// Import Hook & Component
import { useState, useRef, useCallback, useEffect, useContext } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, ScrollView, Dimensions, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import JoyText from '../../components/general/JoyText'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { DatePickerModal } from 'react-native-paper-dates';
import formatDate from "../../models/customer/formatDate";

import FacilityCard from "../../components/customer/main/FacilityCard";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Controller
import CController from "../../controllers/customerController";

// Import Context
import { globalContext } from "../../contexts/GlobalContext";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.88);

const renderItem = ({ item }) => {
    return (
        <ImageBackground
            source={{
                uri: item.url,
            }}
            resizeMode="cover"
            style={styles.slider_image}
        >
        </ImageBackground>
    );
};

export default function RoomScreen({ navigation, route }) {
    const { role, dateRange, setDateRange } = useContext(globalContext)
    console.log('[Customer] RoomScreen')

    // ------ Data State
    const [roomInfo, setRoomInfo] = useState(null)
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [currentThumbnail, setCurrentThumnail] = useState(0);
    const carouselRef = useRef(null);

    // Date Picker Handlers
    const onDismiss = useCallback(() => {
        setOpenDatePicker(false);
    }, [setOpenDatePicker]);

    const onConfirm = useCallback(({ startDate, endDate }) => {
        setOpenDatePicker(false);
        setDateRange({ startDate, endDate });
    }, [setOpenDatePicker, setDateRange]);


    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchRoomInformation = async () => {
            let data = await CController('GETROOMINFORMATION')
            setRoomInfo(data)
        }

        fetchRoomInformation()
    }, [])

    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }

    const pickDateHandler = () => {
        setOpenDatePicker(true)
    }

    const bookHandler = () => {
        navigation.navigate('PaymentPage')
    }


    return (
        <View style={customerStyles.page_container}>

            {/* Room Screen Scroll View */}
            <ScrollView style={{ flex: 1, marginBottom: 140 }}>
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
                        data={roomInfo ? roomInfo.thumbnails : []}
                        renderItem={renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        onSnapToItem={currentThumbnail => setCurrentThumnail(currentThumbnail)}
                    />
                    <Pagination
                        dotsLength={roomInfo ? roomInfo.thumbnails.length : 0}
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
                </View>



                {/* Room Information */}
                <View style={customerStyles.section_container}>
                    {/* Room NAME */}
                    <JoyText style={customerStyles.page_title}>{roomInfo ? roomInfo.name : 'Loading ...'}</JoyText>

                    {/* Room PROPERTY */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                        <Ionicons name={"expand"} size={24} color={COLORS.subheading_text} />
                        <JoyText style={styles.amenity}> {roomInfo && roomInfo.area} m2 </JoyText>
                        <FontAwesome name={"circle"} size={6} style={{ alignSelf: 'center', marginHorizontal: 6 }} color={COLORS.subheading_text} />
                        <Ionicons name={"person"} size={24} color={COLORS.subheading_text} />
                        <JoyText style={styles.amenity}> {roomInfo && roomInfo.capacity} People </JoyText>
                        <FontAwesome name={"circle"} size={6} style={{ alignSelf: 'center', marginHorizontal: 6 }} color={COLORS.subheading_text} />
                        <Ionicons name={"bed-outline"} size={30} style={{ paddingTop: 4 }} color={COLORS.subheading_text} />
                        <JoyText style={styles.amenity}> {roomInfo && roomInfo.bed} Bed</JoyText>
                    </View>


                    {/* Room AMENITY */}
                    <FlatList style={{ height: 120, marginTop: 8 }}
                        horizontal data={roomInfo && roomInfo.facilities}

                        renderItem={({ item }) => (
                            <FacilityCard
                                name={item}
                            />
                        )}
                    >
                    </FlatList>

                    {/* Room DESCRIPTION */}

                    <JoyText style={customerStyles.section_title}>Description</JoyText>
                    <JoyText style={styles.description} numberOfLines={3}>{roomInfo && roomInfo.description}</JoyText>
                </View>

                <View style={customerStyles.divider}></View>


                {/* Payment Information */}
                <View style={customerStyles.section_container}>
                    <JoyText style={customerStyles.section_title}>Payment Information</JoyText>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.text}>Per night</JoyText>
                        <JoyText style={styles.text}>{roomInfo && roomInfo.price}</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.text}>From</JoyText>
                        <JoyText style={styles.text}>Thu, 4/6/2023</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.text}>To</JoyText>
                        <JoyText style={styles.text}>Sat, 6/6/2023</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.text}>Total night</JoyText>
                        <JoyText style={styles.text}>2 night</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.primary_text}>Total</JoyText>
                        <JoyText style={styles.primary_text}>400.000 VND</JoyText>
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
                {/* Choose Date */}
                <TouchableOpacity
                    style={fixedBarStyle.bar_calendar}
                    onPress={pickDateHandler}
                >
                    <FontAwesome5Icon name={"calendar-alt"} size={28} color={COLORS.primary} />
                    <JoyText style={fixedBarStyle.calendar_text}>{formatDate(dateRange.startDate)} - {formatDate(dateRange.endDate)}</JoyText>
                </TouchableOpacity>


                {/* Price - Book button */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <JoyText style={fixedBarStyle.bar_price}>400.000 VND</JoyText>
                    <TouchableOpacity
                        style={fixedBarStyle.book_button}
                        onPress={bookHandler}>
                        <JoyText style={fixedBarStyle.book_button_text}>Book</JoyText>
                    </TouchableOpacity>
                </View>
            </View>
            <DatePickerModal
                locale="en"
                mode="range"
                visible={openDatePicker}
                onDismiss={onDismiss}
                startDate={dateRange.startDate}
                endDate={dateRange.endDate}
                onConfirm={onConfirm}
            />
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
    book_button_text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: TEXTS.xxl
    },
})