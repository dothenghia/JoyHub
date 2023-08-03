import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, ScrollView, FlatList } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import modStyles from '../../styles/mod'

export default function RoomScreen({ navigation }) {


    const listOfAmentities = ['Air Conditioner', 'Fasdfsa', 'Wifi', 'TV', 'Shampoo', 'Towel', 'Slippers', 'CD/DVD Player', 'Electronic Safe', 'Mini Frigde', 'Coffee Maker'];

    const res = [];
    const n = listOfAmentities.length;

    return (
        <ScrollView style={modStyles.page_container}>

            <View style={styles.thumbnail_wrapper}>
                <ImageBackground
                    source={require('../../assets/mod/demoHotel.jpg')}
                    resizeMode="cover"
                    style={styles.thumbnail_image}
                >
                    <TouchableOpacity
                        style={{ width: 80, padding: 10, backgroundColor: '#fff' }}
                        onPress={() => navigation.navigate('HotelPage', { slug: route.params.parentSlug })}
                    >
                        <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            <View style={{ ...modStyles.page_padding, marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Hotel Amentities</Text>
                <FlatList style={{ height: 100 }}
                    horizontal data={listOfAmentities}

                    renderItem={({ item }) => (
                        <Amentity icon={require("../../assets/mod/wifi.png")} name={item} />
                    )}
                >

                </FlatList>
            </View>
                        
            <View style={{marginTop:10, height: 7, backgroundColor:'#888888'}}/>


        </ScrollView>
    );
}

function AmentitiesArea({ amentities }) {

    const render = amentities.map((amentity) =>
        <Amentity icon={require("../../assets/mod/wifi.png")} name={amentity} />
    )

    return render
}


function Amentity({ icon, name }) {

    return (
        <View style={{ flexDirection: 'row', marginTop: 20, marginRight:15, height: 60, width: 170, paddingTop: 15, borderRadius: 10, backgroundColor: '#E7E7E7' }}>
            <Image style={{ height: 30, width: 30, marginLeft: 10 }} source={icon} />
            <Text style={{ fontSize: 14, color: 'black', marginLeft: 15, marginTop: 5 }}>{name}</Text>
        </View>
    )
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
