import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { COLORS, TEXTS } from "../../constants/theme";
import JoyText from '../../components/general/JoyText'
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import JoyIcon from '../../components/general/JoyIcon'
import modStyles from "../../styles/mod";
const Icons = {
    area: "expand",
    bed: "bed-outline",
    capacity: "person-outline",
    free_wifi: "wifi-outline",
    window: "grid-outline",
    air_conditioner: "snow-outline",
};


export default function RoomAmenityCard({ amenities }) {



    const n = amenities.length;


    const res = (
        <View style={modStyles.section_container}>
            <JoyText style={{fontSize : TEXTS["4xl"], fontWeight:'bold', marginTop: 20}}>Hotel facilities</JoyText>
            <FlatList style={{ height: 120, marginTop: 8 }}
                horizontal data={amenities}

                renderItem={({ item }) => (
                    <View style={styles.card_container} >
                        <View style={styles.image_wrapper}>
                            <JoyIcon name={item.label} size = {35} />
                        </View>
                        <JoyText style={styles.text}>{item.value}</JoyText>
                    </View>
                )}
            >
            </FlatList>
        </View>)



    return res;


}

const styles = StyleSheet.create({
    card_container: {
        width: 92,
        height: 100,
        marginRight: 8,
        backgroundColor: '#EEEEEE',
        alignSelf: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
    },
    image_wrapper: {
        width: '100%',
        height: 40,
        marginTop: 14,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    text: {
        marginBottom: 12,
        textAlign: 'center',
        fontSize: TEXTS.sm,
    },
});



const DetailRoomStyles = StyleSheet.create({
    roomNameContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 10,
        marginTop: 10,
        gap: 6
    },
    roomName: {
        fontSize: TEXTS['3xl'],
        fontWeight: "900",
    },
    roomPrice: {
        fontSize: TEXTS['2xl'],
        fontWeight: "700",
    },
    roomDetailsContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 10,
        gap: 10,
    },
    roomInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
        gap: 20,
        width: "100%",
    },
    roomInfoField: {
        flex: 1,
        flexDirection: "row",
        gap: 3,
        fontSize: TEXTS.md,
        fontWeight: "600",
        color: COLORS.heading_text,
        justifyContent: "flex-start",
        // borderWidth: 1,
        borderColor: COLORS.input_border,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginRight: 20,
    },
    roomInfoLabel: {
        fontSize: TEXTS.xl,
        fontWeight: "600",
        color: COLORS.text,
        justifyContent: "center",
    },
    roomInfoIcon: {
        fontSize: TEXTS['3xl'],
        fontWeight: "600",
        color: COLORS.text,
        justifyContent: "center",
    },
    roomAmenContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 6,
        gap: 10,
        width: "100%",
    },
    roomAmenField: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 3,
        backgroundColor: COLORS.disable,
        marginRight: 10,
        gap: 10,
    },
    roomAmenLabel: {
        fontSize: TEXTS.md,
        fontWeight: "600",
        color: COLORS.text,

    },
    roomAmenIcon: {
        fontSize: TEXTS['3xl'],

        fontWeight: "600",
        color: COLORS.text,
        justifyContent: "center",
    },
    roomFieldContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 5,
        gap: 10,
    },
    roomFieldLabel: {
        fontSize: TEXTS.xxl,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    roomField: {
        fontSize: TEXTS.md,
        color: COLORS.text,
        textAlign: "justify"
    },
});