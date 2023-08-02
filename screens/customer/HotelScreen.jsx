import { useState } from "react";
import { StyleSheet, Text, StatusBar, View, ImageBackground } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'


export default function HotelScreen({ route }) {
    console.log(route.params.slug)

    return (
        <View style={styles.hotel_page_container}>
            {/* Thumbnail Hotel Image */}
            <View style={styles.thumbnail_wrapper}>
                <ImageBackground
                    source={require('../../assets/customer/demo.jpg')}
                    resizeMode="cover"
                    style={styles.thumbnail_image}
                >
                </ImageBackground>
            </View>


            {/* Hotel Information */}
            <View style={styles.section_container}>
                <Text style={customerStyles.heading_1}>{route.params.slug}</Text>
                <Text style={customerStyles.subheading_1}>District 7, HCM</Text>
                <Text style={customerStyles.text_1}>description about this hotel hehe</Text>
            </View>

            <View style={ customerStyles.divider }></View>

            {/* Hotel Facilities */}
            <View style={styles.section_container}>
                <Text style={customerStyles.heading_2}>Hotel facilities</Text>

            </View>

            <View style={ customerStyles.divider }></View>

            {/* Hotel Standard */}
            <View style={styles.section_container}>
                <Text style={customerStyles.heading_2}>Standard</Text>

                
            </View>

            <View style={ customerStyles.divider }></View>

            {/* Hotel Review */}
            <View style={styles.section_container}>
                <Text style={customerStyles.heading_2}>Review</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hotel_page_container: {
        flex: 1,
        backgroundColor: COLORS.background_color,
        marginTop: StatusBar.currentHeight || 0,
    }, 
    thumbnail_wrapper: {
        width: '100%',
        height: 250,
    },
    thumbnail_image: {
        flex: 1,
        justifyContent: 'center',
    },

    section_container: {
        paddingHorizontal: 32,
    },
});
