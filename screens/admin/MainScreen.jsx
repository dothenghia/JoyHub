import React, { useState, lazy, Suspense, useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View, } from "react-native";
import generalStyles from "../../styles/general";
import { SearchBar, TopBar } from "../../components/admin/Bar";
import { AvatarCard } from "../../components/admin/Card";
import { TEXTS } from "../../constants/theme";
import AController from "../../controllers/adminController";

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
    // New feature
    const isFocused = useIsFocused();
    const [searchQuery, setSearchQuery] = useState("");
    // Get moderator's hotel list
    const [filteredData, setFilteredData] = useState([]);
    const fetchModerator = async () => {
        try {
            const response = await AController("GETMODERATOR")
            setModerators(response);
            console.log(moderators);
        } catch (error) {
            console.log(error);
        }
    };
    const [moderators, setModerators] = useState([]);
    useEffect(() => {
        if (isFocused) {
            fetchModerator();
        }
    }, [isFocused]);

    useEffect(() => {
        setFilteredData(moderators);
    }, [moderators]);
    // -- End of new feature

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
            {/* lazy loading Flatlist */}

            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("AdminDetailHotel", { hotel: item});
                    }}>
                        <AvatarCard
                            Title={item.name}
                            ImageUri={"https://unsplash.com/photos/M7GddPqJowg"}
                            Address={item.address}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
