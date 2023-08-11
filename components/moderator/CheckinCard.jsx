import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import JoyText from '../../components/general/JoyText'
import { TEXTS } from "../../constants/theme";
import React from 'react'

export default function CheckinCard({ Username, PhoneNumber, Room, CheckInDate }) {
    return (

        <View style={styles.card}>

            <View style={{ flexDirection: 'row', padding: 10, marginTop: 7 }}>
                <Image style={{ flex: 3.5, height: 'auto', minHeight: 170, borderRadius: 15, borderWidth: 1, }} source={require('../../assets/mod/demoHotel.jpg')} />
                <View style={{ flex: 5, }}>
                    <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 0, fontSize: TEXTS.xl, fontWeight: 'bold', color: '#FF6400' }}> {Room} </JoyText >

                    
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image style={styles.icon} source={require('../../assets/mod/checkin.png')} />
                        <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: TEXTS.md, fontWeight: 'bold' }}> {CheckInDate} </JoyText >
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={styles.icon} source={require('../../assets/mod/phone.png')} />
                        <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: TEXTS.md, fontWeight: 'bold' }}> {PhoneNumber} </JoyText >
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5, height:50 }}>
                        <Image style={styles.icon} source={require('../../assets/mod/people_black.png')} />
                        <JoyText  style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: TEXTS.md, fontWeight: 'bold', marginRight: 10 }}> {shortUsername(Username)} 
                        </JoyText >
                    </View>
                    
                    

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity style={{ height: 40, flex: 1, borderRadius: 20, marginLeft: 10, backgroundColor: '#FF6400' }}>
                            <JoyText  style={{ textAlign: 'center', paddingTop: 7, color: 'white', fontWeight: 'bold', fontSize: TEXTS.lg }}> {"Check In"} </JoyText >
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </View>

    )
}


const shortUsername = (Username) => {
    if(Username.length > 25)
        return "..." + Username.substr(Username.length-25);
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