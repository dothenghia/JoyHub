// Import Hook & Component
import { useState, useEffect, useCallback, useContext } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, ScrollView, FlatList, Modal, ToastAndroid } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import JoyText from '../../components/general/JoyText'
import { DatePickerModal } from 'react-native-paper-dates';
import formatDate from "../../models/customer/formatDate";

import RoomCard from "../../components/customer/main/RoomCard";
import FacilityCard from "../../components/customer/main/FacilityCard";
import ReviewCard from "../../components/customer/main/ReviewCard";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from "../../styles/customer";

// Import Controller
import CController from "../../controllers/customerController";


// Import Context
import { globalContext } from "../../contexts/GlobalContext";


export default function HotelScreen({ navigation, route }) {
    const { role, dateRange, setDateRange } = useContext(globalContext)
    console.log('[Customer] HotelScreen')

    // ------ Data State
    const [isFavorite, setIsFavorite] = useState(false)
    const [hotelInfo, setHotelInfo] = useState(null)
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [seeAllComments, setSeeAllComments] = useState(false)


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
        const fetchHotelInformation = async () => {
            let data = await CController('GETHOTELINFORMATION')
            setHotelInfo(data)
        }

        fetchHotelInformation()
    }, [])

    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }

    const likeHandler = () => {
        if (role === 'guest') {
            ToastAndroid.show('You have not logged in yet', ToastAndroid.SHORT)
        }
        if (role === 'customer') {
            setIsFavorite(!isFavorite)
        }
        if (role === 'moderator' || role === 'admin') {
            ToastAndroid.show('Oops 🫣 wrong role', ToastAndroid.SHORT)
        }
    }

    const seeAllCommentsHandler = () => {
        setSeeAllComments(true)
    }

    const closeCommentsHandler = () => {
        setSeeAllComments(false)
    }

    const pickDateHandler = () => {
        setOpenDatePicker(true)
    }


    return (
        <View style={customerStyles.page_container}>
            <View style={{ flex: 1 }}>
                {/* Hotel Screen Scroll View */}
                <ScrollView style={{ flex: 1, marginBottom: 80 }}>
                    {/* Thumbnail Hotel Image */}
                    <View style={styles.thumbnail_wrapper}>
                        <ImageBackground
                            source={require('../../assets/customer/demo.jpg')}
                            resizeMode="cover"
                            style={styles.thumbnail_image}
                        >

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                {/* Back Button */}
                                <TouchableOpacity
                                    style={customerStyles.top_bar_button}
                                    onPress={backHandler}
                                >
                                    <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                                </TouchableOpacity>

                                {/* Like Button */}
                                <TouchableOpacity
                                    style={customerStyles.top_bar_button}
                                    onPress={likeHandler}
                                >
                                    <FontAwesome5Icon name={"heart"} solid={isFavorite} size={18} color={COLORS.primary} />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>


                    {/* Hotel Information */}
                    <View style={customerStyles.section_container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <JoyText style={customerStyles.page_title}>
                                {hotelInfo ? hotelInfo.name : 'Loading ...'}
                            </JoyText>
                            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                <FontAwesome5Icon name={"star"} solid size={18} color='#FFCA18' />

                                <JoyText style={styles.rating}> {hotelInfo && hotelInfo.star}</JoyText>
                                <JoyText style={styles.review}> ({hotelInfo && hotelInfo.review})</JoyText>
                            </View>

                        </View>
                        <JoyText style={styles.location}>
                            {hotelInfo && hotelInfo.location}
                        </JoyText>
                        <JoyText style={styles.description} numberOfLines={3}>
                            {hotelInfo && hotelInfo.description}

                        </JoyText>
                    </View>

                    <View style={customerStyles.divider}></View>


                    {/* Hotel Facilities */}
                    <View style={customerStyles.section_container}>
                        <JoyText style={customerStyles.section_title}>Hotel amenities</JoyText>
                        <FlatList style={{ height: 120, marginTop: 8 }}
                            horizontal data={hotelInfo && hotelInfo.amenities}

                            renderItem={({ item }) => (
                                <FacilityCard
                                    name={item}
                                />
                            )}
                        >
                        </FlatList>
                    </View>

                    <View style={customerStyles.divider}></View>


                    {/* Hotel Room List */}
                    <View style={customerStyles.section_container}>
                        {
                            hotelInfo &&
                            hotelInfo.rooms.map((room, index) => {
                                return (
                                    <View key={index}>
                                        <JoyText style={customerStyles.section_title}>{room.room_type}</JoyText>
                                        <FlatList style={{ height: 300, marginTop: 8 }}
                                            horizontal data={room.room_list}

                                            renderItem={({ item }) => (
                                                <RoomCard
                                                    name={item}
                                                    navigation={navigation}
                                                />
                                            )}
                                        >
                                        </FlatList>
                                    </View>
                                )
                            })
                        }
                    </View>

                    <View style={customerStyles.divider}></View>


                    {/* Hotel Review */}
                    <View style={{ ...customerStyles.section_container_no_py, paddingTop: 10, marginBottom: -2 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                            {/* Rating Statistic */}
                            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                <JoyText style={{ fontSize: 32, fontWeight: '600' }}>{hotelInfo && hotelInfo.star}</JoyText>
                                <JoyText style={{ fontSize: 16, color: COLORS.subheading_text }}> ({hotelInfo && hotelInfo.review} reviews)</JoyText>
                            </View>

                            {/* See all Reviews Button */}

                            <TouchableOpacity>
                                <JoyText
                                    style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}
                                    onPress={seeAllCommentsHandler}
                                >
                                    See all
                                </JoyText>
                            </TouchableOpacity>

                        </View>

                        {(hotelInfo && hotelInfo.reviews.length === 0) && (<JoyText>No review</JoyText>)}
                        {(hotelInfo && hotelInfo.reviews.length === 1) && (<ReviewCard props={hotelInfo.reviews[0]} />)}
                        {(hotelInfo && hotelInfo.reviews.length >= 2) && (<ReviewCard props={hotelInfo.reviews[0]} />)}
                        {(hotelInfo && hotelInfo.reviews.length >= 2) && (<ReviewCard props={hotelInfo.reviews[1]} />)}
                    </View>
                </ScrollView>



                {/* Fixed Booking Bar */}
                <View style={fixedBarStyle.bar_container}>
                    <TouchableOpacity
                        style={fixedBarStyle.bar_calendar}
                        onPress={pickDateHandler}
                    >
                        <FontAwesome5Icon name={"calendar-alt"} size={28} color={COLORS.primary} />
                        <JoyText style={fixedBarStyle.calendar_text}>{formatDate(dateRange.startDate)} - {formatDate(dateRange.endDate)}</JoyText>
                    </TouchableOpacity>
                </View>
                <DatePickerModal
                    locale="en"
                    mode="range"
                    disableStatusBar
                    disableStatusBarPadding
                    visible={openDatePicker}
                    onDismiss={onDismiss}
                    startDate={dateRange.startDate}
                    endDate={dateRange.endDate}
                    onConfirm={onConfirm}
                />
            </View>



            {/* See all Review Modal */}
            <Modal
                animationType="none"
                transparent={true}
                visible={seeAllComments}
            >
                <View style={styles.modal_page}>
                    <View style={styles.modal_container}>
                        <View style={{ paddingHorizontal: 14, marginTop: 14, marginBottom: 8 }}>
                            <TouchableOpacity
                                onPress={closeCommentsHandler}
                                style={{ width: 46, marginBottom: 6 }}
                            >
                                <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                                    Close
                                </JoyText>
                            </TouchableOpacity>
                            <JoyText style={customerStyles.section_title}>All comments ({hotelInfo && hotelInfo.review})</JoyText>
                        </View>
                        <ScrollView>
                            {hotelInfo &&
                                hotelInfo.reviews.map((review, index) => (
                                    <ReviewCard
                                        props={review}
                                        key={index}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    thumbnail_wrapper: {
        width: '100%',
        height: 250,
    },
    thumbnail_image: {
        flex: 1,
        justifyContent: 'flex-start'
    },

    rating: {
        color: COLORS.heading_text,
        fontSize: TEXTS.lg,
        fontWeight: '600',

    },
    review: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.lg,
        fontWeight: '500',

    },
    location: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '600',

        marginTop: 4,
    },
    description: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.sm,
        fontWeight: '500',
        marginTop: 6,
        textAlign: 'justify',
        flex: 1,
    },
    review_name: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,

        marginTop: 4,
    },
    review_comment: {
        color: COLORS.text,
        fontSize: TEXTS.md,

        marginTop: 4,
    },
    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_container: {
        width: 360,
        height: 600,
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
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    bar_calendar: {
        height: 60,
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

})