import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";
import generalStyles from "../../styles/general";
import TopBar from "../../components/moderator/TopBar";
import RoomAmentityCard from "../../components/moderator/RoomAmenityCard";
import JoyText from '../../components/general/JoyText'
import { TEXTS } from "../../constants/theme";

export default function AddRoomScreen({ navigation, route }) {

    amenities = route.params.listOfAmenities
    return (
        <View style={generalStyles.page_container}>
            <ScrollView >
                <TopBar Title={"Add A Room"} />
                <Image style={{ marginTop: 25, height: 250, width: 'auto', borderRadius: 15 }} source={require('../../assets/mod/demoHotel.jpg')} />
                <View style={{ height: 70, marginBottom: 15 }}>
                    <TextInput placeholder="Enter room name" style={{ flex: 7, marginTop: 15, paddingLeft: 15, height: 60, borderColor: 'black', borderWidth: 1, borderRadius: 15, fontSize: TEXTS.xl }} />
                </View>
                <RoomAmentityCard amenities={amenities} />

                <View>
                    <JoyText  style={{ fontSize: TEXTS["4xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</JoyText >
                    <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30 }} multiline={true} placeholder="Enter description" />
                </View>

                <JoyText  style={{ fontSize: TEXTS["4xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Information</JoyText >
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 30, width: 30, borderRadius: 5 }} source={require('../../assets/mod/area.png')} />
                        <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30, marginLeft:20 }} multiline={true} placeholder="Enter Area" />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 30, width: 30, borderRadius: 5 }} source={require('../../assets/mod/bed.png')} />
                        <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30, marginLeft:20 }} multiline={true} placeholder="Enter Number Of Beds" />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 30, width: 30, borderRadius: 5 }} source={require('../../assets/mod/people_black.png')} />
                        <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30, marginLeft:20 }} multiline={true} placeholder="Enter Number Of People" />
                    </View>
                </View>

            </ScrollView >

        </View>
    );
}



const styles = StyleSheet.create({});
