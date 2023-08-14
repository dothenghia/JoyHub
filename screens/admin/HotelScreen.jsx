import React, { useState, Suspense, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import generalStyles from "../../styles/general";
import { TopBar, SearchBar } from "../../components/admin/Bar";
import { HotelCard } from "../../components/admin/Card";
import { TEXTS } from "../../constants/theme";

const data = [
    { id: "1", name: "Cynthia Benson", waitingAmount: 2 },
    { id: "2", name: "Johnny Cannon", waitingAmount: 0 },
    { id: "3", name: "Ruth Price", waitingAmount: 1 },
    { id: "4", name: "Alta Thomas", waitingAmount: 100 },
];

const LazyLoadScreen = (Component) => (props) =>
(
    <Suspense fallback={<Text>Loading...</Text>}>
        <Component {...props} />
    </Suspense>
);

// Component
const HotelItem = ({ item, navigation }) => (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate("AdminRoomScreen", { hotel_name: item.name });
        }
        }>
        <HotelCard
            Title={item.name}
            ImageUri={"https://unsplash.com/photos/M7GddPqJowg"}
            Address={"The idea with React Native Elements is more about component structure than actual design."}
            WaitingAmount={item.waitingAmount}
        />
    </TouchableOpacity>
);

const LazyHotelItem = LazyLoadScreen(HotelItem);

const HotelList = ({ data, navigation }) => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            item.waitingAmount > 0 && <LazyHotelItem item={item} navigation={navigation} />
        )}
    />
);

const SearchAndHeader = ({ searchQuery, handleSearch }) => (
    <View>
        <TopBar
            Title={"Hotel Control"}
        />
        <SearchBar
            placeholder={"Type here..."}
            onChangeText={handleSearch}
            value={searchQuery}
        />
        <Text style={{ fontSize: TEXTS.xl, fontWeight: "900" }}>
            Waiting for accept
        </Text>
    </View>
);

// ------------------------------

// Function
const fetchHotel = async (setHotels) => {
    try {
        // const response = await AController("GETHOTEL");
        // setHotels(response);
        setHotels(data);
    } catch (error) {
        console.log(error);
    }
}

const filterHotel = (data, text) => {
    return data.filter((item) => {
        return hotel.name.toLowerCase().includes(text.toLowerCase());
    });
}

const HotelScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        if (isFocused) {
            fetchHotel(setHotels);
        }
    }, [isFocused]);

    useEffect(() => {
        setFilteredData(hotels);
    }, [hotels]);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = filterHotel(hotels, text);
        setFilteredData(filtered);
    };

    return (
        <View style={generalStyles.page_container}>
            <SearchAndHeader
                searchQuery={searchQuery}
                handleSearch={handleSearch}
            />
            <HotelList data={filteredData} navigation={navigation} />
        </View>
    );
};

export default HotelScreen;
