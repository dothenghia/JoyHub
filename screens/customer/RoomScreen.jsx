import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

export default function RoomScreen({ navigation, route, parentSlug }) {
    console.log(route.params)

    return (
        <ScrollView style={customerStyles.page_container}>
            <Text>RoomScreen</Text>

            {/* Thumbnail Room Image */}
            <View style={styles.thumbnail_wrapper}>
                <ImageBackground
                    source={require('../../assets/customer/demo.jpg')}
                    resizeMode="cover"
                    style={styles.thumbnail_image}
                >
                    <TouchableOpacity
                        style={{width: 80, padding: 10, backgroundColor: '#fff' }}
                        onPress={() => navigation.navigate('HotelPage', {slug: route.params.parentSlug})}
                    >
                        <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* Room Information */}
            <View style={customerStyles.section_container}>
                <Text style={customerStyles.heading_1}>{route.params.slug}</Text>
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
