import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import TopBar from "../../components/moderator/TopBar";
import SearchBar from "../../components/moderator/SearchBar";
import VerifyWaitingCard from "../../components/moderator/VerifyWaitingCard";
import CheckinCard from "../../components/moderator/CheckinCard";
import CheckoutCard from "../../components/moderator/CheckoutCard";
import modStyles from "../../styles/mod"
import JoyText from '../../components/general/JoyText'
import MController from "../../controllers/moderatorController";

export default function MainScreen({ navigation }) {

    const [page, setPage] = useState('verify')
    const [verifyColor, setVerifyColor] = useState('#FF6400')
    const [checkinColor, setCheckinColor] = useState('#888888')
    const [checkoutColor, setCheckoutColor] = useState('#888888')

    const [verifyList, setVerifyList] = useState([])
    const [checkinList, setCheckinList] = useState([])
    const [checkoutList, setCheckoutList] = useState([])

    useEffect(() => {
        const fetchMainScreenInfo = async () => {
            let data = await MController('MODMAINSCREEN')
            setVerifyList(data.verifyList)
            setCheckinList(data.checkinList)
            setCheckoutList(data.checkoutList)

        }
        fetchMainScreenInfo()
    }, [])
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
            <View style={modStyles.page_padding}>
                <TopBar Title={"Hotel Name"} navigation={navigation} />
                <SearchBar />

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: verifyColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginRight: 10 }}
                        onPress={() => { setPage('verify'); setButtonColor('verify'); }}>
                        <JoyText style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Verify </JoyText >
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: checkinColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, margin: 0 }}
                        onPress={() => { setPage('checkin'); setButtonColor('checkin'); }}>
                        <JoyText style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Check In </JoyText >
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: checkoutColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginLeft: 10 }}
                        onPress={() => { setPage('checkout'); setButtonColor('checkout'); }}>
                        <JoyText style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Check Out </JoyText >
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

                {

                    (page === 'verify') && (
                        <VerifyArea verifyList={verifyList} />
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
            <VerifyWaitingCard bookingInfo={verifyList[i]} />
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
            <CheckinCard bookingInfo={checkinList[i]} />
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
            <CheckoutCard bookingInfo={checkoutList[i]} />
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
