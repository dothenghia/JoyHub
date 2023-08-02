import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

import RoomCard from "../../components/customer/main/RoomCard";

const roomList = [
    {
        id: 1,
        name: 'Queen Room',
        price: '123.000',
        slug: 'queen-room'
    },
    {
        id: 2,
        name: 'Deluxe Room',
        price: '200.000',
        slug: 'deluxe-room'
    },
    {
        id: 3,
        name: 'Hehe Room',
        price: '666.000',
        slug: 'hehe-room'
    },
]

export default function HotelScreen({ navigation, route }) {
    console.log(route.params.slug)

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
            </View>


            {/* Hotel Information */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_1}>{route.params.slug}</Text>
                <Text style={customerStyles.subheading_1}>District 7, HCM</Text>
                <Text style={customerStyles.text_1}>description about this hotel hehe</Text>
            </View>

            <View style={customerStyles.divider}></View>

            {/* Hotel Facilities */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_2}>Hotel facilities</Text>

            </View>

            <View style={customerStyles.divider}></View>

            {/* Hotel Room List */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_2}>Standard</Text>

                {
                    roomList.map((room) => {
                        return (<RoomCard key={room.id} props={room} parentSlug={route.params.slug} navigation={navigation} />)
                    })
                }
            </View>

            <View style={customerStyles.divider}></View>

            {/* Hotel Review */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_2}>Review</Text>

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
