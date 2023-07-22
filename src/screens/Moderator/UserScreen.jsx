import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import generalStyles from "../../styles";
export default function UserScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image style={{ height: 250, width: 'auto' }} source={require('../../assets/images/demoHotel.jpg')} />
            </View>

            <View style={{
                flex: 2,
                marginTop: -50,
                backgroundColor: '#888888',
                borderTopLeftRadius: 25, borderTopRightRadius: 25
            }}>
                <ScrollView  style={{borderTopLeftRadius: 25, borderTopRightRadius: 25}}>
                    <View style={{ paddingHorizontal: 32, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                        <View style={{ flexDirection: 'row', marginTop: 45 }}>
                            <Text style={{ flex: 7, fontSize: 31, fontWeight: 'bold' }}>Harley House</Text>
                            <TouchableOpacity onPress={() => { }}>
                                <Image style={{ marginTop: 10, height: 25, width: 25 }} source={require('../../assets/icons/pencil.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40 }}>

                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/icons/location_orange.png')} />

                            <Text style={{ marginLeft: 10, flex: 6, fontSize: 17 }}>{'Location:'}</Text>
                            <Text style={{ marginLeft: 10, flex: 15, fontSize: 17, color: '#888888' }}>{'so 1 duong vao tim em'}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30 }}>
                            <Image style={{ flex: 2, height: 30, width: 30 }} source={require('../../assets/icons/star.png')} />

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
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</Text>
                        <Text style={{ fontSize: 15, marginBottom: 30, textAlign: 'justify' }} >
                            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Yeu em khong loi thoat.'}
                        </Text>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({});
