import { View, Text, TouchableOpacity, Image, StyleSheet, ToastAndroid } from 'react-native'
import JoyText from '../../components/general/JoyText'
import { TEXTS } from "../../constants/theme";
import React from 'react'
import MController from '../../controllers/moderatorController';
import { useState } from 'react';
export default function VerifyWaitingCard({ bookingInfo }) {
    const [invisible,setInvisible] = useState(false)

    if(!invisible)
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.icon} source={require('../../assets/mod/people_black.png')} />
                <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: TEXTS.lg, fontWeight:'bold' }}> {bookingInfo.customer} </JoyText >
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image style={styles.icon} source={require('../../assets/mod/phone.png')} />
                <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: TEXTS.lg, fontWeight:'bold' }}> {bookingInfo.phone} </JoyText >
            </View>
            <View style={{ flexDirection: 'row', padding: 10, marginTop:7 }}>
                <Image style={{ flex: 2.5, height: 'auto', minHeight:150, borderRadius: 15, borderWidth: 1, }} source={{uri : bookingInfo.image}} />
                <View style={{ flex: 5, }}>
                    <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 0, fontSize: TEXTS.xl, fontWeight:'bold', color:'#FF6400' }}> {bookingInfo.room} </JoyText >
                    <View style={{ marginTop: 10 }}>
                        <JoyText  style={styles.date}> {'Check in   :  ' + bookingInfo.checkin} </JoyText >
                        <JoyText  style={styles.date}> {'Check out :  ' + bookingInfo.checkout} </JoyText >
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{ height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginLeft: 10,backgroundColor:'#FF6400'  }} onPress={async ()=>{await MController("ACCEPTVERIFY", {id: bookingInfo["id"] , customer_id: bookingInfo["customer_id"], room_id : bookingInfo["room_id"]}) ; ToastAndroid.show('Accepted', ToastAndroid.SHORT) ; setInvisible(true) }}>
                            <JoyText  style={{ textAlign: 'center', paddingTop: 10, color:'white', fontWeight:'bold', fontSize: TEXTS.md }}> Accept </JoyText >
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginLeft: 10,backgroundColor:'#888888'  }} onPress={async ()=>{await MController("REMOVEVERIFY", {id: bookingInfo["id"] , customer_id: bookingInfo["customer_id"], room_id : bookingInfo["room_id"]}); ToastAndroid.show('Removed', ToastAndroid.SHORT) ; setInvisible(true) }}> 
                            <JoyText  style={{ textAlign: 'center', paddingTop: 10, color:'white', fontWeight:'bold', fontSize: TEXTS.md}}> Decline </JoyText >
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

    )
    else return (<View/>)
}


const styles = StyleSheet.create({
    card:
    {
        height: 'auto',
        minHeight: 250,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },

    icon:
    {
        height: 22,
        width: 22,
        marginLeft: 10,
        marginTop: 5,
        maxHeight: 22,
        maxWidth: 22,

    },

    date:
    { 
        marginLeft: 10, 
        justifyContent: 'center', 
        marginTop: 0, 
        fontSize: TEXTS.md,
        color:'#888888'
    }

});