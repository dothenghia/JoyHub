import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'
import { TEXTS } from "../../constants/theme";
export default function NotificationCard({notification}) {
    
    if(notification.type == 'warning')
        pic = require('../../assets/mod/alert.png')
    else if(notification.type == 'waiting')
        pic = require('../../assets/mod/book.png')
    else if(notification.type == 'warning') 
        pic = require('../../assets/mod/alert.png')
    else
        pic = require('../../assets/mod/bell.png')

    return (
        <TouchableOpacity style={{height:140, width:'auto', padding:15, borderRadius:15,marginBottom:15, backgroundColor:'white', elevation:3}}>
            <View style={{flexDirection:'row'}}>
                <Image style={{ width:65, height:65, marginTop:15}} source = {pic}/>
                <View style={{ flex:1, marginLeft: 10, width:'auto', height:90 }}>
                    <JoyText  style={{fontWeight:'bold', fontSize: TEXTS.md, marginBottom:5}}>{"[" + notification.title + "]"}</JoyText >
                    <JoyText  style={{flexWrap:'wrap', fontSize: TEXTS.md}}>{notification.content}</JoyText >
                </View>
            </View>
            <JoyText  style={{fontSize: TEXTS.md, textAlign:'right', color:'#FF6400', fontWeight:'bold'}}>{toTime(notification.date)}</JoyText >
        </TouchableOpacity>
    )

}


function toTime(date)
{
    const currentDate = new Date();
    seconds = Math.abs(currentDate - new Date(date)) / 1000;

    if(seconds < 60)
        return "Just now"
    if(seconds < 3600)
    {
        let minutes = parseInt(seconds/60)
        return minutes + ((minutes > 1) ? " minutes" : " minute" ) + " ago"
    }
    if(seconds < 86400)
    {
        let hours = parseInt(seconds/3600) 
        return hours + ((hours > 1) ? " hours" : " hour" ) + " ago"
    }
    if(seconds < (86400 * 2))
    {
        return "Yesterday"
    }
    else
    {
        let days = parseInt(seconds/86400) 
        return days + ((days > 1) ? " days" : " day" ) + " ago"
    }
}