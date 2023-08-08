import React, { useState, lazy, Suspense } from "react";
import { FlatList, Text, TouchableOpacity, View, } from "react-native";
import generalStyles from "../../styles/general";
import { SearchBar, TopBar } from "../../components/admin/Bar";
import { AvatarCard } from "../../components/admin/Card";
import { TEXTS } from "../../constants/theme";

const LazyLoadScreen = (Component) => (props) =>
(
    <Suspense fallback={<Text>Loading...</Text>}>
        <Component {...props} />
    </Suspense>
);
const data = [
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Orange" },
    { id: "4", name: "Blueberry" },
];

export default function MainScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    // Handle search query
    const handleSearch = (text) => {
        setSearchQuery(text);
        // Filter data
        const filtered = data.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filtered);
    };

    // Render
    return (
        <View style={generalStyles.page_container}>
            <TopBar Title={"Moderator Control"} backIcon={true} navigation={navigation} />

            <SearchBar
                placeholder={"Type here..."}
                onChangeText={handleSearch}
                value={searchQuery}
            />
            <Text style={{ fontSize: TEXTS.xl, fontWeight: "900" }}>Waiting for accept</Text>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("AdminDetailHotel", { hotel_name: item.name });
                    }}>
                        <AvatarCard
                            Title={item.name}
                            ImageUri={"https://unsplash.com/photos/M7GddPqJowg"}
                            Address={"227 Nguyen Van Cu, TP.HCM"}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
