import {Text} from "@rneui/themed";
import {Image, View} from "react-native";
import { AvatarCardStyles } from "../../styles/admin";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const hotelImage = require("../../assets/admin/hotel.jpg");

const toShortAddress = (address) => {
    if (address.length < 20) return address;
    return address.slice(0, 20) + "...";
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
                <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <FontAwesome5Icon name={"map-marker-alt"} size={15} color={"#000"} />
                    <Text style={AvatarCardStyles.description}>{toShortAddress(Address)}</Text>
                </View>
            </View>
        </View>
    );
};