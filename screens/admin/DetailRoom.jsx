import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import generalStyles from "../../styles/general";
import { TopBar, ConfirmBar } from "../../components/admin/Bar";
import { Ionicons } from "@expo/vector-icons";
import { DetailRoomStyles } from "../../styles/admin";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native";

const Icons = {
    area: "expand",
    bed: "bed-outline",
    capacity: "person-outline",
    free_wifi: "wifi-outline",
    window: "grid-outline",
    air_conditioner: "snow-outline",
};

const RoomAmenities = ({ amenities }) => (
    <View style={DetailRoomStyles.roomAmenContainer}>
        <FlatList
            data={amenities}
            horizontal={true}
            renderItem={({ item }) => (
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

const RoomInfo = ({ info }) => (
    <View style={DetailRoomStyles.roomInfoContainer}>
        <FlatList
            data={info}
            horizontal={true}
            renderItem={({ item }) => (
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

const RoomDetailsField = ({ label, value }) => (
    <View style={DetailRoomStyles.roomFieldContainer}>
        <Text style={DetailRoomStyles.roomFieldLabel}>{label}:</Text>
        <Text style={DetailRoomStyles.roomField}>{value}</Text>
    </View>
);

const RoomDetails = ({ room }) => (
    <View>
        <View style={DetailRoomStyles.roomNameContainer}>
            {/* Room name */}
            <Text style={DetailRoomStyles.roomName}>{room.name}</Text>
            {/* Room price */}
            <Text style={DetailRoomStyles.roomPrice}>
                {room.price.toString() + " VND/night"}
            </Text>
        </View>
        {/* Confirm Bar */}
        <ConfirmBar confirmText={"Accept"} cancelText={"Reject"} />
        {/* Room Details Part */}
        <View style={DetailRoomStyles.roomDetailsContainer}>
            {/* Room info */}
            <RoomInfo info={room.info} />
            {/* Room amenities */}
            <RoomAmenities amenities={room.amenities} />
            {/* Room description */}
            <RoomDetailsField
                label="Description"
                value="Ut consequat pariatur excepteur esse elit fugiat ex nisi labore. Lorem qui proident culpa proident voluptate quis fugiat sint exercitation id. Dolore tempor eu consequat aliquip aliquip sit occaecat amet voluptate qui pariatur enim eu nostrud. Sunt aliqua nisi pariatur et excepteur Lorem non consectetur commodo aliquip ipsum.
                Duis esse pariatur pariatur et et sit aliquip ullamco. Irure ipsum aute cupidatat officia. Ut proident sint anim laboris nisi enim ex velit ea aliquip sunt incididunt. Fugiat est nulla reprehenderit eiusmod ea sunt esse eiusmod do eu. Id in sint irure occaecat exercitation dolor non est sit sunt in veniam enim excepteur."
            />
            {/* Cancellation policy */}
            <RoomDetailsField
                label="Cancellation Policy"
                value="Free cancellation before 1 day before check-in. After that, cancel before 12:00 PM on the day before check-in and get a 50% refund, minus the service fee."
            />
        </View>
    </View>
);

export default function DetailHotelScreen({ route, navigation }) {
    const scrollRef = React.useRef(null);
    const isFocused = useIsFocused();
    React.useEffect(() => {
        if (!isFocused) {
            scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true });
        }
    }, [isFocused]);

    // const route = useRoute();
    const { room_name, room_price } = route.params;
    const room = {
        name: room_name,
        price: room_price,
        info: [
            {
                label: "area",
                value: "20m2",
            },
            {
                label: "bed",
                value: "1 Bed",
            },
            {
                label: "capacity",
                value: "4 People",
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
    };
    return (
        <ScrollView style={generalStyles.page_container} ref={scrollRef}>
            <TopBar Title={"Detail"} backIcon={true} navigation={navigation} />
            {/* Hotel Image */}
            <Image
                source={require("../../assets/admin/hotel.jpg")}
                style={{
                    width: "100%",
                    resizeMode: "cover",
                    height: 190,
                    borderRadius: 10,
                    marginTop: 10,
                }}
            />
            {/* Room Details */}
            <RoomDetails room={room} />
        </ScrollView>
    );
}
