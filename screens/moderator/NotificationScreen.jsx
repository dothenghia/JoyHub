import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import TopBar from "../../components/moderator/TopBar";
import NotificationCard from "../../components/moderator/NotificationCard";
import modStyles from "../../styles/mod"
import JoyText from '../../components/general/JoyText'
import MController from "../../controllers/moderatorController";
export default function NotificationScreen({navigation}) {
    
    const [notifications,setNotifications] = useState([])

    useEffect(() => {
        const fetchNotifications = async () => {
            let data = await MController('GETNOTIFICATIONS')
            setNotifications(data)
        }

        fetchNotifications()
    }, [])

    return (
        <View style={modStyles.page_container}>
            <ScrollView >
                <TopBar Title = "Notification" Style={modStyles.page_padding} navigation={navigation}/>
                <NotificationArea notifications={notifications}/>
            </ScrollView>
        </View >
    );
}


function NotificationArea({notifications})
{
    res = []
    for (let i = 0;i<notifications.length;++i)
    {
        res.push(
            <NotificationCard notification={notifications[i]}/>
        )
    }
    return (
        <View style={{marginTop:50, ...modStyles.page_padding}}>
            {res}
        </View>
    )
}

const styles = StyleSheet.create({});
