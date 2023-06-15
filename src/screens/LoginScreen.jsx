import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Login Screen</Text>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button
                    title="Sign up"
                    onPress={() => navigation.navigate("SignupPage")}
                />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({});
