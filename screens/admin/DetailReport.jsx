import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import generalStyles from "../../styles/general";
import { TopBar, RemoveBar } from "../../components/admin/Bar";
import { TEXTS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { DetailHotelStyles } from "../../styles/admin";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native";
import { ReportDetailCard } from "../../components/admin/Card";

const data = [
    {
        "bookingId": 1,
        "date": "06/02/2023",
        "title": "There is a mouse",
        "description": "There is a mouse in my room",
    },
    {
        "bookingId": 2,
        "date": "12/09/2023",
        "title": "Bad service",
        "description": "The service is bad",
    },
    {
        "bookingId": 3,
        "date": "18/06/2023",
        "title": "Scam",
        "description": "The hotel is a scam",
    },
    {
        "bookingId": 4,
        "date": "03/11/2023",
        "title": "Scam",
        "description": "The hotel is a scam",
    },
];

export default function DetaiReportScreen({ route, navigation }) {
    const { hotel_name } = route.params;
    return (
        <View style={generalStyles.page_container}>
            <TopBar Title={hotel_name + " (" + data.length + ")"}backIcon={true} navigation={navigation} />
            <FlatList
                data={data}
                keyExtractor={(item) => item.bookingId}
                renderItem={({ item }) => (
                    <ReportDetailCard
                        IdBooking={item.bookingId}
                        Date={item.date}
                        Title={item.title}
                        Description={item.description}
                    />
                )}
            />
            <RemoveBar contactText={"Contact"} removeText={"REMOVE THIS ACCOUNT"} />
        </View>
    );
}
