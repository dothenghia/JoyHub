import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { TouchableOpacity } from "react-native";


export default function NotificationCard({Id, Title, Time, Type = 'Alert'}) {
    
    if(Type == 'Alert')
        pic = require('../../assets/mod/alert.png')
    else 
        pic = require('../../assets/mod/book.png')

    return (
        <TouchableOpacity style={{height:130, width:'auto', padding:15, borderRadius:15,marginBottom:15, backgroundColor:'white', elevation:3}}>
            <View style={{flexDirection:'row'}}>
                <Image style={{flex:1, width:65, height:65, marginTop:15}} source = {pic}/>
                <View style={{flex:4, marginLeft: 10, width:'auto', height:90 }}>
                    <Text style={{fontWeight:'bold', fontSize:15, marginBottom:5}}>{"[" + Id + "]"}</Text>
                    <Text style={{flexWrap: 'wrap', fontSize:15}}>{Title}</Text>
                </View>
            </View>
            <Text style={{fontSize:15, textAlign:'right', color:'#FF6400', fontWeight:'bold'}}>{Time + " minutes ago"}</Text>
        </TouchableOpacity>
    )

}
