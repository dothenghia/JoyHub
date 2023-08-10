import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, ScrollView, FlatList } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from "../../styles/customer";

// Import Controller
import CController from "../../controllers/customerController";

// Import Component
import RoomCard from "../../components/customer/main/RoomCard";
import FacilityCard from "../../components/customer/main/FacilityCard";


export default function HotelScreen({ navigation, route }) {
    console.log('[Customer] HotelScreen')

    // ------ Data State
    const [hotelInfo, setHotelInfo] = useState(null)
    const [facilities, setFacilities] = useState([])
    const [roomList, setRoomList] = useState([])
    const [reviewList, setReviewList] = useState([])

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchHotelInformation = async () => {
            let data = await CController('GETHOTELINFORMATION')
            setHotelInfo(data)
            setFacilities(data.facilities)
            setRoomList(data.roomList)
            setReviewList(data.reviews)
        }

        fetchHotelInformation()
    }, [])



    return (
        <View style={customerStyles.page_container}>

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
                                onPress={() => navigation.goBack()}
                            >
                                <FontAwesome5Icon name={"arrow-left"} size={18} color={COLORS.primary} />
                            </TouchableOpacity>

                            {/* Like Button */}
                            <TouchableOpacity
                                style={customerStyles.top_bar_button}
                            >
                                <FontAwesome5Icon name={"heart"} size={18} color={COLORS.primary} />
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
                        <JoyText style={styles.rating}>
                            {hotelInfo ? hotelInfo.star : 'Loading ...'} ({hotelInfo ? hotelInfo.review : 'Loading ...'})
                        </JoyText>
                    </View>
                    <JoyText style={styles.location}>
                        {hotelInfo ? hotelInfo.location : 'Loading ...'}
                    </JoyText>
                    <JoyText style={styles.description} numberOfLines={3}>
                        {hotelInfo ? hotelInfo.description : 'Loading ...'}

                    </JoyText>
                </View>

                <View style={customerStyles.divider}></View>


                {/* Hotel Facilities */}
                <View style={customerStyles.section_container}>
                    <JoyText style={customerStyles.section_title}>Hotel facilities</JoyText>
                    <FlatList style={{ height: 120, marginTop: 8 }}
                        horizontal data={facilities}

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
                    <JoyText style={customerStyles.section_title}>Standard</JoyText>
                    <FlatList style={{ height: 330, marginTop: 8 }}
                        horizontal data={roomList}

                        renderItem={({ item }) => (
                            <RoomCard
                                name={item}
                                navigation={navigation}
                            />
                        )}
                    >
                    </FlatList>
                </View>

                <View style={{ ...customerStyles.divider, marginTop: 16 }}></View>


                {/* Hotel Review */}
                <View style={customerStyles.section_container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Rating Statistic */}
                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                            <JoyText style={{ fontSize: 24, fontWeight: '600' }}>{hotelInfo ? hotelInfo.star : ''}</JoyText>
                            <JoyText style={{ fontSize: 12, color: COLORS.subheading_text }}> ({hotelInfo ? hotelInfo.review : ''} reviews)</JoyText>
                        </View>

                        {/* See all Reviews Button */}
                        <View>
                            <TouchableOpacity>
                                <JoyText style={{ color: COLORS.primary, fontWeight: '600' }}>
                                    See all
                                </JoyText>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {
                        reviewList.map((review) => (
                            <View key={review.r_id} style={{ marginBottom: 16 }}>
                                <JoyText>{review.r_name} ({review.r_star})</JoyText>
                                <JoyText>{review.r_comment}</JoyText>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>



            {/* Fixed Booking Bar */}
            <View style={fixedBarStyle.bar_container}>
                <TouchableOpacity
                    style={fixedBarStyle.bar_calendar}
                >
                    <FontAwesome5Icon name={"calendar-alt"} size={28} color={COLORS.primary} />
                    <JoyText style={fixedBarStyle.calendar_text}>Thu, 4/6/2023 - Sat, 6/6/2023</JoyText>
                </TouchableOpacity>
            </View>
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

    location: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '600',

        marginTop: 8,
    },

    rating: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '500',

        marginTop: 8,
    },

    description: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.sm,
        fontWeight: '500',
        marginTop: 6,
        textAlign: 'justify',
        flex: 1,
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
        fontSize: TEXTS.md,
    },

})