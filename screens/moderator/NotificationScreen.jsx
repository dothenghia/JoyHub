import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import TopBar from "../../components/moderator/TopBar";
import NotificationCard from "../../components/moderator/NotificationCard";
import modStyles from "../../styles/mod"
import JoyText from '../../components/general/JoyText'
export default function NotificationScreen({navigation}) {
  
    return (
        <View style={modStyles.page_container}>
            <ScrollView >
                <TopBar Title = "Notification" Style={modStyles.page_padding} navigation={navigation}/>
                <View style={{marginTop:50, ...modStyles.page_padding}}>
                    <NotificationCard Id="ID1234" Title="Booking is made by Ngoc Trinh 8x Mai Iu Anh" Time="7" Type="Book"/>
                    <NotificationCard Id="ID1234" Title="Bao' Dong^. Do?: ANH NHO EM" Time="7" Type="Alert"/>
                    <NotificationCard Id="ID1234" Title="Booking is made by Vu Khac Tiep Si Tinh 6969" Time="7" Type="Book"/>
                    <NotificationCard Id="ID1234" Title="Booking is made by 7 Shurimas 5 Strategists" Time="7" Type="Book"/>
                    <NotificationCard Id="ID1234" Title="You are report by EM" Time="7"/>
                    <NotificationCard Id="ID1234" Title="Ke Danh Cap Trai Tim Em has reported you" Time="7"/>
                    <NotificationCard Id="ID1234" Title="Booking is made by Aatrox" Time="7" Type="Book"/>
                    <NotificationCard Id="ID1234" Title="This is notification" Time="7"/>
                    <NotificationCard Id="ID1234" Title="This is notification" Time="7" Type="Book"/>
                    <NotificationCard Id="ID1234" Title="This is notification" Time="7"/>
                    <NotificationCard Id="ID1234" Title="This is notification" Time="7"/>
                    <NotificationCard Id="ID1234" Title="This is notification" Time="7"/>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({});
