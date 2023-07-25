import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";
import generalStyles from "../../styles/general";
import TopBar from "../../components/moderator/TopBar";
import RoomAmentityCard from "../../components/moderator/RoomAmenityCard";

export default function AddRoomScreen({ navigation }) {


    return (
        <View style={generalStyles.page_container}>
            <ScrollView >
                <TopBar Title={"Add A Room"} />
                <Image style={{ marginTop: 25, height: 250, width: 'auto', borderRadius: 15 }} source={require('../../assets/images/demoHotel.jpg')} />
                <View style={{ height: 70, marginBottom: 15 }}>
                    <TextInput placeholder="Enter room name" style={{ flex: 7, marginTop: 15, paddingLeft: 15, height: 60, borderColor: 'black', borderWidth: 1, borderRadius: 15, fontSize: 20 }} />
                </View>
                <RoomAmentityCard/>
            </ScrollView >
        </View>
    );
}



const styles = StyleSheet.create({});
