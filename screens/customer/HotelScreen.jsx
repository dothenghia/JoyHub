import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Controller
import CController from "../../controllers/customerController";

// Import Component
import RoomCard from "../../components/customer/main/RoomCard";


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
        <ScrollView style={customerStyles.page_container}>
            {/* Thumbnail Hotel Image */}
            <View style={styles.thumbnail_wrapper}>
                <ImageBackground
                    source={require('../../assets/customer/demo.jpg')}
                    resizeMode="cover"
                    style={styles.thumbnail_image}
                >
                    <TouchableOpacity
                        style={{width: 80, padding: 10, backgroundColor: '#fff' }}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>

                <Text>Slug : {route.params.slug}</Text>
            </View>


            {/* Hotel Information */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_1}>{hotelInfo ? hotelInfo.name : 'Loading ...'}</Text>
                <Text style={customerStyles.subheading_1}>{hotelInfo ? hotelInfo.location : 'Loading ...'}</Text>
                <Text style={customerStyles.subheading_1}>
                    {hotelInfo ? hotelInfo.star : 'Loading ...'} ({hotelInfo ? hotelInfo.review : 'Loading ...'})
                </Text>
                <Text style={customerStyles.text_1}>{hotelInfo ? hotelInfo.description : 'Loading ...'}</Text>
            </View>

            <View style={customerStyles.divider}></View>

            {/* Hotel Facilities */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_2}>Hotel facilities</Text>
                {
                    facilities.map((facility) => (
                        <Text key={facility.f_id}>{facility.f_name}</Text>
                    ))
                }
            </View>

            <View style={customerStyles.divider}></View>

            {/* Hotel Room List */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_2}>Standard</Text>
                {
                    roomList.map((room) => (
                        <RoomCard key={room.id} props={room} parentSlug={route.params.slug} navigation={navigation} />
                    ))
                }
            </View>

            <View style={customerStyles.divider}></View>

            {/* Hotel Review */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_2}>Review</Text>
                {
                    reviewList.map((review) => (
                        <View key={review.r_id} style={{marginBottom: 16}}>
                            <Text>{review.r_name} ({review.r_star})</Text>
                            <Text>{review.r_comment}</Text>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    thumbnail_wrapper: {
        width: '100%',
        height: 250,
    },
    thumbnail_image: {
        flex: 1,
        justifyContent: 'center',
    },

});
