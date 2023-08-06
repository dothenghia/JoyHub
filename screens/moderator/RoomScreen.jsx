import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, ScrollView, FlatList } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import modStyles from '../../styles/mod'

export default function RoomScreen({ navigation }) {


    const listOfAmentities = ['Air Conditioner', 'Fasdfsa', 'Wifi', 'TV', 'Shampoo', 'Towel', 'Slippers', 'CD/DVD Player', 'Electronic Safe', 'Mini Frigde', 'Coffee Maker'];

    const listOfType = ['Standard', 'Deluxe', 'Luxury Nha Giau Dai Gia']
    const listOfRoom = [['Small Room', 'Large Room', 'Couple', 'Threesome'], ['Queen', 'King', 'reggiN'], ['Hoa Hau Y Nhi', 'Han Mac Tu', 'Quang Trung']]

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

            <View style={{ marginTop: 10, height: 7, backgroundColor: '#E7E7E7' }} />
            <View style={{...modStyles.page_padding, flexDirection: 'row'}}>
                <View style={{ marginTop: 30, width: 170, height: 50, borderRadius: 10, borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("AddRoomPage") }} style={{ flexDirection: 'row', width: 100, height: 50 }}>
                        <Image style={{ height: 25, width: 25, marginTop: 10, marginLeft: 10 }} source={require("../../assets/mod/wifi.png")} />
                        <Text style={{ textAlign: 'center', marginTop: 12,  marginLeft: 10 , width: 100 }}>Add room</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:10}}></View>
                <View style={{ marginTop: 30, width: 170, height: 50, borderRadius: 10, borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => { /* navigation.navigate("AddRoomPage") */}} style={{ flexDirection: 'row', width: 100, height: 50 }}>
                        <Image style={{ height: 25, width: 25, marginTop: 10, marginLeft: 10 }} source={require("../../assets/mod/wifi.png")} />
                        <Text style={{ textAlign: 'center', marginTop: 12,  marginLeft: 10, width: 100 }}>Remove room</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <RoomArea listOfType={listOfType} listOfRoom={listOfRoom} navigation={navigation} />

        </ScrollView>
    );
}

function RoomArea({ listOfType, listOfRoom, navigation }) {

    n = listOfType.length
    res = []
    for (let i = 0; i < n; ++i) {
        res.push(
            <View style={modStyles.page_padding}>
                <Text style={{ fontSize: 20, marginBottom: 20, marginTop: 20, fontWeight: 'bold' }}>{listOfType[i]}</Text>
                <FlatList style={{ height: 350 }}
                    horizontal data={listOfRoom[i]}
                    renderItem={({ item }) => (
                        <RoomCard img={require("../../assets/mod/demoHotel.jpg")} name={item} navigation={navigation} />
                    )}
                ></FlatList>
            </View>

        )
    }
    return res
}


function RoomCard({ img, name, navigation }) {

    return (
        <View style={{ height: 320, width: 320, borderRadius: 15, marginRight: 10, marginLeft: 3, elevation: 3, backgroundColor: '#E7E7E7' }}>
            <TouchableOpacity onPress={() => { navigation.navigate("DetailedRoomPage") }} style={{ flex: 3, height: 250, width: 320, borderRadius: 15 }}>
                <Image style={{ height: 250, width: 320, borderRadius: 15 }} source={img} />
            </TouchableOpacity>
            <View style={{ flex: 1.1, marginTop: -20, backgroundColor: 'white', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginTop: 7 }}>{name}</Text>
                    <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', marginRight: 15, marginTop: 7, textAlign: 'right' }}>{"123.000 VND"}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/bed.png")} />
                        <Text style={{ marginTop: 3, marginLeft: 7 }}>{"2 beds"}</Text>
                    </View>
                    <Image style={{ marginTop: 10, marginLeft: 10, marginRight: 10, height: 5, width: 5 }} source={require("../../assets/mod/1dot.png")} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/area.png")} />
                        <Text style={{ marginTop: 3, marginLeft: 7 }}>{"69 m"}</Text>
                        <Text style={{ marginTop: 3, baselineShift: -6, fontSize: 10 }}>{"2"}</Text>
                    </View>
                    <Image style={{ marginTop: 10, marginLeft: 10, marginRight: 10, height: 5, width: 5 }} source={require("../../assets/mod/1dot.png")} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/people_black.png")} />
                        <Text style={{ marginTop: 3, marginLeft: 7 }}>{"4 People"}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}


function Amentity({ icon, name }) {

    return (
        <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 15, height: 55, width: 170, paddingTop: 12, borderRadius: 10, backgroundColor: '#E7E7E7' }}>
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
