import React, {useEffect, useRef, useState} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import generalStyles from "../../styles/general";
import {TopBar, ConfirmBar} from "../../components/admin/Bar";
import {Ionicons} from "@expo/vector-icons";
import {DetailRoomStyles} from "../../styles/admin";
import {useIsFocused} from "@react-navigation/native";
import {FlatList} from "react-native";
import AController from "../../controllers/adminController";

const Icons = {
    area: "expand",
    bed: "bed-outline",
    capacity: "person-outline",
    free_wifi: "wifi-outline",
    window: "grid-outline",
    air_conditioner: "snow-outline",
};

const RoomAmenities = ({amenities}) => (
    <View style={DetailRoomStyles.roomAmenContainer}>
        <FlatList
            data={amenities}
            horizontal={true}
            renderItem={({item}) => (
                <View style={DetailRoomStyles.roomAmenField}>
                    <Ionicons
                        style={DetailRoomStyles.roomAmenIcon}
                        name={Icons[item.label]}
                        size={20}
                        color="black"
                    />
                    <Text style={DetailRoomStyles.roomAmenLabel}>{item.value}</Text>
                </View>
            )}
            keyExtractor={(item) => item.label}
        />
    </View>
);

const RoomInfo = ({info}) => (
    <View style={DetailRoomStyles.roomInfoContainer}>
        <FlatList
            data={info}
            horizontal={true}
            renderItem={({item}) => (
                <View style={DetailRoomStyles.roomInfoField}>
                    <Ionicons
                        style={DetailRoomStyles.roomInfoIcon}
                        name={Icons[item.label]}
                        size={20}
                        color="black"
                    />
                    <Text style={DetailRoomStyles.roomInfoLabel}>{item.value}</Text>
                </View>
            )}
            keyExtractor={(item) => item.label}
        />
    </View>
);

const RoomDetailsField = ({label, value}) => (
    <View style={DetailRoomStyles.roomFieldContainer}>
        <Text style={DetailRoomStyles.roomFieldLabel}>{label}:</Text>
        <Text style={DetailRoomStyles.roomField}>{value}</Text>
    </View>
);

const RoomDetails = ({room, navigation}) => (
    <View>
        <View style={DetailRoomStyles.roomNameContainer}>
            {/* Room name */}
            <Text style={DetailRoomStyles.roomName}>{room.name}</Text>
            {/* Room price */}
            <Text style={DetailRoomStyles.roomPrice}>
                {room.price.toString() + " JC/night"}
            </Text>
        </View>
        {/* Confirm Bar */}
        <ConfirmBar confirmText={"Accept"} cancelText={"Reject"} onConfirm={
            async () => {
                if (await AController("ACTIVE_ROOM", room.id)) {
                    alert("Active successfully");
                    navigation.goBack();
                } else {
                    alert("Active failed")
                }
            }
        } onCancel={
            async () => {
                if (await AController("REMOVE_ROOM", room.id)) {
                    alert("Delete successfully");
                    navigation.goBack();
                }
                else {
                    alert("Delete failed")
                }
            }
        }/>
        {/* Room Details Part */}
        <View style={DetailRoomStyles.roomDetailsContainer}>
            {/* Room info */}
            <RoomInfo info={room.info}/>
            {/* Room amenities */}
            <RoomAmenities amenities={room.amenities}/>
            {/* Room description */}
            <RoomDetailsField
                label="Description"
                value={room.description}
            />
            {/* Cancellation policy */}
            <RoomDetailsField
                label="Cancellation Policy"
                value="Free cancellation before 1 day before check-in. After that, cancel before 12:00 PM on the day before check-in and get a 50% refund, minus the service fee."
            />
        </View>
    </View>
);

// ------------------ Function ------------------
const fetchRoom = async (setRooms, room_id) => {
    try {
        const rooms = await AController("GET_ROOM_DETAIL", room_id);
        setRooms(rooms);
    } catch (error) {
        console.log(error);
    }
}

export default function DetailHotelScreen({route, navigation}) {
    const scrollRef = useRef(null);
    const isFocused = useIsFocused();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        if (!isFocused) {
            scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
            setRooms([]);
        } else {
            fetchRoom(setRooms, route.params.room_id);
            console.log(rooms.image);
        }
    }, [isFocused]);

    // const route = useRoute();
    const {room_name, room_price} = route.params;
    const room = {
        id: rooms._id,
        name: room_name,
        price: room_price,
        info: [
            {
                label: "area",
                value: rooms.area + " m2",
            },
            {
                label: "bed",
                value: rooms.bedroom + " bed",
            },
            {
                label: "capacity",
                value: rooms.guest + " people",
            },

        ],
        amenities: [
            {
                label: "free_wifi",
                value: "Free Wifi",
            },
            {
                label: "window",
                value: "Window",
            },
            {
                label: "air_conditioner",
                value: "Air Conditioner",
            },
        ],
        description: rooms.description,
        // if image is available, use this
        image: (rooms.image && rooms.image.length > 0) ? rooms.image[0] : null,
        // image: require("../../assets/admin/hotel.jpg")
    };
    return (
        <ScrollView style={generalStyles.page_container} ref={scrollRef}>
            <TopBar Title={"Detail"} backIcon={true} navigation={navigation}/>
            {/* Hotel Image */}
            <Image
                source={{uri: room.image}}
                style={{
                    width: "100%",
                    resizeMode: "cover",
                    height: 190,
                    borderRadius: 10,
                    marginTop: 10,
                }}
            />
            {/* Room Details */}
            <RoomDetails room={room} navigation={navigation}/>
        </ScrollView>
    );
}
