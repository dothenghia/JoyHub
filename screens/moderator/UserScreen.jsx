import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'
import { TEXTS, COLORS } from "../../constants/theme";
import modStyles from "../../styles/mod";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

//CONTROLLER
import MController from "../../controllers/moderatorController";

export default function UserScreen({ navigation }) {


    const [modInfo, setModInfo] = useState(null)
    const [hotelName, setHotelName] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const [description, setDescription] = useState(null)
    const [address, setAddress] = useState(null)
    const [phone, setPhone] = useState(null)
    useEffect(() => {
        const fetchModInfo = async () => {
            let data = await MController('GETMODINFO')
            setModInfo(data)
            setHotelName(data.hotelName)
            setDescription(data.description)
            setAddress(data.address)
            setPhone(data.phone)
        }
        fetchModInfo()
    }, [])



    const changeHotelName = (newName) => {
        setHotelName(newName);
    }



    return (
        <ScrollView style={modStyles.page_container}>

            <View style={{ width: '100%', height: 250 }}>
                <ImageBackground
                    source={require('../../assets/mod/demoHotel.jpg')}
                    resizeMode="cover"
                    style={{ flex: 1, justifyContent: 'center', }}
                >
                    <TouchableOpacity
                        style={modStyles.top_bar_button}
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
                backgroundColor: '#E7E7E7',
                borderTopLeftRadius: 25, borderTopRightRadius: 25
            }}>

                <View style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                        <View style={{ flexDirection: 'row', marginTop: 45 }}>
                            {
                                (editMode === false) ? (<JoyText style={{ flex: 7, fontSize: TEXTS["5xl"], fontWeight: 'bold' }}>{hotelName ? hotelName : "Loading ..."}</JoyText >) :
                                    (<TextInput onChangeText={changeHotelName} style={{ flex: 7, fontSize: 31, fontWeight: 'bold', borderWidth: 1, borderRadius: 10, paddingLeft: 10 }}>{hotelName ? hotelName : ""}</TextInput>)
                            }

                            <TouchableOpacity onPress={() => {
                                if (editMode === true)
                                    setEditMode(false)
                                else {
                                    setEditMode(true)
                                    /*and request for changing */
                                }

                            }}>
                                <Image style={{ marginTop: 10, marginLeft: 10, height: 25, width: 25 }} source={(editMode === false) ? require('../../assets/mod/pencil.png') : require('../../assets/mod/notification_tick.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40 }}>

                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/location_orange.png')} />

                            <JoyText style={{ marginLeft: 10, flex: 6, fontSize: TEXTS.lg }}>{'Location:'}</JoyText >
                            {
                                (editMode === false)
                                    ?
                                    (<JoyText style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{address ? address : "Loading ..."}</JoyText >)
                                    :
                                    (<TextInput onChangeText={(text) => { setAddress(text) }} multiline={true} style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888', borderWidth: 1, borderRadius: 10, padding: 5 }}>{address ? address : ""}</TextInput>)

                            }

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Image style={{ flex: 2, height: 30, width: 30, marginTop: -5 }} source={require('../../assets/mod/phone.png')} />
                            
                            <JoyText style={{ marginLeft: 10, flex: 6, fontSize: TEXTS.lg }}>{'Phone:'}</JoyText >
                            {
                                (editMode === false)
                                ?
                                <JoyText style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{phone ? phone : "Loading ..."}</JoyText >
                                :
                                <TextInput onChangeText={(text) => { setPhone(text) }} keyboardType="numeric" style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888', borderWidth: 1, borderRadius: 10, padding: 5, }}>{phone ? phone : "Loading ..."}</TextInput >
                            }
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30 }}>
                            <Image style={{ flex: 2, height: 30, width: 30, marginTop: -5 }} source={require('../../assets/mod/star.png')} />

                            <JoyText style={{ marginLeft: 10, flex: 6, fontSize: TEXTS.lg }}>{'Rating:'}</JoyText >
                            <JoyText style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{modInfo ? modInfo.rating : "Loading ..."}</JoyText >
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText style={{ fontSize: TEXTS["3xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</JoyText >
                        {
                            (editMode === false)
                                ?
                                (<JoyText style={{ fontSize: TEXTS.lg, marginBottom: 30, textAlign: 'justify' }} >{description}</JoyText >)
                                :
                                (<TextInput style={{ fontSize: TEXTS.lg, marginBottom: 30, textAlign: 'justify', borderWidth: 1, borderRadius: 10, padding: 10, }} multiline={true} onChangeText={(text) => { setDescription(text) }} >{description}</TextInput>)
                        }
                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText style={{ fontSize: TEXTS["3xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Account</JoyText >
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}>
                            <JoyText style={{ marginLeft: 0, flex: 6, fontSize: TEXTS.lg }}>{'Username:'}</JoyText >
                            <JoyText style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{modInfo ? modInfo.username : "Loading ..."}</JoyText >
                        </View>

                        

                        <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 10 }}>
                            <JoyText style={{ marginLeft: 0, flex: 6, fontSize: TEXTS.lg }}>{'Email:'}</JoyText >
                            <JoyText style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{modInfo ? modInfo.email : "Loading ..."}</JoyText >
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 30 }}>
                            <JoyText style={{ marginLeft: 0, flex: 6, fontSize: TEXTS.lg }}>{'Owner:'}</JoyText >
                            <JoyText style={{ marginLeft: 10, flex: 15, fontSize: TEXTS.lg, color: '#888888' }}>{modInfo ? modInfo.owner : "Loading ..."}</JoyText >
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />
                    
                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Chỉnh sửa thông tin cá nhân'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#E7E7E7' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }} onPress={() => { navigation.navigate('WalletPage') }}>
                        <JoyText style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Nạp/Rút'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#E7E7E7' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Lịch sử và thống kê'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#E7E7E7' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }} onPress={() => { navigation.navigate('LoginPage') }}>
                        <JoyText style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Đăng xuất'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#E7E7E7' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }} onPress={() => { navigation.navigate('AddRoomPage') }} >
                        <JoyText style={{ fontSize: TEXTS.lg, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'TEST BTN'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#E7E7E7' }} />


                </View>

            </View>

        </ScrollView>
    );
}



const styles = StyleSheet.create({});
