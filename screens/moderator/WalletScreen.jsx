import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, Alert, Modal, Pressable } from "react-native";


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
                               <Text style={{ flex: 7, fontSize: 31, fontWeight: 'bold' }}>{hotelName}</Text>
                            
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40 }}>

                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/location_orange.png')} />

                            <Text style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'JoyCoin:'}</Text>
                            <Text style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{joycoin}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30 }}>
                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/star.png')} />

                            <Text style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'Rating:'}</Text>
                            <Text style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'4.2'}</Text>
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Nạp/Rút</Text>
                        <View style ={{flexDirection:'row'}}>
                            
                            <TouchableOpacity style = {{width:120, height:50, borderRadius:10, borderWidth:1, marginBottom: 20, marginRight:15}} onPress={withdraw()} >
                                <Text style={{fontSize:20, textAlign:'center', paddingTop:7}}>Nạp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {{width:120, height:50, borderRadius:10, borderWidth:1, marginBottom: 20}} >
                                <Text style={{fontSize:20, textAlign:'center', paddingTop:7}}>Rút</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    

                    


                </View>

            </View>

        </ScrollView>
    );
}

function withdraw()
{
    
}


const styles = StyleSheet.create({});
