import React from "react";
import { Image, ScrollView, View } from "react-native";
import JoyText from "../../components/general/JoyText";
import generalStyles from "../../styles/general";
import { TopBar, ConfirmBar } from "../../components/admin/Bar";
import { Ionicons } from "@expo/vector-icons";
import { DetailHotelStyles } from "../../styles/admin";
import { useIsFocused } from "@react-navigation/native";
import AController from "../../controllers/adminController";

const HotelAddress = ({ address }) => (
    <View style={DetailHotelStyles.hotelDetailsContainer}>
        <JoyText style={DetailHotelStyles.hotelDetailsTitle}>Address</JoyText>
        <JoyText style={DetailHotelStyles.hotelDetails}>{address}</JoyText>
    </View>
);

const HotelDescription = ({ description }) => (
    <View style={DetailHotelStyles.hotelDetailsContainer}>
        <JoyText style={DetailHotelStyles.hotelDetailsTitle}>Description</JoyText>
        <JoyText style={DetailHotelStyles.hotelDetails}>{description}</JoyText>
    </View>
);

const HotelOwnerField = ({ label, value }) => (
    <View style={DetailHotelStyles.ownerField}>
        <JoyText style={DetailHotelStyles.ownerTitle}>{label}:</JoyText>
        <JoyText style={DetailHotelStyles.ownerDetails}>{value}</JoyText>
    </View>
);

const HotelOwnerInformation = ({ name, username, phone, email }) => (
    <View style={DetailHotelStyles.hotelDetailsContainer}>
        <JoyText style={DetailHotelStyles.hotelDetailsTitle}>Account</JoyText>
        <HotelOwnerField label="Owner's Name" value={name} />
        <HotelOwnerField label="Username" value={username} />
        <HotelOwnerField label="Phone" value={phone} />
        <HotelOwnerField label="Email" value={email} />
    </View>
);

const updateModerator = async (id) => {
    const result = await AController("UPDATEMODERATOR", id);
    return !result.error;
}

const removeModerator = async (id) => {
    const result = await AController("REMOVEMODERATOR", id);
    return !result.error;
}

const HotelDetails = ({ hotel }) => (
    <View>
        <View style={DetailHotelStyles.hotelNameContainer}>
            {/* Hotel Icon */}
            <Ionicons name="bed-outline" size={40} color="black" />
            <JoyText style={DetailHotelStyles.hotelName}>
                {hotel.name}
            </JoyText>
        </View>
        {/* Confirm Bar (Accept, Reject) */}
        <ConfirmBar confirmText={"Accept"} cancelText={"Reject"} onConfirm={async () => {
            console.log(`[DetailHotel] hotel.id : ${hotel.id}`);
            if (await updateModerator(hotel.id)) {
                alert("Accept successfully")
            } else {
                alert("Accept failed")
            }
        }} onCancel={async () => {
            if (await removeModerator(hotel.id)) {
                alert("Reject successfully")
            } else {
                alert("Reject failed")
            }
        }} />
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
    const scrollRef = React.useRef(null);
    const isFocused = useIsFocused();
    React.useEffect(() => {
        if (!isFocused) {
            scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true });
        }
    }, [isFocused]);

    const hotel = route.params.hotel;
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
            {/* Hotel Details */}
            <HotelDetails hotel={hotel} />
        </ScrollView>
    );
}
