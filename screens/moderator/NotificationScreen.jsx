import React from "react";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar, RefreshControl } from "react-native";
import TopBar from "../../components/moderator/TopBar";
import NotificationCard from "../../components/moderator/NotificationCard";
import modStyles from "../../styles/mod"
import JoyText from '../../components/general/JoyText'
import MController from "../../controllers/moderatorController";
import LoadingModal from '../../components/general/LoadingModal'


export default function NotificationScreen({navigation}) {
    
    const [notifications,setNotifications] = useState([])

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchNotifications = async () => {
            setLoading(true);
            let data = await MController('GETNOTIFICATIONS')
            setNotifications(data)
            setLoading(false);
        }

        fetchNotifications()
    }, [])

    const onRefresh = useCallback(() => {
        const fetchHotelList = async () => {
            setRefreshing(true);
            let data = await MController('GETNOTIFICATIONS')
            setNotifications(data)
            setRefreshing(false);
        }
        fetchHotelList()
    }, []);


    return (
        <View style={modStyles.page_container}>
            <LoadingModal isLoading={loading} />
            <ScrollView refreshControl={ // DÙNG ĐỂ VUỐT XUỐNG RELOAD TRANG
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#FF6400']}
            />
        }>
                
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
            <NotificationCard key={i} notification={notifications[i]}/>
        )
    }
    return (
        <View style={{marginTop:50, ...modStyles.page_padding}}>
            {res}
        </View>
    )
}

const styles = StyleSheet.create({});
