import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Pagination, Carousel } from 'react-native-snap-carousel';
import generalStyles from "../../styles/general";
import TopBar from "../../components/moderator/TopBar";
import RoomAmentityCard from "../../components/moderator/RoomAmenityCard";
import JoyText from '../../components/general/JoyText'

import { TEXTS, COLORS } from "../../constants/theme";

const renderItem = ({ item }) => {
  
    return (

        <ImageBackground
            source={{
                uri: item,
            }}
            resizeMode="cover"
            style={styles.slider_image}
        >
        </ImageBackground>

    );
};

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.88);


export default function DetailedRoomScreen({ navigation, route }) {
    const [currentThumbnail, setCurrentThumnail] = useState(0);
    const [imageData, setImageData] = useState([]);
    room = route.params.room

    const carouselRef = useRef(null);
    useEffect(() => {
        console.log(route.params.room)
        setImageData(route.params.room["image"])
        setCurrentThumnail(0)
    }, [route.params])
    console.log("ROOM",room)
    return (
        <ScrollView >
            <View style={generalStyles.page_container}>

                <TopBar Title={room.name} navigation={navigation} />
            </View>
    
                <View style={{ height: 'auto', marginTop: 12, marginBottom: -32 }}>

                    <Carousel
                        ref={carouselRef}
                        data={imageData ? imageData : []}
                        renderItem={renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        onSnapToItem={currentThumbnail => {
                            setCurrentThumnail(currentThumbnail)
                        }}
                    />

                    <Pagination
                        dotsLength={imageData ? imageData.length : 0}
                        activeDotIndex={currentThumbnail}
                        carouselRef={carouselRef}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 1,
                            backgroundColor: COLORS.primary,
                        }}
                        inactiveDotStyle={{
                            backgroundColor: COLORS.grey,
                        }}
                        tappableDots={true}
                        inactiveDotOpacity={0.5}
                        inactiveDotScale={1}
                    />

                </View>

                <View style={generalStyles.page_container}>
                <RoomAmentityCard amenities={room.amenities} />

                <View>
                    <JoyText style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</JoyText >
                    <JoyText style={{ fontSize: TEXTS.lg, marginBottom: 30 }} multiline={true} > {room["description"]}</JoyText>
                </View>

                <JoyText style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Information</JoyText >
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/area.png')} />
                        <JoyText style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true}> {room.info[1].value + " Beds"} </JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/bed.png')} />
                        <JoyText style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true}> {room.info[0].value + " m"} </JoyText>
                        <JoyText style={{ marginTop: 3, fontSize: TEXTS.xxs }}  baselineShift = {-6} >{"2"}</JoyText >
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/people_black.png')} />
                        <JoyText style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true}> {room.info[2].value + " People"} </JoyText>
                    </View>
                </View>



            </View>
        </ScrollView >
    );
}


function editView() {
    return (
        <View style={generalStyles.page_container}>
            <ScrollView >
                <TopBar Title={room.name} />
                <Image style={{ marginTop: 25, height: 250, width: 'auto', borderRadius: 15 }} source={require('../../assets/mod/demoHotel.jpg')} />
                <View style={{ height: 70, marginBottom: 15 }}>
                    <TextInput placeholder="Enter room name" style={{ flex: 7, marginTop: 15, paddingLeft: 15, height: 60, borderColor: 'black', borderWidth: 1, borderRadius: 15, fontSize: TEXTS.xl }} />
                </View>
                <RoomAmentityCard amenities={room.amenities} />

                <View>
                    <JoyText style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</JoyText >
                    <TextInput style={{ fontSize: TEXTS.lg, marginBottom: 30 }} multiline={true} placeholder="Enter description" />
                </View>

                <JoyText style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Information</JoyText >
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/area.png')} />
                        <TextInput style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true} placeholder={"Enter Area"} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/bed.png')} />
                        <TextInput style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true} placeholder="Enter Number Of Beds" />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/people_black.png')} />
                        <TextInput style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true} placeholder="Enter Number Of People" />
                    </View>
                </View>

            </ScrollView >

        </View>
    )
}



const styles = StyleSheet.create({
    slider_image: {
        marginTop: 12,
        width: '100%',
        height: 210,
        borderRadius: 20,
        overflow: 'hidden',
    },

    status_tag: {
        position: 'absolute',
        top: 24,
        right: 36,
        backgroundColor: '#EEB0AE',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    status_text: {
        fontSize: TEXTS.xl,
        color: COLORS.warning,
        fontWeight: 'bold',
        marginLeft: 4,
    },


    amenity: {
        marginLeft: 4,
        fontSize: TEXTS.lg,
        color: COLORS.subheading_text,
    },
    description: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.sm,
        marginTop: 6,
        textAlign: 'justify',
    },



    text: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.lg,

        marginTop: 8,
    },
    primary_text: {
        color: COLORS.primary,
        fontSize: TEXTS.xxl,
        fontWeight: '600',

        marginTop: 8,
    },


    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_container: {
        width: 360,
        height: 168,
        backgroundColor: 'white',
        borderRadius: 16,
    },

});
