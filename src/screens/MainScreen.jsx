import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function MainScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>CUSTOMER MAIN Screen</Text>
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
