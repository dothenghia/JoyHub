import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'
import { TEXTS } from "../../constants/theme";
export default function NotificationCard({notification}) {
    
    if(notification.type == 'warning')
        pic = require('../../assets/mod/alert.png')
    else 
        pic = require('../../assets/mod/notification_tick.png')

    return (
        <TouchableOpacity style={{height:130, width:'auto', padding:15, borderRadius:15,marginBottom:15, backgroundColor:'white', elevation:3}}>
            <View style={{flexDirection:'row'}}>
                <Image style={{ width:65, height:65, marginTop:15}} source = {pic}/>
                <View style={{ flex:1, marginLeft: 10, width:'auto', height:90 }}>
                    <JoyText  style={{fontWeight:'bold', fontSize: TEXTS.md, marginBottom:5}}>{"[" + notification.id + "]"}</JoyText >
                    <JoyText  style={{flexWrap:'wrap', fontSize: TEXTS.md}}>{notification.title}</JoyText >
                </View>
            </View>
            <JoyText  style={{fontSize: TEXTS.md, textAlign:'right', color:'#FF6400', fontWeight:'bold'}}>{notification.date + " minutes ago"}</JoyText >
        </TouchableOpacity>
    )

}
