import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


import React from 'react'

export default function CheckoutCard({ Username, PhoneNumber, Room, CheckInDate }) {
    return (

        <View style={styles.card}>

            <View style={{ flexDirection: 'row', padding: 10, marginTop: 7 }}>
                <Image style={{ flex: 3.5, height: 'auto', minHeight: 170, borderRadius: 15, borderWidth: 1, }} source={require('../../assets/images/demoHotel.jpg')} />
                <View style={{ flex: 5, }}>
                    <Text style={{ marginLeft: 10, justifyContent: 'center', marginTop: 0, fontSize: 17, fontWeight: 'bold', color: '#FF6400' }}> {Room} </Text>

                    
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image style={styles.icon} source={require('../../assets/icons/checkout.png')} />
                        <Text style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: 15, fontWeight: 'bold' }}> {CheckInDate} </Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={styles.icon} source={require('../../assets/icons/phone.png')} />
                        <Text style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: 15, fontWeight: 'bold' }}> {PhoneNumber} </Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row', marginTop: 5 ,height:50}}>
                        <Image style={styles.icon} source={require('../../assets/icons/people_black.png')} />
                        <Text style={{ marginLeft: 10, justifyContent: 'center', marginTop: 5, fontSize: 15, fontWeight: 'bold' }}> {shortUsername(Username)} </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity style={{ height: 40, flex: 1, borderRadius: 20, marginLeft: 10, backgroundColor: '#FF6400' }}>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> {"Check Out"} </Text>
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