import { View, Text , StyleSheet} from "react-native";
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Main() {
    return (
        <View>
            <Header/>
            <Text style={ textStyle.heading }>Main</Text>
            <Footer/>
        </View>
    );
}

const textStyle = StyleSheet.create(
    {
        heading : {
            fontSize : 20,
            fontWeight : "bold",
            textAlign : "center",
            color : "white"
        }
    }
)