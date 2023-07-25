import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { COLORS, TEXTS } from "../../constants/theme";

export const TopBar = ({ Title, backIcon = false, navigation = null }) => {
    return (
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            {backIcon ? (
                <TouchableOpacity
                    style={{ flex: 1, alignItems: "flex-start", marginTop: 10 }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ height: 30, width: 30, marginTop: 7 }}
                        source={require("../../assets/mod/arrow.png")}
                    />
                </TouchableOpacity>
            ) : (
                <View style={{ flex: 1, height: 30, width: 30 }} />
            )}
            <Text style={{ flex: 2, textAlign: "center", marginTop: 10, fontSize: 25 }}>
                {Title}
            </Text>
            <View style={{ flex: 1, height: 30, width: 30}} />
        </View>
    );
};
