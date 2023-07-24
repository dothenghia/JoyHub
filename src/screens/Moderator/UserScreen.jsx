import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";

export default function UserScreen({ navigation }) {

    const [hotelName,setHotelName] = useState('Harley House')
    const [hotelNameBlock,setHotelNameBlock] = useState('View')

    const changeHotelName = (newName) =>
    {
        setHotelName(newName);
    }

    return (
        <ScrollView >
            <View style={{ flex: 1 }}>
                <Image style={{ height: 250, width: 'auto' }} source={require('../../assets/images/demoHotel.jpg')} />
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
                            {
                                (hotelNameBlock === 'View') ? (<Text style={{ flex: 7, fontSize: 31, fontWeight: 'bold' }}>{hotelName}</Text>) : 
                                (<TextInput onChangeText={changeHotelName} style={{ flex: 7, fontSize: 31, fontWeight: 'bold' }}>{hotelName}</TextInput>)
                                
                                
                            }
                            
                            <TouchableOpacity onPress={() => { (hotelNameBlock === 'View') ? setHotelNameBlock('TextInput') : setHotelNameBlock('View') /*and request for changing */ }}>
                                <Image style={{ marginTop: 10, height: 25, width: 25 }} source={ (hotelNameBlock === 'View') ? require('../../assets/mod/pencil.png') : require('../../assets/mod/star.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40 }}>

                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/location_orange.png')} />

                            <Text style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'Location:'}</Text>
                            <Text style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'so 1 duong vao tim em'}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30 }}>
                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/star.png')} />

                            <Text style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'Rating:'}</Text>
                            <Text style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'4.2'}</Text>
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</Text>
                        <Text style={{ fontSize: 15, marginBottom: 30, textAlign: 'justify' }} >
                            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Yeu em khong loi thoat.'}
                        </Text>
                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Account</Text>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}>
                            <Text style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'username:'}</Text>
                            <Text style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'Harley House'}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 10 }}>
                            <Text style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'phone:'}</Text>
                            <Text style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'09000112233'}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 30 }}>
                            <Text style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'email:'}</Text>
                            <Text style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'harleyverygud@gmail.com'}</Text>
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Chỉnh sửa thông tin cá nhân'}</Text>
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Nạp/Rút'}</Text>
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Lịch sử và thống kê'}</Text>
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }} onPress={()=>{navigation.navigate('LoginPage')}}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Đăng xuất'}</Text>
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />

              





                </View>

            </View>

        </ScrollView>
    );
}



const styles = StyleSheet.create({});
