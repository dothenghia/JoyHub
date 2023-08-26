import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import TopBar from "../../components/moderator/TopBar";
import SearchBar from "../../components/moderator/SearchBar";
import VerifyWaitingCard from "../../components/moderator/VerifyWaitingCard";
import CheckinCard from "../../components/moderator/CheckinCard";
import CheckoutCard from "../../components/moderator/CheckoutCard";
import modStyles from "../../styles/mod"
import JoyText from '../../components/general/JoyText'
import MController from "../../controllers/moderatorController";
import LoadingModal from '../../components/general/LoadingModal'

export default function MainScreen({ navigation }) {

    const [page, setPage] = useState('verify')
    const [verifyColor, setVerifyColor] = useState('#FF6400')
    const [checkinColor, setCheckinColor] = useState('#888888')
    const [checkoutColor, setCheckoutColor] = useState('#888888')

    const [verifyList, setVerifyList] = useState([])
    const [checkinList, setCheckinList] = useState([])
    const [checkoutList, setCheckoutList] = useState([])
    
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        const fetchMainScreenInfo = async () => {
            setLoading(true)
            let data = await MController('MODMAINSCREEN')
            setVerifyList(data.verifyList)
            setCheckinList(data.checkinList)
            setCheckoutList(data.checkoutList)
            setLoading(false)
        }
        fetchMainScreenInfo()
    }, [])

    

    const onRefresh = useCallback(() => {
        const fetchMainScreenInfo = async () => {
            setLoading(true)
            let data = await MController('MODMAINSCREEN')
            setVerifyList(data.verifyList)
            setCheckinList(data.checkinList)
            setCheckoutList(data.checkoutList)
            setLoading(false)
        }
        fetchMainScreenInfo()
    }, []);


    const setButtonColor = page => {

        setVerifyColor('#888888')
        setCheckinColor('#888888')
        setCheckoutColor('#888888')

        if (page === 'verify')
            setVerifyColor('#FF6400')
        else if (page === 'checkin')
            setCheckinColor('#FF6400')
        else
            setCheckoutColor('#FF6400')
    }

    return (
        <View style={{ ...modStyles.page_container }}>
            <LoadingModal isLoading={loading} />
            <View style={modStyles.page_padding}>
                <TopBar Title={""} navigation={navigation} />
                

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: verifyColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginRight: 10 }}
                        onPress={async () => { 
                            setLoading(true); 
                            setPage('verify'); 
                            setButtonColor('verify'); 
                            list = await MController('GETVERIFY'); 
                            setVerifyList(list); 
                            setLoading(false) }}>
                        <JoyText style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Verify </JoyText >
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: checkinColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, margin: 0 }}
                        onPress={async () => {
                            setLoading(true) 
                            setPage('checkin'); 
                            setButtonColor('checkin'); 
                            list = await MController('GETCHECKIN'); 
                            setCheckinList(list)
                            setLoading(false)
                            }}>
                        <JoyText style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Check In </JoyText >
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: checkoutColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginLeft: 10 }}
                        onPress={async () => { 
                            setLoading(true) 
                            setPage('checkout'); 
                            setButtonColor('checkout'); 
                            list = await MController('GETCHECKOUT'); 
                            setCheckoutList(list)
                            setLoading(false)
                             }}>
                        <JoyText style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Check Out </JoyText >
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView refreshControl={ // DÙNG ĐỂ VUỐT XUỐNG RELOAD TRANG
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#FF6400']}
            />
            }>
                
                {

                    (page === 'verify') && (
                        <VerifyArea verifyList={verifyList}/>
                    )
                }
                {
                    page === 'checkin' && (
                        <CheckinArea checkinList={checkinList} />
                    )
                }
                {
                    page === 'checkout' && (
                        <CheckoutArea checkoutList={checkoutList} />
                    )
                }

            </ScrollView>

        </View>



    );
}

function VerifyArea({ verifyList }) {
    res = []

    for (let i = 0; i < verifyList.length; ++i) {
        res.push(
            <VerifyWaitingCard key={i} bookingInfo={verifyList[i]} />
        )
    }

    return (
        <View style={modStyles.page_padding}>
            <JoyText style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Waiting for verifying</JoyText >
            {res}
        </View>
    )
}


function CheckinArea({ checkinList }) {
    res = []

    for (let i = 0; i < checkinList.length; ++i) {
        res.push(
            <CheckinCard key={i} bookingInfo={checkinList[i]} />
        )
    }

    return (
        <View style={modStyles.page_padding}>
            <JoyText style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Check in</JoyText >
            {res}
        </View>
    )
}

function CheckoutArea({ checkoutList }) {
    res = []

    for (let i = 0; i < checkoutList.length; ++i) {
        res.push(
            <CheckoutCard key={i} bookingInfo={checkoutList[i]} />
        )
    }

    return (
        <View style={modStyles.page_padding}>
            <JoyText style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Check out</JoyText >
            {res}
        </View>
    )
}



const styles = StyleSheet.create({});
