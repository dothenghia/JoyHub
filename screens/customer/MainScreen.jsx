import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

import HotelCard from "../../components/customer/main/HotelCard";

const hotelList = [
    {
        id: 1,
        name: 'Haley House',
        location: 'District 7, HCM',
        star: '4.8',
        price: '123.000',
        slug: 'haleyhouse'
    },
    {
        id: 2,
        name: 'Bixcuit',
        location: 'District BT, HCM',
        star: '4.6',
        price: '100.000',
        slug: 'bixcuit'
    },
    {
        id: 3,
        name: 'Anis',
        location: 'District 6, HCM',
        star: '4.7',
        price: '150.000',
        slug: 'anis'
    },
    {
        id: 4,
        name: 'Truro',
        location: 'District 5, HCM',
        star: '4.2',
        price: '110.000',
        slug: 'truro'
    },
]

export default function MainScreen({navigation}) {
    return (
        <ScrollView style={customerStyles.page_container}>
            {/* Logo JOY-HUB text */}
            <View style={styles.logo}>
                <Image
                    source={require('../../assets/customer/joyhub.png')}
                    style={styles.logo_image}
                />
            </View>

            {/* Search Input */}
            <View style={customerStyles.section_container}>
                <TextInput
                    style={styles.search_input}
                    placeholder='Search Hotel Name'
                    placeholderTextColor={COLORS.subheading_text}
                    autoCapitalize="none"
                    // onChangeText={(e) => setUsername(e)}
                />
            </View>

            {/* Filer Location Line */}
            <View style={customerStyles.section_container}>
                <TouchableOpacity style={styles.filer_line}>
                    <Text style={{color: COLORS.text}}>
                        Hồ Chí Minh City
                    </Text>
                    <Text style={{ color: COLORS.primary, fontWeight: '600', marginLeft: 3 }}>
                        ^
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Hotel List */}
            <View style={customerStyles.section_container}>
                {
                    hotelList.map((hotel) => {
                        return (<HotelCard key={hotel.id} props={hotel} navigation={navigation}/>)
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width:100,
        height: 32,
        marginTop: 16,
        marginLeft: 32,
        alignItems : 'flex-start',
    },
    logo_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    search_input: {
        width: '100%',
        height: 50,
        marginTop: 14,
        backgroundColor: COLORS.input_background,

        paddingHorizontal: 20,
        borderColor: COLORS.input_border,
        borderWidth: 2,
        borderRadius: 50,

        fontSize: TEXTS.md,
        color: COLORS.text
    },

    filer_line: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
