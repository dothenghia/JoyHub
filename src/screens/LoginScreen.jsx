import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";



export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        if (username === "admin" && password === "admin") {
            alert("Login successfully");
            navigation.navigate("AdminMain");
        }
        else {
            alert('Username or password is incorrect');
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Login Screen</Text>
                <View style={styles.inputView} >
                    <TextInput style={styles.TextInput}
                        placeholder="Username"
                        placeholderTextColor={"#003f5c"}
                        onChangeText={(username) => setUsername(username)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.TextInput}

                        placeholder="Password"
                        placeholderTextColor={"#003f5c"}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginText}>LOGIN</Text>

                </TouchableOpacity>
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

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "#F9F9F9",
        borderRadius: 12,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn:
    {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    }
});
