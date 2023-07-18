import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


import React from 'react'

export default function VerifyWaitingCard({ Username, PhoneNumber, Room, NumOfRoom, CheckInDate, CheckOutDate, }) {
    return (

        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.icon} source={require('../../assets/icons/people_black.png')} />
                <Text style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: 15, fontWeight:'bold' }}> {Username} </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image style={styles.icon} source={require('../../assets/icons/phone.png')} />
                <Text style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: 15, fontWeight:'bold' }}> {PhoneNumber} </Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, marginTop:7 }}>
                <Image style={{ flex: 2.5, height: 'auto', minHeight:150, borderRadius: 15, borderWidth: 1, }} source={require('../../assets/images/demoHotel.jpg')} />
                <View style={{ flex: 5, }}>
                    <Text style={{ marginLeft: 10, justifyContent: 'center', marginTop: 0, fontSize: 17, fontWeight:'bold', color:'#FF6400' }}> {Room} </Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.date}> {'Check in   :  ' + CheckInDate} </Text>
                        <Text style={styles.date}> {'Check out :  ' + CheckOutDate} </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{ height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginLeft: 10,backgroundColor:'#FF6400'  }}>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color:'white', fontWeight:'bold' }}> Accept </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginLeft: 10,backgroundColor:'#888888'  }}>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color:'white', fontWeight:'bold'}}> Decline </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

    )
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
        color:'#888888'
    }

});