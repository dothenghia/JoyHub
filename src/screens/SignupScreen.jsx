import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function SignupScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button
                    title="Go back to Login Screen"
                    onPress={() => navigation.navigate("LoginPage")}
                />
                <Text>Signup Screen</Text>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row" }}>
                <Button
                    title="Customer"
                    onPress={() => navigation.navigate("CustomerRegisterPage")}
                />

                <Button
                    title="Moderator"
                    onPress={() => navigation.navigate("ModeratorRegisterPage")}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({});
