import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";
import generalStyles from "../../styles/general";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";

export default function RoomAmentityCard() {
    {
        const listOfAmentities = ['Air Conditioner', 'fasdfsa', 'Wifi', 'TV', 'Shampoo', 'Towel', 'Slippers', 'CD/DVD Player', 'Electronic Safe', 'Mini Frigde', 'Coffee Maker'];
        const res = [];
        const n = listOfAmentities.length;


        for (let i = 0; i < (n / 2); i++) {
            res.push(
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginTop: 10, padding: 5, borderWidth: 1, borderRadius: 10 }}>
                        <Image style={{ marginTop: 0, height: 30, width: 30 }} source={require('../../assets/mod/wifi.png')} />
                        <Text style={{ marginLeft: 15, height: 30, width: 'auto', textAlign: 'center', paddingTop: 5 }}>{listOfAmentities[2 * i]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginLeft: 15, marginTop: 10, padding: 5, borderWidth: 1, borderRadius: 10 }}>
                        <Image style={{ marginTop: 0, height: 30, width: 30 }} source={require('../../assets/mod/wifi.png')} />
                        <Text style={{ marginLeft: 15, height: 30, width: 'auto', textAlign: 'center', paddingTop: 5 }}>{listOfAmentities[2 * i + 1]}</Text>
                    </TouchableOpacity>

                </View>
            );
        }

        if (n % 2 === 1) {
            res.push
                (
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginTop: 10, padding: 5, borderWidth: 1, borderRadius: 10 }}>
                            <Image style={{ marginTop: 0, height: 30, width: 30 }} source={require('../../assets/mod/wifi.png')} />
                            <Text style={{ marginLeft: 15, height: 30, width: 'auto', textAlign: 'center', paddingTop: 5 }}>{listOfAmentities[n-1]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginLeft: 15, marginTop: 10, padding: 5, borderWidth: 0, borderRadius: 10 }}>
                            <Image style={{ marginTop: 0, height: 30, width: 30 }} source={null} />
                            <Text style={{ marginLeft: 15, height: 30, width: 'auto', textAlign: 'center', paddingTop: 5 }}></Text>
                        </TouchableOpacity>

                    </View>
                )
        }
        res.push(
            <View style={{marginBottom:20}}/>
        )
        return res;


    }


}
