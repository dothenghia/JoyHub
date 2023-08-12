import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Modal, View, Image, ScrollView, TouchableOpacity} from "react-native";
import JoyText from '../../components/general/JoyText'
import { COLORS, TEXTS } from '../../constants/theme'

export default function WalletScreen({ navigation }) {

    hotelName = 'HARLEY HOUSE'
    jc = 250000

    const [topupPopUp, setTopupPopUp] = useState(false)
    const [withdrawPopUp, setWithdrawPopUp] = useState(false)
    const [joycoin, setJoycoin] = useState(jc)
    const [money, setMoney] = useState(0)

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
                            <JoyText style={{ flex: 7, fontSize: 31, fontWeight: 'bold' }}>{hotelName}</JoyText >

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40 }}>

                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/location_orange.png')} />

                            <JoyText style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'JoyCoin: '}</JoyText >
                            <JoyText style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{joycoin}</JoyText >

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30 }}>
                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/mod/star.png')} />

                            <JoyText style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'Bank: '}</JoyText >
                            <JoyText style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'845122142179'}</JoyText >
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText style={{ fontSize: 25, fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Nạp/Rút</JoyText >
                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity style={{ width: 120, height: 50, borderRadius: 10, borderWidth: 1, marginBottom: 20, marginRight: 15 }} onPress={() => {setTopupPopUp(!topupPopUp)}} >
                                <JoyText style={{ fontSize: 20, textAlign: 'center', paddingTop: 7 }}>Nạp</JoyText >
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 120, height: 50, borderRadius: 10, borderWidth: 1, marginBottom: 20 }} onPress={() => {setWithdrawPopUp(!withdrawPopUp)}}>
                                <JoyText style={{ fontSize: 20, textAlign: 'center', paddingTop: 7 }}>Rút</JoyText >
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ height: 15, backgroundColor: 'transparent' }} />

                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Liên kết ngân hàng'}</JoyText >
                    </TouchableOpacity>
                    <View style={{ height: 5, backgroundColor: '#888888' }} />
                    <TouchableOpacity style={{ paddingHorizontal: 32, backgroundColor: 'white' }}>
                        <JoyText style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 15, marginTop: 15, }}>{'Hủy liên kết ngân hàng'}</JoyText >
                    </TouchableOpacity>


                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={topupPopUp}
                    >
                        <View style={styles.modal_page}>
                            <View style={styles.modal_container}>
                                <View style={{ paddingHorizontal: 14, marginTop: 14, marginBottom: 8 }}>
                                    <TouchableOpacity
                                        onPress={() => setTopupPopUp(false)}
                                        style={{ width: 46, marginBottom: 6 }}
                                    >
                                        <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                                            Close
                                        </JoyText>
                                    </TouchableOpacity>
                                    <View>
                                        <JoyText style={{ color: COLORS.heading_text,fontSize: TEXTS.xxl,fontWeight: '600',}}>Nap tien</JoyText>
                                        <TextInput
                                            style = {{marginTop: 30, padding:10, fontSize:TEXTS.lg, height: 60, borderWidth:1, borderRadius:10}}
                                            placeholder="Enter amount of money"
                                            onChangeText={(value)=>{ setMoney(parseInt(value))}}
                                            keyboardType="numeric"
                                        />
                                        <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:"#FF6400", width: 70, height: 45, marginRight: 20, marginTop: 30, borderRadius: 10 ,}}
                                        onPress = {() => { 
                                            setJoycoin(joycoin + money)
                                            setMoney(0)
                                            setTopupPopUp(false)
                                        }} 
                                        >
                                            <JoyText style={{fontSize: TEXTS.xl, color: 'white', textAlign: 'center', paddingTop:7, fontWeight:'bold'}}> OK </JoyText>
                                            </TouchableOpacity>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                    </Modal>
                    

                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={withdrawPopUp}
                    >
                        <View style={styles.modal_page}>
                            <View style={styles.modal_container}>
                                <View style={{ paddingHorizontal: 14, marginTop: 14, marginBottom: 8 }}>
                                    <TouchableOpacity
                                        onPress={() => setWithdrawPopUp(false)}
                                        style={{ width: 46, marginBottom: 6 }}
                                    >
                                        <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                                            Close
                                        </JoyText>
                                    </TouchableOpacity>
                                    <View>
                                        <JoyText style={{ color: COLORS.heading_text,fontSize: TEXTS.xxl,fontWeight: '600',}}>Rut tien</JoyText>
                                        <TextInput
                                            style = {{marginTop: 30, padding:10, fontSize:TEXTS.lg, height: 60, borderWidth:1, borderRadius:10}}
                                            placeholder="Enter amount of money"
                                            onChangeText={(value)=>{setMoney(parseInt(value))}}
                                            keyboardType="numeric"
                                        />
                                        <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:"#FF6400", width: 70, height: 45, marginRight: 20, marginTop: 30, borderRadius: 10 ,}}
                                        onPress = {() => { 
                                            if(money <= joycoin)
                                            {
                                                setJoycoin(joycoin - money)
                                                setMoney(0)
                                            }
                                            setWithdrawPopUp(false)
                                        }} 
                                        >
                                            <JoyText style={{fontSize: TEXTS.xl, color: 'white', textAlign: 'center', paddingTop:7, fontWeight:'bold'}}> OK </JoyText>
                                            </TouchableOpacity>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                    </Modal>


                </View>

            </View>

        </ScrollView>
    );
}

function withdraw() {

}

function topup() {

}

const styles = StyleSheet.create({
    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    modal_container: {
        width: 360,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 16,
    },
});
