import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import { COLORS, TEXTS } from "../../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SearchBar as RNESearchBar } from "@rneui/themed";
import { searchStyles, DetailHotelStyles } from "../../styles/admin";

export const TopBar = ({ Title, backIcon = false, navigation = null }) => {
    return (
        <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%", height: 42, marginTop: 10}}>
            {/* Back Button */}
            {backIcon ? (
                <TouchableOpacity
                    style={{ flex: 1, alignItems: "flex-start", marginTop: "auto", marginBottom: "auto" }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="angle-left"
                        brand
                        backgroundColor={COLORS.background_color}
                        color={COLORS.primary}
                        size={30}
                        style={{
                            flex: 1,
                            width: "100%",
                            verticalAlign: "middle",
                            marginBottom: "auto"
                        }}
                    />
                </TouchableOpacity>
            ) : (
                <View style={{ flex: 1, height: 30, width: 30 }} />
            )}
            {/* Title */}
            <Text
                style={{
                    flex: 3,
                    textAlign: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                    fontSize: TEXTS.xxl,
                    fontWeight: 700,
                    letterSpacing: -0.24,
                }}
            >
                {Title}
            </Text>
            {/* Empty */}
            <View style={{ flex: 1, height: 30, width: 30 }} />
        </View>
    );
};

export const SearchBar = ({ placeholder, onChangeText, value }) => {
    return (
        <RNESearchBar
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            round={true}
            lightTheme={true}
            containerStyle={searchStyles.container}
            inputContainerStyle={searchStyles.input_container}
            inputStyle={searchStyles.input_text}
        />
    )
};

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: "center", marginTop: "auto", marginBottom: "auto" }}
            onPress={onPress}
        >
            <Text style={{ fontSize: TEXTS.xl, fontWeight: "900" }}>{title}</Text>
        </TouchableOpacity>
    );
};

export const ConfirmBar = ({ onConfirm, onCancel, confirmText, cancelText }) => {
    return (
        <View style={DetailHotelStyles.confirmBar}>
            {/* Accept Button */}
            <TouchableOpacity style={DetailHotelStyles.confirmButton} onPress={onConfirm}>
                <Text style={DetailHotelStyles.buttonText}>{confirmText}</Text>
                <Icon
                    name="check"
                    brand
                    // backgroundColor={COLORS.background_color}
                    color={COLORS.white}
                    size={30}
                />
            </TouchableOpacity>
            {/* Reject Button */}
            <TouchableOpacity style={DetailHotelStyles.cancelButton} onPress={onCancel}>
                <Text style={DetailHotelStyles.buttonText}>{cancelText}</Text>
                <Icon
                    name="times"
                    brand
                    // backgroundColor={COLORS.background_color}
                    color={COLORS.white}
                    size={30}
                />
            </TouchableOpacity>
        </View>
    );
};
