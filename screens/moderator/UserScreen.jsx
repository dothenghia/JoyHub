import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'
import { TEXTS, COLORS } from "../../constants/theme";
import modStyles from "../../styles/mod";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
export default function UserScreen({ navigation }) {

    const [hotelName, setHotelName] = useState('Harley House')
    const [hotelNameBlock, setHotelNameBlock] = useState('View')

    const changeHotelName = (newName) => {
        setHotelName(newName);
    }
   
    return (
        <ScrollView style={modStyles.page_container}>

            <View style={{width: '100%', height: 250}}>
                <ImageBackground
                    source={require('../../assets/mod/demoHotel.jpg')}
                    resizeMode="cover"
                    style={{flex: 1, justifyContent: 'center',}}
                >
                    <TouchableOpacity
                        style={ modStyles.top_bar_button}
                        onPress={
                            () => { navigation.goBack() }
                        }
                    >
                        <FontAwesome5Icon name={"arrow-left"} size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                </ImageBackground>
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
                                (hotelNameBlock === 'View') ? (<JoyText  style={{ flex: 7, fontSize: TEXTS["5xl"], fontWeight: 'bold' }}>{hotelName}</JoyText >) :
                                    (<TextInput onChangeText={changeHotelName} style={{ flex: 7, fontSize: 31, fontWeight: 'bold' }}>{hotelName}</TextInput>)
                            }

                            <TouchableOpacity onPress={() => { (hotelNameBlock === 'View') ? setHotelNameBlock('TextInput') : setHotelNameBlock('View') /*and request for changing */ }}>
                                <Image style={{ marginTop: 10, height: 25, width: 25 }} source={(hotelNameBlock === 'View') ? require('../../assets/mod/pencil.png') : require('../../assets/mod/star.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40 }}>

                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/location_orange.png')} />

                            <JoyText  style={{ marginLeft: 10, flex: 6, fontSize: TEXTS.lg }}>{'Location:'}</JoyText >
                            <JoyText  style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{'so 1 duong vao tim em'}</JoyText >

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30 }}>
                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/star.png')} />

                            <JoyText  style={{ marginLeft: 10, flex: 6, fontSize: TEXTS.lg }}>{'Rating:'}</JoyText >
                            <JoyText  style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{'4.2'}</JoyText >
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText  style={{ fontSize: TEXTS["3xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</JoyText >
                        <JoyText  style={{ fontSize: TEXTS.lg, marginBottom: 30, textAlign: 'justify' }} >
                            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Yeu em khong loi thoat.'}
                        </JoyText >
                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText  style={{ fontSize: TEXTS["3xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Account</JoyText >
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}>
                            <JoyText  style={{ marginLeft: 0, flex: 6, fontSize: TEXTS.lg }}>{'username:'}</JoyText >
                            <JoyText  style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{'Harley House'}</JoyText >
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 10 }}>
                            <JoyText  style={{ marginLeft: 0, flex: 6, fontSize: TEXTS.lg }}>{'phone:'}</JoyText >
                            <JoyText  style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{'09000112233'}</JoyText >
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 30 }}>
                            <JoyText  style={{ marginLeft: 0, flex: 6, fontSize: TEXTS.lg }}>{'email:'}</JoyText >
                            <JoyText  style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{'harleyverygud@gmail.com'}</JoyText >
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText  style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Chỉnh sửa thông tin cá nhân'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }} onPress={() => { navigation.navigate('WalletPage') }}>
                        <JoyText  style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Nạp/Rút'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText  style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Lịch sử và thống kê'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }} onPress={() => { navigation.navigate('LoginPage') }}>
                        <JoyText  style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Đăng xuất'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }} onPress={() => {navigation.navigate('AddRoomPage')}} >
                        <JoyText  style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'TEST BTN'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />


                </View>

            </View>

        </ScrollView>
    );
}



const styles = StyleSheet.create({});
