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
import { searchStyles } from "../../styles/admin";

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
                    flex: 2,
                    textAlign: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                    fontSize: 25,
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
