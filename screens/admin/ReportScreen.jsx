import React, { useMemo, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import generalStyles from "../../styles/general";
import { searchStyles } from "../../styles/admin";
import { TopBar, SearchBar } from "../../components/admin/Bar";
import { AvatarCard, ReportCard } from "../../components/admin/Card";
import { TEXTS } from "../../constants/theme";

const data = [
    { id: "1", name: "Ramekin", title: "There is a mouse", isRead: false },
    { id: "2", name: "Leonine", title: "Bad service", isRead: true },
    { id: "3", name: "Ebullition", title: "Scam", isRead: false },
    { id: "4", name: "Atwitter", title: "Scam", isRead: false },
];

export default function ReportScreen({ navigation }) {
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

    const markAsRead = (id) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                item.isRead = true;
            }
            return item;
        });
        setFilteredData(updatedData);
    };

    return (
        <View style={generalStyles.page_container}>
            <TopBar
                Title={"Report Control"}
                backIcon={true}
                navigation={navigation}
            />

            <SearchBar
                placeholder={"Type here..."}
                onChangeText={handleSearch}
                value={searchQuery}
            />

            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={
                        () => {
                            if (!item.isRead) {
                                markAsRead(item.id);
                            }
                            navigation.navigate("AdminDetailReport", { hotel_name: item.name })
                        }
                    }>
                        <ReportCard
                            hotel={item.name}
                            title={item.title}
                            isRead={item.isRead}
                            date={"2021-05-20"}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
