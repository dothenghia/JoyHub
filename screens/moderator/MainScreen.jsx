import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import TopBar from "../../components/moderator/TopBar";
import SearchBar from "../../components/moderator/SearchBar";
import VerifyWaitingCard from "../../components/moderator/VerifyWaitingCard";
import CheckinCard from "../../components/moderator/CheckinCard";
import CheckoutCard from "../../components/moderator/CheckoutCard";
import modStyles from "../../styles/mod"
import JoyText from '../../components/general/JoyText'

export default function MainScreen() {

    const [page, setPage] = useState('verify')
    const [verifyColor, setVerifyColor] = useState('#FF6400')
    const [checkinColor, setCheckinColor] = useState('#888888')
    const [checkoutColor, setCheckoutColor] = useState('#888888')



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
        <View style={{ ...modStyles.page_container}}>
            <View style={modStyles.page_padding}>
                <TopBar Title={"Hotel Name"} />
                <SearchBar />

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: verifyColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginRight: 10 }}
                        onPress={() => { setPage('verify'); setButtonColor('verify'); }}>
                        <JoyText  style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Verify </JoyText >
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: checkinColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, margin: 0 }}
                        onPress={() => { setPage('checkin'); setButtonColor('checkin'); }}>
                        <JoyText  style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Check In </JoyText >
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: checkoutColor, height: 40, flex: 1, borderRadius: 20, marginTop: 15, marginLeft: 10 }}
                        onPress={() => { setPage('checkout'); setButtonColor('checkout'); }}>
                        <JoyText  style={{ textAlign: 'center', paddingTop: 10, color: 'white', fontWeight: 'bold' }}> Check Out </JoyText >
                    </TouchableOpacity>
                </View>
            </View>
            {

                (page === 'verify') && (
                    <ScrollView>
                        <View style={modStyles.page_padding}>
                        <JoyText  style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Waiting for verifying</JoyText >
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        </View>
                    </ScrollView>

                )
            }
            {
                page === 'checkin' && (
                    <ScrollView>
                        <View style={modStyles.page_padding}>
                        <JoyText  style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Check in</JoyText >
                        <CheckinCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckinCard Username={'Tran Thu Minh Minh Minh Minh Nguyen Thi Cong Khanh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckinCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san sieu dep siu xin danh cho nguoi giau' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckinCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckinCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckinCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        </View>
                    </ScrollView>
                )
            }
            {
                page === 'checkout' && (
                    <ScrollView>
                        <View style={modStyles.page_padding}>
                        <JoyText  style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Check out</JoyText >
                        <CheckoutCard Username={'Tran Thu Minh Minh Minh Minh Nguyen Thi Cong Khanh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckoutCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckoutCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckoutCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckoutCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        <CheckoutCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room='Phong khach san' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'} />
                        </View>
                    </ScrollView>
                )
            }

        </View>



    );
}




const styles = StyleSheet.create({});
