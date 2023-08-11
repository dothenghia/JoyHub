import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, Alert, Modal, Pressable } from "react-native";
import JoyText from '../../components/general/JoyText'

export default function WalletScreen({ navigation }) {

    hotelName = 'HARLEY HOUSE'
    joycoin = 9999999
   
    return (
        <ScrollView >

            <View style={{ flex: 1 }}>
                <Image style={{ height: 250, width: 'auto' }} source={require('../../assets/mod/demoHotel.jpg')} />
            </View>

            <View style={{
                flex: 2,
                marginTop: -50,
                backgroundColor: '#888888',
                borderTopLeftRadius: 25, borderTopRightRadius: 25
            }}>

                <View style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                        <View style={{ flexDirection: 'row', marginTop: 45 }}>
                               <JoyText  style={{ flex: 7, fontSize: 31, fontWeight: 'bold' }}>{hotelName}</JoyText >
                            
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40 }}>

                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/location_orange.png')} />

                            <JoyText  style={{ marginLeft: 10, flex: 6, fontSize: 17}}>{'JoyCoin: '}</JoyText >
                            <JoyText  style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{joycoin}</JoyText >

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30 }}>
                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/star.png')} />

                            <JoyText  style={{marginLeft: 10, flex: 6, fontSize: 17 }}>{'Bank: '}</JoyText >
                            <JoyText  style={{marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'845122142179'}</JoyText >
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText  style={{ fontSize: 25, fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Nạp/Rút</JoyText >
                        <View style ={{flexDirection:'row'}}>
                            
                            <TouchableOpacity style = {{width:120, height:50, borderRadius:10, borderWidth:1, marginBottom: 20, marginRight:15}} onPress={withdraw()} >
                                <JoyText  style={{fontSize:20, textAlign:'center', paddingTop:7}}>Nạp</JoyText >
                            </TouchableOpacity>
                            <TouchableOpacity style = {{width:120, height:50, borderRadius:10, borderWidth:1, marginBottom: 20}} >
                                <JoyText  style={{fontSize:20, textAlign:'center', paddingTop:7}}>Rút</JoyText >
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText  style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Liên kết ngân hàng'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />
                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText  style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Hủy liên kết ngân hàng'}</JoyText >
                    </TouchableOpacity>
                    

                    


                </View>

            </View>

        </ScrollView>
    );
}

function withdraw()
{
    
}


const styles = StyleSheet.create({});
