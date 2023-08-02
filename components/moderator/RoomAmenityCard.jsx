import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";
import generalStyles from "../../styles/general";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";


function Amentity({name, icon}) {
       
    return(
        <TouchableOpacity style={{ flex: 7, height: 50, flexDirection: 'row', marginTop: 7, padding: 5, borderWidth: 1, borderRadius: 10 }}>
            <Image style={{ marginLeft: 5,marginTop: 3, height: 30, width: 30 }} source={icon} />
            <Text style={{ marginLeft: 15,marginTop: 3, height: 30, width: 'auto', textAlign: 'center', paddingTop: 5 }}>{name}</Text>
        </TouchableOpacity>
    )
}


export default function RoomAmentityCard() {


    const listOfAmentities = ['Air Conditioner', 'fasdfsa', 'Wifi', 'TV', 'Shampoo', 'Towel', 'Slippers', 'CD/DVD Player', 'Electronic Safe', 'Mini Frigde', 'Coffee Maker'];
    const res = [];
    const n = listOfAmentities.length;



    for (let i = 0; i < parseInt(n / 2); i++) {
        res.push(
            <View style={{ flexDirection: 'row' }}>
                <Amentity name={listOfAmentities[2 * i]} icon={require('../../assets/mod/wifi.png')} />
                <View style={{flex:0.7}}/>
                <Amentity name={listOfAmentities[2 * i + 1]} icon={require('../../assets/mod/wifi.png')} />
            </View>
        );
    }

    if (n % 2 === 1) {
        res.push(
                <View style={{ flexDirection: 'row' }}>
                    <Amentity name={listOfAmentities[n - 1]} icon={require('../../assets/mod/wifi.png')} />
                    <View style={{flex:1}}/>
                    <Amentity name={''} icon={null} />
                </View>
            )
    }
    res.push(
        <View style={{ marginBottom: 20 }} />
    )

    return res;





}

