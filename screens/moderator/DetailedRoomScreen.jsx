import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";
import generalStyles from "../../styles/general";
import TopBar from "../../components/moderator/TopBar";
import RoomAmentityCard from "../../components/moderator/RoomAmenityCard";
import JoyText from '../../components/general/JoyText'

import { TEXTS } from "../../constants/theme";

export default function DetailedRoomScreen({ navigation, route }) {

    room = route.params.room
    console.log(route)
    return (
        <View style={generalStyles.page_container}>
            <ScrollView >
                <TopBar Title={room.name} navigation={navigation} />
                <Image style={{ marginTop: 25, height: 250, width: 'auto', borderRadius: 15 }} source={require('../../assets/mod/demoHotel.jpg')} />
                
                <RoomAmentityCard amenities={room.amenities} />

                <View>
                    <JoyText  style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</JoyText >
                    <JoyText style={{ fontSize: TEXTS.lg , marginBottom: 30 }} multiline={true} > Khach san nay co cai phong nay dep nhat tren the gioi co tich</JoyText>
                </View>

                <JoyText  style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Information</JoyText >
                <View>
                    <View style={{ flexDirection: 'row', marginTop:5 }}>
                        <Image style={{ height:40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/area.png')} />
                        <JoyText style={{ fontSize: TEXTS.lg , marginTop: 3, marginBottom: 30, marginLeft:20 }} multiline={true}> {room.info[1].value + " Beds"} </JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop:5 }}>
                        <Image style={{ height:40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/bed.png')} />
                        <JoyText style={{ fontSize: TEXTS.lg , marginTop: 3, marginBottom: 30, marginLeft:20 }} multiline={true}> {room.info[0].value + " m"} </JoyText>
                        <JoyText  style={{ marginTop: 3, baselineShift: -6, fontSize: TEXTS.xxs }}>{"2"}</JoyText >
                    </View>
                    <View style={{ flexDirection: 'row', marginTop:5 }}>
                        <Image style={{ height:40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/people_black.png')} />
                        <JoyText style={{ fontSize: TEXTS.lg , marginTop: 3, marginBottom: 30, marginLeft:20 }} multiline={true}> {room.info[2].value + " People"} </JoyText>
                    </View>
                </View>

            </ScrollView >

        </View>
    );
}


function editView()
{
    return(
        <View style={generalStyles.page_container}>
            <ScrollView >
                <TopBar Title={room.name} />
                <Image style={{ marginTop: 25, height: 250, width: 'auto', borderRadius: 15 }} source={require('../../assets/mod/demoHotel.jpg')} />
                <View style={{ height: 70, marginBottom: 15 }}>
                    <TextInput placeholder="Enter room name" style={{ flex: 7, marginTop: 15, paddingLeft: 15, height: 60, borderColor: 'black', borderWidth: 1, borderRadius: 15, fontSize: TEXTS.xl }} />
                </View>
                <RoomAmentityCard amenities={room.amenities} />

                <View>
                    <JoyText  style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</JoyText >
                    <TextInput style={{ fontSize: TEXTS.lg, marginBottom: 30 }} multiline={true} placeholder="Enter description" />
                </View>

                <JoyText  style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Information</JoyText >
                <View>
                    <View style={{ flexDirection: 'row', marginTop:5 }}>
                        <Image style={{ height:40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/area.png')} />
                        <TextInput style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft:20 }} multiline={true} placeholder={"Enter Area"} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop:5 }}>
                        <Image style={{ height:40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/bed.png')} />
                        <TextInput style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft:20 }} multiline={true} placeholder="Enter Number Of Beds" />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop:5 }}>
                        <Image style={{ height:40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/people_black.png')} />
                        <TextInput style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft:20 }} multiline={true} placeholder="Enter Number Of People" />
                    </View>
                </View>

            </ScrollView >

        </View>
    )
}
const styles = StyleSheet.create({});
