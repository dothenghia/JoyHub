import React from "react";
import { StyleSheet, View, Button } from "react-native";
import JoyText from '../../components/general/JoyText'

export default function UserScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <JoyText>CUSTOMER USER Screen</JoyText>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row" }}>
                <Button
                    title="Log out"
                    onPress={() => navigation.navigate("LoginPage")}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({});
