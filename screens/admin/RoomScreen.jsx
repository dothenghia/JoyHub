import React, {Suspense, useEffect, useState} from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import generalStyles from "../../styles/general";
import {RoomCard} from "../../components/admin/Card";
import {SearchBar, TopBar} from "../../components/admin/Bar";
import {TEXTS} from "../../constants/theme";
import {useIsFocused} from "@react-navigation/native";
import AController from "../../controllers/adminController";

const data = [
    {id: "1", name: "Queen Room (Deluxe)", price: "200.000"},
    {id: "2", name: "Standard Room", price: "100.000"},
    {id: "3", name: "King Room (VIP)", price: "300.000"},
    {id: "4", name: "Double Room", price: "120.000"},
];

const LazyLoadScreen = (Component) => (props) =>
    (
        <Suspense fallback={<Text>Loading...</Text>}>
            <Component {...props} />
        </Suspense>
    );

const RoomItem = ({item, navigation}) => (
    <TouchableOpacity onPress={() => (
        navigation.navigate("AdminDetailRoom", {room_id: item._id, room_name: item.name, room_price: item.price})
    )}>
        <RoomCard
            Title={item.name}
            ImageUri={item.image[0]}
            Price={item.price}
        />
    </TouchableOpacity>
);

const LazyRoomItem = LazyLoadScreen(RoomItem);

const RoomList = ({data, navigation}) => (
    <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
            <LazyRoomItem item={item} navigation={navigation}/>
        )}
    />
);

const SearchAndHeader = ({searchQuery, handleSearch, navigation, hotel_name}) => (
    <View>
        <TopBar
            Title={hotel_name}
            backIcon={true}
            navigation={navigation}
        />
        <SearchBar
            placeholder={"Type here..."}
            onChangeText={handleSearch}
            value={searchQuery}
        />
        <Text style={{fontSize: TEXTS.xl, fontWeight: "900", marginBottom: 10}}>
            Waiting room for accept
        </Text>
    </View>
);

// ------------------ Function ------------------
const fetchRoom = async (setRooms, hotel_id) => {
    try {
        const rooms = await AController("GET_INACTIVE_ROOM_LIST", hotel_id);
        // setRooms(data);
        setRooms(rooms);
    }
    catch (error) {
        console.log(error);
    }
}
// ----------------------------------------------

export default function RoomScreen({route, navigation}) {
    const isFocused = useIsFocused();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        if (isFocused) {
            fetchRoom(setRooms, route.params.hotel_id);
        }
    }, [isFocused]);

    useEffect(() => {
        setFilteredData(rooms);
    }, [rooms]);

    const handleSearch = (text) => {
        setSearchQuery(text);
        // Filter data
        const filtered = data.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filtered);
    };

    const { hotel_name } = route.params;
    return (
        <View style={generalStyles.page_container}>
            <SearchAndHeader
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                navigation={navigation}
                hotel_name={hotel_name}
            />
            <RoomList data={filteredData} navigation={navigation}/>
        </View>
    );
}
