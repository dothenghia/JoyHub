import React, { useState } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import generalStyles from "../../styles/general";
import { HotelCard, RoomCard } from "../../components/admin/Card";
import { TopBar, ConfirmBar, SearchBar } from "../../components/admin/Bar";
import { TEXTS } from "../../constants/theme";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native";
import { DetailRoomStyles } from "../../styles/admin";

const data = [
    { id: "1", name: "Queen Room (Deluxe)", price: "200.000" },
    { id: "2", name: "Standard Room", price: "100.000" },
    { id: "3", name: "King Room (VIP)", price: "300.000" },
    { id: "4", name: "Double Room", price: "120.000" },
];

const RoomList = ({ data, navigation }) => (
    <FlatList
        style={DetailRoomStyles.roomListContainer}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => (
                navigation.navigate("AdminDetailRoom", { room_name: item.name, room_price: item.price })
            )}>
                <RoomCard
                    Title={item.name}
                    ImageUri={"https://unsplash.com/photos/M7GddPqJowg"}
                    Price={item.price}
                />
            </TouchableOpacity>
        )}
    />
);

export default function RoomScreen({ route, navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (text) => {
        setSearchQuery(text);
        // Filter data
        const filtered = data.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filtered);
    };

    // const route = useRoute();
    const { hotel_name } = route.params;
    return (
        <View style={generalStyles.page_container}>
            <TopBar Title={hotel_name} backIcon={true} navigation={navigation} />
            <SearchBar
                placeholder={"Type here..."}
                onChangeText={handleSearch}
                value={searchQuery}
            />
            <Text style={{ fontSize: TEXTS.xl, fontWeight: "900", marginBottom: 10 }}>
                Waiting room for accept
            </Text>
            <RoomList data={filteredData} navigation={navigation} />
        </View>
    );
}
