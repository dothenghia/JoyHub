import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ModRegisterScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>MODERATOR Register Screen</Text>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button
                    title="Go to MAIN Screen"
                    onPress={() => navigation.navigate("CustomerMain")}
                />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({});
