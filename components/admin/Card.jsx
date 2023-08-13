import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image, View, Text, Dimensions } from "react-native";
import JoyText from "../../components/general/JoyText";
import { AvatarCardStyles, HotelCardStyles, ReportCardStyles, RoomStyles, ReportDetailStyles } from "../../styles/admin";
// import { Easing } from "react-native";
import rnTextSize from "react-native-text-size";
import { TEXTS } from "../../constants/theme";

const hotelImage = require("../../assets/admin/hotel.jpg");

const toShort = (string, len) => {
    if (string.length <= len) return string;
    return string.slice(0, len) + "...";
}
// crop string to width
class CropString {
    state = {
        charWidth: 0,
        maxChar: 0,
    }
    constructor(string, width, size) {
        this.string = string;
        this.width = width;
        this.size = size;
        // this.charWidth = getCharWidth(string[0], size);
        // this.maxChar = Math.floor(width / this.charWidth);
    }
    async componentDidMount() {
        const windowWidth = Dimensions.get("window").width;
        const size = await rnTextSize.measure({
            text: this.string,
            width: windowWidth,
            fontSize: this.size
        });
        this.charWidth = size.width;
        this.maxChar = Math.floor(this.width / this.charWidth);
        this.setState({
            charWidth: this.charWidth,
            maxChar: this.maxChar,
        });
    }
    crop() {
        const { charWidth, maxChar } = this.state;
        if (this.string.length <= maxChar) return this.string;
        console.log(charWidth, maxChar)
        return this.string.slice(0, maxChar) + "...";
    }
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
                <JoyText style={AvatarCardStyles.title} numberOfLines={1}>{Title}</JoyText>
                <View style={AvatarCardStyles.descriptionContainer}>
                    <Icon name="map-marker-outline" style={AvatarCardStyles.iconStyle} />
                    <JoyText style={AvatarCardStyles.description} numberOfLines={1}>{Address}</JoyText>
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
                    <JoyText style={HotelCardStyles.waitingText}>{convertWaitingAmount(WaitingAmount)}</JoyText>
                </View>
            }
            {/* Information part */}
            <View style={HotelCardStyles.textContainer}>
                <JoyText style={HotelCardStyles.title}>{Title}</JoyText>
                <View style={HotelCardStyles.descriptionContainer}>
                    <Icon name="map-marker-outline" style={HotelCardStyles.iconStyle} />
                    <JoyText style={HotelCardStyles.description} numberOfLines={1}>{Address}</JoyText>
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
                    <JoyText style={RoomStyles.price}>{Price + " VND"}</JoyText>
                    <JoyText style={RoomStyles.description}>/night</JoyText>
                </View>
            </View>
        </View>
    );
}

export const ReportDetailCard = ({ IdBooking, Date, Title, Description }) => {
    return (
        <View style={ReportDetailStyles.container}>
            <View style={ReportDetailStyles.idContainer}>
                {/* Id booking */}
                <JoyText style={ReportDetailStyles.idText}>{IdBooking}</JoyText>
                <JoyText style={ReportDetailStyles.date}>{Date}</JoyText>
                {/* Date */}
            </View>
            {/* Report Title*/}
            <JoyText style={ReportDetailStyles.title}>{Title}</JoyText>
            {/* Report Description */}

            <JoyText style={ReportDetailStyles.descriptionText}>
                {Description}
            </JoyText>

        </View>
    );
}
