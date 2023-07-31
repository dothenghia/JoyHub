import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import generalStyles from "../../styles/general";
import { TopBar, ConfirmBar } from "../../components/admin/Bar";
import { TEXTS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { DetailHotelStyles } from "../../styles/admin";

const HotelAddress = ({ address }) => (
    <View style={DetailHotelStyles.hotelDetailsContainer}>
        <Text style={DetailHotelStyles.hotelDetailsTitle}>Address</Text>
        <Text style={DetailHotelStyles.hotelDetails}>{address}</Text>
    </View>
);

const HotelDescription = ({ description }) => (
    <View style={DetailHotelStyles.hotelDetailsContainer}>
        <Text style={DetailHotelStyles.hotelDetailsTitle}>Description</Text>
        <Text style={DetailHotelStyles.hotelDetails}>{description}</Text>
    </View>
);

const HotelOwnerField = ({ label, value }) => (
    <View style={DetailHotelStyles.ownerField}>
        <Text style={DetailHotelStyles.ownerTitle}>{label}:</Text>
        <Text style={DetailHotelStyles.ownerDetails}>{value}</Text>
    </View>
);

const HotelOwnerInformation = ({ name, username, phone, email }) => (
    <View style={DetailHotelStyles.hotelDetailsContainer}>
        <Text style={DetailHotelStyles.hotelDetailsTitle}>Account</Text>
        <HotelOwnerField label="Owner's Name" value={name} />
        <HotelOwnerField label="Username" value={username} />
        <HotelOwnerField label="Phone" value={phone} />
        <HotelOwnerField label="Email" value={email} />
    </View>
);

const HotelDetails = ({ hotel }) => (
    <View>
        <View style={DetailHotelStyles.hotelNameContainer}>
            {/* Hotel Icon */}
            <Ionicons name="bed-outline" size={40} color="black" />
            <Text style={DetailHotelStyles.hotelName}>
                {hotel.name}
            </Text>
        </View>
        {/* Confirm Bar (Accept, Reject) */}
        <ConfirmBar confirmText={"Accept"} cancelText={"Reject"}/>
        {/* Hotel Details Part */}
        <View style={DetailHotelStyles.hotelDetailsContainer}>
            {/* Hotel Address */}
            <HotelAddress address={hotel.address} />
            {/* Hotel Description */}
            <HotelDescription description={hotel.description} />
            {/* Hotel Owner Information */}
            <HotelOwnerInformation name={hotel.owner.name} username={hotel.owner.username} phone={hotel.owner.phone} email={hotel.owner.email} />
        </View>
    </View>
)

export default function DetailHotelScreen({ route, navigation }) {
    // const route = useRoute();
    const { hotel_name } = route.params;
    const hotel = {
        name: hotel_name,
        address: "123, ABC Street, DEF City, GHI Country",
        description: "Veniam ipsum culpa velit consectetur sint ea excepteur eiusmod. Nulla dolore amet tempor veniam. Culpa est aliqua fugiat non amet adipisicing ex minim. Est anim eiusmod ullamco cupidatat dolor nulla ullamco excepteur ea qui pariatur ex labore aute. Labore duis nulla proident nostrud nulla ad est in aliquip minim reprehenderit eu. Nostrud ullamco enim id voluptate adipisicing esse aute enim. Qui ad velit aliqua anim aliquip eu incididunt aute.",
        owner: {
            name: "Chase Cummings",
            username: "chase.cummings",
            phone: "0123456789",
            email: "tus@kep.bd"
        }
    }
    return (
        <ScrollView style={generalStyles.page_container}>
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
            {/* Hotel Details */}
            <HotelDetails hotel={hotel} />
        </ScrollView>
    );
}

/* <View style={{ flexDirection: "row" }}>
                {/* Accept Button
<TouchableOpacity>
    <Text>Accept</Text>
</TouchableOpacity>
{/* Reject Button
<TouchableOpacity>
    <Text>Reject</Text>
</TouchableOpacity>
            </View > */
