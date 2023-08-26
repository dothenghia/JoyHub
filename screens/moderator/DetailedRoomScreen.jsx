import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, ImageBackground, Dimensions, ToastAndroid } from "react-native";
import { Pagination, Carousel } from 'react-native-snap-carousel';
import generalStyles from "../../styles/general";
import TopBar from "../../components/moderator/TopBar";
import RoomAmentityCard from "../../components/moderator/RoomAmenityCard";
import JoyText from '../../components/general/JoyText'

import { TEXTS, COLORS } from "../../constants/theme";
import MController from "../../controllers/moderatorController";

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

    const [editMode, setEditMode] = useState(false)

    const [area, setArea] = useState(0)
    const [bed, setBed] = useState(0)
    const [people,setPeople] = useState(0)
    const [des,setDes] = useState("")
    
    const [area1, setArea1] = useState(0)
    const [bed1, setBed1] = useState(0)
    const [people1,setPeople1] = useState(0)
    const [des1,setDes1] = useState("")

    room = route.params.room

    const carouselRef = useRef(null);
    useEffect(() => {

        setImageData(route.params.room["image"])
        setCurrentThumnail(0)
        setArea(room.info[0].value)
        setBed(room.info[1].value)
        setPeople(room.info[2].value)
        setDes(room.description)
        setArea1(room.info[0].value)
        setBed1(room.info[1].value)
        setPeople1(room.info[2].value)
        setDes1(room.description)
    }, [route.params])

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
                    {editMode?
                    (<TextInput onChangeText={(text) => { if(text) setDes1(text); else setDes1("")}} style={{ fontSize: TEXTS.lg, padding: 10, marginBottom: 30, borderRadius: 10, borderWidth: 1, width: '100%', minHeight: 100 }} multiline={true}> {des1} </TextInput>)
                    :
                    <JoyText style={{ fontSize: TEXTS.lg, marginBottom: 30 }} multiline={true} > {des}</JoyText>
                    }
                </View>

                <JoyText style={{ fontSize: TEXTS['3xl'], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Information</JoyText >
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/bed.png')} />
                        {editMode ?
                        (<TextInput keyboardType="numeric" onChangeText={(text) => { if(text) setBed1(Math.max(1,Math.abs(parseInt(text)))); else setBed1(1)}} style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20, borderRadius: 10, borderWidth: 1, width: '80%', height: 40 }} multiline={true}> {bed1?bed1:1} </TextInput>)
                        :
                        <JoyText style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true}> {bed + " Beds"} </JoyText>
                        }
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/area.png')} />
                        {editMode ? 
                        (<TextInput keyboardType="numeric" onChangeText={(text) => { if(text) setArea1(Math.max(1,Math.abs(parseInt(text)))); else setArea1(1)}} style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20, borderRadius: 10, borderWidth: 1, width: '80%', height: 40 }} multiline={true}> {area1?area1:1} </TextInput>)
                        :
                        (<View style={{ flexDirection: 'row' }}>
                            <JoyText style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true}> {area + " m"} </JoyText>
                            <JoyText style={{ marginTop: 3, fontSize: TEXTS.xxs }}  baselineShift = {-6} >{"2"}</JoyText >
                        </View>)
                        }
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 5 }} source={require('../../assets/mod/people_black.png')} />
                        {editMode ? 
                        (<TextInput keyboardType="numeric" onChangeText={(text) => { if(text) setPeople1(Math.max(1,Math.abs(parseInt(text)))); else setPeople1(1)}} style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20, borderRadius: 10, borderWidth: 1, width: '80%', height: 40 }} multiline={true}> {people1?people1:1} </TextInput>)
                        :
                        <JoyText style={{ fontSize: TEXTS.lg, marginTop: 3, marginBottom: 30, marginLeft: 20 }} multiline={true}> {people + " People"} </JoyText>

                    }
                    </View>

                    <View style={{ marginTop: 20 , marginBottom: 20}}>
                        <TouchableOpacity onPress = {() => {
                            if(editMode)
                            {
                                data = {
                                    id : room.id,
                                    bed : bed1,
                                    people : people1,
                                    area : area1,
                                    description : des1
                                }
                                MController('UPDATEROOM',data)
                                ToastAndroid.show('Update successfully !', ToastAndroid.SHORT)
                                setArea(area1)
                                setBed(bed1)
                                setPeople(people1)
                                setDes(des1)
                                setEditMode(false)
                            }
                            else 
                            {
                                setEditMode(true)
                                
                            }
                        }} style = {{borderRadius:35 , backgroundColor: "#FF6400", alignItems:'center'}}>
                            <JoyText style={{color:'white', fontWeight:'bold', paddingTop:10 , fontSize: TEXTS.xl, marginTop: 3, marginBottom: 20 }} multiline={true}> {editMode ? "DONE" : "EDIT ROOM INFORMATION"} </JoyText>

                        </TouchableOpacity>
                    </View>
                    {(editMode ? <View style={{marginBottom: 20}}>
                        <TouchableOpacity onPress = {() => {
                            ToastAndroid.show('Cancel updating !', ToastAndroid.SHORT)
                            setEditMode(false)
                            setArea1(area)
                            setBed1(bed)
                            setPeople1(people)
                            setDes1(des)
                            }} 

                            style = {{borderRadius:35 , backgroundColor: "#E7E7E7", alignItems:'center'}}>
                            <JoyText style={{color:'white', fontWeight:'bold', paddingTop:10 , fontSize: TEXTS.xl, marginTop: 3, marginBottom: 20 }} multiline={true}> {"CANCEL EDITING"} </JoyText>

                        </TouchableOpacity>
                    </View> : 
                    <View/>)}
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
