import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ToastAndroid } from 'react-native'
import JoyText from '../../components/general/JoyText'
import { TEXTS } from "../../constants/theme";
import React from 'react'
import MController from '../../controllers/moderatorController';

export default function CheckoutCard({bookingInfo}) {
    const [invisible,setInvisible] = useState(false)
    
    if(!invisible)
    return (

        <View style={styles.card}>

            <View style={{ flexDirection: 'row', padding: 10, marginTop: 7 }}>
                <Image style={{ flex: 3.5, height: 'auto', minHeight: 170, borderRadius: 15, borderWidth: 1, }} source={{uri : bookingInfo.image}} />
                <View style={{ flex: 5, }}>
                    <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 0, fontSize: TEXTS.xl, fontWeight: 'bold', color: '#FF6400' }}> {bookingInfo.room} </JoyText >

                    
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image style={styles.icon} source={require('../../assets/mod/checkout.png')} />
                        <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: TEXTS.md, fontWeight: 'bold' }}> {bookingInfo.checkout} </JoyText >
                    </View>
                    
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={styles.icon} source={require('../../assets/mod/phone.png')} />
                        <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: TEXTS.md, fontWeight: 'bold' }}> {bookingInfo.phone} </JoyText >
                    </View>
                    
                    <View style={{ flexDirection: 'row', marginTop: 5 ,height:50}}>
                        <Image style={styles.icon} source={require('../../assets/mod/people_black.png')} />
                        <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: TEXTS.md, fontWeight: 'bold', marginRight: 10 }}> {shortUsername(bookingInfo.customer)} </JoyText >
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity style={{ height: 40, flex: 1, borderRadius: 20, marginLeft: 10, backgroundColor: '#FF6400' }} onPress={
                            async () => { 
                                await MController("CHECKOUT", bookingInfo["id"])
                                ToastAndroid.show('Check out successfully', ToastAndroid.SHORT) 
                                setInvisible(true) 
                            }
                        }>
                            <JoyText  style={{ textAlign: 'center', paddingTop: 7, color: 'white', fontWeight: 'bold', fontSize: TEXTS.lg }}> {"Check Out"} </JoyText >
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>

        </View>

    )
}

const shortUsername = (Username) => {
    if(Username.length > 25)
        return "..." + Username.substr(Username.length-30);
    else
        return Username
    }

const styles = StyleSheet.create({
    card:
    {

        height: 'auto',
        minHeight: 200,
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
        fontSize: 12,
        color: '#888888'
    }

});