import React, { useState } from "react";
import {
    FlatList,
    Text,
    View,
} from "react-native";
import generalStyles from "../../styles/general";
import { TopBar, SearchBar } from "../../components/admin/Bar";
import {AvatarCard, HotelCard, ReportCard} from "../../components/admin/Card";
import { TEXTS } from "../../constants/theme";

const data = [
    { id: "1", name: "Cynthia Benson" },
    { id: "2", name: "Johnny Cannon" },
    { id: "3", name: "Ruth Price" },
    { id: "4", name: "Alta Thomas" },
];

export default function HotelScreen({navigation}) {
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

    return (
        <View style={generalStyles.page_container}>
            <TopBar Title={"Hotel Control"} backIcon={true} navigation={navigation} />

            <SearchBar
                placeholder={"Type here..."}
                onChangeText={handleSearch}
                value={searchQuery}
            />
            <Text style={{fontSize: TEXTS.xl, fontWeight: "900", marginBottom: 10}}>Waiting room for accept</Text>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <HotelCard
                        Title={item.name}
                        ImageUri={"https://unsplash.com/photos/M7GddPqJowg"}
                        Address={"The idea with React Native Elements is more about component structure than actual design."}
                    />
                )}
            />
        </View>
    );
}
