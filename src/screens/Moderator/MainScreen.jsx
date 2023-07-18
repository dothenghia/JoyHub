import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import TopBar from "../../components/moderator/TopBar";
import SearchBar from "../../components/moderator/SearchBar";
import VerifyWaitingCard from "../../components/moderator/VerifyWaitingCard";

import generalStyles from "../../styles";
export default function MainScreen() {

    const [page,setPage] = useState('verify')
    let verifyList = []
    return (
        <View style={generalStyles.page_container}>
            <TopBar Title={"Hotel Name"}/>
            <SearchBar/>
            <View style = {{flexDirection : 'row', marginBottom:10}}>
                <TouchableOpacity style={{height: 40, flex:1 ,borderWidth: 1, borderRadius: 20, marginTop:15, marginRight:10}}
                    onPress={() => {setPage('verify')}}>
                    <Text style={{textAlign:'center', paddingTop:7}}> Verify </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 40, flex:1 ,borderWidth: 1, borderRadius: 20, marginTop:15, margin:0}} 
                    onPress={() => {setPage('checkin')}}>
                    <Text style={{textAlign:'center', paddingTop:7}}> Check In </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 40, flex:1 ,borderWidth: 1, borderRadius: 20, marginTop:15, marginLeft:10}}
                    onPress={() => {setPage('checkout')}}>
                    <Text style={{textAlign:'center', paddingTop:7}}> Check Out </Text>
                </TouchableOpacity>
            </View>

            {

                page === 'verify' && (
                    <ScrollView>
                        <Text style= {{ marginTop:20, fontSize : 25, fontWeight:'bold'}}>Waiting for verifying</Text>
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room = 'Phong Tinh Iu Chi Anh Va Em <3' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'}/>
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room = 'Phong Tinh Iu Chi Anh Va Em <3' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'}/>
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room = 'Phong Tinh Iu Chi Anh Va Em <3' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'}/>
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room = 'Phong Tinh Iu Chi Anh Va Em <3' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'}/>
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room = 'Phong Tinh Iu Chi Anh Va Em <3' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'}/>
                        <VerifyWaitingCard Username={'Tran Thu Minh'} PhoneNumber={'0909996669'} Room = 'Phong Tinh Iu Chi Anh Va Em <3' NumOfRoom={5} CheckInDate={'15/07/2023'} CheckOutDate={'17/07/2023'}/>
                    
                    
                    
                    </ScrollView>
                    
                )
            }
            {
                page === 'checkin' &&  (
                    <Text style= {{ marginTop:20, fontSize : 25, fontWeight:'bold'}}>Waiting for checking in</Text>
                )
            }
            {
                page === 'checkout' &&  (
                    <Text style= {{ marginTop:20, fontSize : 25, fontWeight:'bold'}}>Waiting for checking out</Text>
                )
            }
            
        </View>

        

    );
}

const styles = StyleSheet.create({});
