import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Image, View, Text, StyleSheet} from "react-native";
import {AvatarCardStyles, HotelCardStyles, ReportCardStyles} from "../../styles/admin";
import {COLORS, TEXTS} from "../../constants/theme";

const hotelImage = require("../../assets/admin/hotel.jpg");

const toShortAddress = (address) => {
    if (address.length < 20) return address;
    return address.slice(0, 20) + "...";
}

export const AvatarCard = ({Title, ImageUri, Address}) => {
    return (
        <View style={AvatarCardStyles.container}>
            {/* Avatar part */}
            <View style={AvatarCardStyles.imageContainer}>
                <Image source={hotelImage} style={AvatarCardStyles.avatarImage}/>
            </View>
            {/* Information part */}
            <View style={AvatarCardStyles.textContainer}>
                <Text style={AvatarCardStyles.title}>{Title}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "auto",
                    marginBottom: "auto"
                }}>
                    <Icon name="map-marker-outline" style={AvatarCardStyles.iconStyle}/>
                    <Text style={AvatarCardStyles.description}>{toShortAddress(Address)}</Text>
                </View>
            </View>
        </View>
    );
};

export const HotelCard = ({Title, ImageUri, Address}) => {
    return (
        <View style={HotelCardStyles.container}>
            {/* Avatar part */}
            <Image source={hotelImage} style={HotelCardStyles.image}/>
            {/* Information part */}
            <View style={HotelCardStyles.textContainer}>
                <Text style={HotelCardStyles.title}>{Title}</Text>
                <View style={HotelCardStyles.descriptionContainer}>
                    <Icon name="map-marker-outline" style={HotelCardStyles.iconStyle}/>
                    <Text style={HotelCardStyles.description}>{toShortAddress(Address)}</Text>
                </View>
            </View>
        </View>
    );
}

// ReportCard.js
export const ReportCard = ({hotel, title, date, isRead}) => {
    // Change style based on isRead
    const containerStyle = isRead ? {...ReportCardStyles.container, ...ReportCardStyles.container_read} : ReportCardStyles.container;
    const hotelStyle = isRead ? {...ReportCardStyles.hotel, ...ReportCardStyles.hotel_read} : ReportCardStyles.hotel;
    const titleStyle = isRead ? {...ReportCardStyles.title, ...ReportCardStyles.title_read} : ReportCardStyles.title;

    return (
        <View style={containerStyle}>
            {/* Hotel name */}
            <Text style={hotelStyle}>{hotel}</Text>
            {/* Title of report */}
            <View style={ReportCardStyles.titleContainer}>
                <Text style={titleStyle}>{title.toUpperCase()}</Text>
                {/* Unread icon */}
                {!isRead && <Icon name="circle" style={ReportCardStyles.icon} />}
            </View>
            {/* Date of report*/}
            <Text style={ReportCardStyles.date}>{date}</Text>
        </View>
    );
}
