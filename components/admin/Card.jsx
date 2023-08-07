import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image, View, Text, Animated, Easing } from "react-native";
import { AvatarCardStyles, HotelCardStyles, ReportCardStyles, RoomStyles } from "../../styles/admin";
// import { Easing } from "react-native";
import { useRef, useEffect, useState } from "react";

const hotelImage = require("../../assets/admin/hotel.jpg");

const toShort = (string, len) => {
    if (string.length <= len) return string;
    return string.slice(0, len) + "...";
}

export const AvatarCard = ({ Title, ImageUri, Address }) => {
    return (
        <View style={AvatarCardStyles.container}>
            {/* Avatar part */}
            <View style={AvatarCardStyles.imageContainer}>
                <Image source={hotelImage} style={AvatarCardStyles.avatarImage} />
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
                    <Icon name="map-marker-outline" style={AvatarCardStyles.iconStyle} />
                    <Text style={AvatarCardStyles.description}>{toShort(Address, 20)}</Text>
                </View>
            </View>
        </View>
    );
};

export const HotelCard = ({ Title, ImageUri, Address, WaitingAmount = 0 }) => {
    const convertWaitingAmount = (amount) => {
        if (amount < 10) return "0" + amount;
        if (amount > 99) return "99+";
        return amount;
    }
    return (
        <View style={HotelCardStyles.container}>
            {/* Avatar part */}
            <Image source={hotelImage} style={HotelCardStyles.image} />
            {/* Waiting amount */}
            {WaitingAmount > 0 &&
                <View style={HotelCardStyles.waitingContainer}>
                    <Text style={HotelCardStyles.waitingText}>{convertWaitingAmount(WaitingAmount)}</Text>
                </View>
            }
            {/* Information part */}
            <View style={HotelCardStyles.textContainer}>
                <Text style={HotelCardStyles.title}>{Title}</Text>
                <View style={HotelCardStyles.descriptionContainer}>
                    <Icon name="map-marker-outline" style={HotelCardStyles.iconStyle} />
                    <Text style={HotelCardStyles.description}>{toShort(Address,20)}</Text>
                </View>
            </View>

        </View>
    );
}

// ReportCard.js
export const ReportCard = ({ hotel, title, date, isRead }) => {
    // Change style based on isRead
    const containerStyle = isRead ? { ...ReportCardStyles.container, ...ReportCardStyles.container_read } : ReportCardStyles.container;
    const hotelStyle = isRead ? { ...ReportCardStyles.hotel, ...ReportCardStyles.hotel_read } : ReportCardStyles.hotel;
    const titleStyle = isRead ? { ...ReportCardStyles.title, ...ReportCardStyles.title_read } : ReportCardStyles.title;

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

export const RoomCard = ({ Title, ImageUri, Price }) => {
    return (
        <View style={RoomStyles.container}>
            <Image source={hotelImage} style={RoomStyles.image} />
            <View style={RoomStyles.textContainer}>
                <Text style={RoomStyles.title}>{toShort(Title, 13)}</Text>
                <View style={RoomStyles.descriptionContainer}>
                    <Text style={RoomStyles.price}>{Price + " VND"}</Text>
                    <Text style={RoomStyles.description}>/night</Text>
                </View>
            </View>
        </View>
    );
}
