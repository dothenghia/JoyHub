import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

export default function AfterPaymentScreen({ navigation, route, parentSlug }) {
    // console.log(route.params)

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{...customerStyles.page_container , marginBottom: 80}}>
                {/* Top Bar */}
                <View style={styles.top_bar}>
                    <TouchableOpacity
                        style={{ width: 62, padding: 10, backgroundColor: '#fff', borderRadius: 12, marginLeft: 12 }}
                        onPress={() => navigation.navigate('HotelPage', { slug: route.params.parentSlug })}
                    >
                        <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <Text style={customerStyles.page_name}>Payment Successfully</Text>
                </View>



                {/* Thumbnail Slider */}
                <View style={customerStyles.section_container}>
                    <ImageBackground
                        source={require('../../assets/customer/demo.jpg')}
                        resizeMode="cover"
                        style={{ ...styles.thumbnail_slider, justifyContent: 'flex-start' }}
                    >
                    </ImageBackground>
                </View>


                {/* Room Information */}
                <View style={customerStyles.section_container}>
                    <Text style={customerStyles.heading_1}>Haley House</Text>
                    <Text style={customerStyles.subheading_1}>Deluxe Room</Text>
                    <Text style={customerStyles.text_1}>District 7, HCM</Text>
                </View>

                <View style={customerStyles.divider}></View>




            </ScrollView>
            <View style={styles.bar_container}>
                <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 28}}>
                    <TouchableOpacity
                        style={styles.bar_button}
                        onPress={() => {navigation.navigate('MainPage')}}>
                        <Text style={customerStyles.button_text_1}>Back to Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    top_bar: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    thumbnail_slider: {
        marginTop: 12,
        width: '100%',
        height: 210,
        borderRadius: 20,
        overflow: 'hidden',
    },

    bar_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 80,
        elevation: 20,
    },
    bar_price: {
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        alignSelf: 'center'
    },
    bar_button: {
        backgroundColor: COLORS.primary,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
    },

});
