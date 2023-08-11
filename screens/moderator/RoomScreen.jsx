import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, ScrollView, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, TEXTS } from '../../constants/theme'
import modStyles from '../../styles/mod'
import JoyText from '../../components/general/JoyText'
import RoomAmenityCard from "../../components/moderator/RoomAmenityCard";
export default function RoomScreen({ navigation }) {


    const listOfAmenities = ['Air Conditioner', 'Fasdfsa', 'Wifi', 'TV', 'Shampoo', 'Towel', 'Slippers', 'CD/DVD Player', 'Electronic Safe', 'Mini Frigde', 'Coffee Maker'];

    const listOfType = ['Standard', 'Deluxe', 'Luxury Nha Giau Dai Gia']
    const listOfRoom = [['Small Room', 'Couple', 'Threesome'], ['Queen', 'King', 'reggiN'], ['Hoa Hau Y Nhi', 'Han Mac Tu', 'Quang Trung']]

    let deluxe = []
    let standard = []
    let luxury = []
    let roomTypeList = []
    let allAmenities = []

    for(let i = 0; i < 3; ++i)
    {   
        standard.push(newRoom({rname : listOfRoom[0][i] , rprice : 256000}))
        deluxe.push(newRoom({rname : listOfRoom[1][i] , rprice : 296000}))
        luxury.push(newRoom({rname : listOfRoom[2][i], rprice: 296000}))
    }
    
    roomTypeList.push({ roomType: 'Standard' , roomList : standard})
    roomTypeList.push({ roomType: 'Deluxe' , roomList : deluxe})
    roomTypeList.push({ roomType: 'Luxury' , roomList : luxury})
  
    
    
    for(let i = 0; i < roomTypeList.length; ++i)
    {
        for(let j = 0; j < roomTypeList[i].roomList.length; ++j)
        {
            roomTypeList[i].roomList[j].amenities.forEach(element => {
                if(!(element in allAmenities))
                {
                    allAmenities.push(element)
                }
            });
        }
    }


    return (
        <ScrollView style={modStyles.page_container}>

            <View style={styles.thumbnail_wrapper}>
                <ImageBackground
                    source={require('../../assets/mod/demoHotel.jpg')}
                    resizeMode="cover"
                    style={styles.thumbnail_image}
                >
                    <TouchableOpacity
                        style={ modStyles.top_bar_button}
                        onPress={
                            () => { navigation.goBack() }
                        }
                    >
                        <FontAwesome5Icon name={"arrow-left"} size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            <View style={{ ...modStyles.page_padding, marginTop: 20 }}>
                <JoyText  style={{ fontSize: TEXTS['3xl'] }}>Hotel Amenities</JoyText >
                <RoomAmenityCard amenities={allAmenities} />
            </View>

            <View style={{ marginTop: 10, height: 7, backgroundColor: '#E7E7E7' }} />
            <View style={{...modStyles.page_padding, flexDirection: 'row'}}>
                <View style={{ marginTop: 30, width: 170, height: 50, borderRadius: 10, borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("AddRoomPage", route = {listOfAmenities}) }} style={{ flexDirection: 'row', width: 100, height: 50 }}>
                        <Ionicons name="add-circle-outline" style={{marginLeft:10, marginTop:4}} size={40}  color="black" />
                        <JoyText  style={{marginTop: 14,  marginLeft: 10 , width: 100, fontSize:TEXTS.md }}>Add room</JoyText >
                    </TouchableOpacity>
                </View>
                <View style={{width:10}}></View>
                <View style={{ marginTop: 30, width: 170, height: 50, borderRadius: 10, borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => { /* navigation.navigate("AddRoomPage") */}} style={{ flexDirection: 'row', width: 100, height: 50 }}>
                    <Ionicons name="close-circle-outline" style={{marginLeft:10, marginTop:4}} size={40}  color="black" />
                        <JoyText  style={{marginTop: 14,  marginLeft: 10 , width: 100, fontSize:TEXTS.md }}>Remove room</JoyText >
                    </TouchableOpacity>
                </View>
            </View>
            <RoomArea roomTypeList = {roomTypeList} navigation={navigation} />

        </ScrollView>
    );
}

function RoomArea({roomTypeList, navigation }) {

    n = roomTypeList.length
    listOfType = []

    for (let i = 0;i < roomTypeList.length;i++) 
    {
        listOfType.push(roomTypeList[i].roomType)
    }

    res = []
    for (let i = 0; i < n; ++i) {
        res.push(
            <View style={modStyles.page_padding}>
                <JoyText  style={{ fontSize: TEXTS['5xl'], marginBottom: 20, marginTop: 20, fontWeight: 'bold' }}>{listOfType[i]}</JoyText >
                <FlatList style={{ height: 350 }}
                    horizontal data={roomTypeList[i].roomList}
                    renderItem={({ item }) => (
                        <RoomCard img={require("../../assets/mod/demoHotel.jpg")} room={item} navigation={navigation} />
                    )}
                ></FlatList>
            </View>

        )
    }
    return res
}


function RoomCard({ img, room, navigation }) {

    return (
        <View style={{ height: 320, width: 320, borderRadius: 15, marginRight: 10, marginLeft: 3, elevation: 3, backgroundColor: '#E7E7E7' }}>
            <TouchableOpacity onPress={() => { navigation.navigate("DetailedRoomPage",route = {room}) }} style={{ flex: 3, height: 250, width: 320, borderRadius: 15 }}>
                <Image style={{ height: 250, width: 320, borderRadius: 15 }} source={img} />
            </TouchableOpacity>
            <View style={{ flex: 1.1, marginTop: -20, backgroundColor: 'white', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <JoyText  style={{ flex: 1, fontSize: TEXTS.xxl, fontWeight: 'bold', marginLeft: 15, marginTop: 7 }}>{room.name}</JoyText >
                    <JoyText  style={{ flex: 1, fontSize: TEXTS.xxl, fontWeight: 'bold', marginRight: 15, marginTop: 7, textAlign: 'right' }}>{room.price + " VND"}</JoyText >
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/bed.png")} />
                        <JoyText  style={{ marginTop: 3, marginLeft: 7 }}>{room.info[1].value + " beds"}</JoyText >
                    </View>
                    <Image style={{ marginTop: 10, marginLeft: 10, marginRight: 10, height: 5, width: 5 }} source={require("../../assets/mod/1dot.png")} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/area.png")} />
                        <JoyText  style={{ marginTop: 3, marginLeft: 7 }}>{room.info[0].value + " m"}</JoyText >
                        <JoyText  style={{ marginTop: 3, baselineShift: -6, fontSize: TEXTS.xxs }}>{"2"}</JoyText >
                    </View>
                    <Image style={{ marginTop: 10, marginLeft: 10, marginRight: 10, height: 5, width: 5 }} source={require("../../assets/mod/1dot.png")} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25 }} source={require("../../assets/mod/people_black.png")} />
                        <JoyText  style={{ marginTop: 3, marginLeft: 7 }}>{room.info[2].value + " People"}</JoyText >
                    </View>
                </View>
            </View>

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


function newRoom({rname,rprice})
{
    const room = {
        name: rname,
        price: rprice,
        info: [
            {
                label: "area",
                value: "20",
            },
            {
                label: "bed",
                value: "2",
            },
            {
                label: "capacity",
                value: "4",
            },
        ],
        amenities: [
            {
                label: "free_wifi",
                value: "Free Wifi",
            },
            {
                label: "window",
                value: "Window",
            },
            {
                label: "air_conditioner",
                value: "Air Conditioner",
            },
        ],
    };
    return room
}