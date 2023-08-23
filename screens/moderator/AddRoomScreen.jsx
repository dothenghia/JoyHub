import React, { useState, useRef, useCallback, useEffect, useContext } from "react";
import { StyleSheet, ToastAndroid, ImageBackground, TextInput, View, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import generalStyles from "../../styles/general";
import TopBar from "../../components/moderator/TopBar";
import RoomAmentityCard from "../../components/moderator/RoomAmenityCard";
import JoyText from '../../components/general/JoyText'
import { TEXTS, COLORS } from "../../constants/theme";
import * as ImagePicker from 'expo-image-picker';
import MController from "../../controllers/moderatorController";
import { Pagination, Carousel } from 'react-native-snap-carousel';
import { DatePickerModal } from 'react-native-paper-dates';

import LoadingModal from '../../components/general/LoadingModal'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.88);

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

export default function AddRoomScreen({ navigation, route }) {
    const [amenities, setAmenities] = useState([])
    
    const [chosenAmenities, setChosenAmenities] = useState([])

    const [name, setName] = useState("")
    const [des, setDes] = useState("")
    const [area, setArea] = useState(0)
    const [people, setPeople] = useState(0)
    const [bed, setBed] = useState(0)
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")

    const [currentThumbnail, setCurrentThumnail] = useState(0);
    const carouselRef = useRef(null);
    const [enableAddImage, setEnableAddImage] = useState(false);

    const [imageData, setImageData] = useState([]);
    
    

    useEffect(() => {
        const fetchAmenities = async () => {
            let data = await MController('GETALLAMENITIES')
            setAmenities(data)
            setChosenAmenities(new Array(amenities.length).fill(false))
        }
        fetchAmenities()
    }, [])

    ////////////////////////   PICK IMAGE    //////////////////////////

    const pickImage = async () => {
        console.log('Picking image');
        let result = null;
        try {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                aspect: [4, 3],
                quality: 1,
            });

        }
        catch (error) {
            console.log("error: ", error)
        }
        if (!result.cancelled) {

            //const base64 = await convertImageToBase64(result.uri);
            setCurrentThumnail(imageData.length - 1)
            if (!imageData)
                setImageData([result.uri])
            else
                setImageData(data => [...data, result.uri]);

        }
    };
 
    const [loading, setLoading] = useState(false)

    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
    return (
        <ScrollView >
            <LoadingModal isLoading={loading} />
            <View style={generalStyles.page_container}>

                <TopBar Title={"Add A Room"} navigation={navigation} />
            </View>
            {
                (!imageData || imageData.length == 0)
                    ?
                    (
                        <TouchableOpacity onPress={() => { pickImage(); console.log("IMG", imageData) }}>
                            <Image style={{ marginTop: 25, height: 250, width: 'auto', borderRadius: 15 }} source={require('../../assets/mod/selectImg.png')} />
                        </TouchableOpacity>
                    )
                    :
                    (
                        <View style={{ height: 'auto', marginTop: 12, marginBottom: -32 }}>
                            <TouchableOpacity disabled = {currentThumbnail < imageData.length} onPress={pickImage}>
                                <Carousel
                                    ref={carouselRef}
                                    data={imageData ? [...imageData, "https://i.imgur.com/phk6mxL.png"] : []}
                                    renderItem={renderItem}
                                    sliderWidth={SLIDER_WIDTH}
                                    itemWidth={ITEM_WIDTH}
                                    onSnapToItem={currentThumbnail => {
                                        setCurrentThumnail(currentThumbnail)
                                        if (currentThumbnail == imageData.length)
                                            setEnableAddImage(true)
                                        else
                                            setEnableAddImage(false)
                                    }}
                                />
                            </TouchableOpacity>
                            <Pagination
                                dotsLength={imageData ? imageData.length + 1 : 0}
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

                    )

            }
            <View style={generalStyles.page_container}>
                <RoomAmentityCard pressable={true} amenities={amenities} chosen ={chosenAmenities} setChosen={setChosenAmenities} />

                <View>
                    <JoyText style={{ fontSize: TEXTS["4xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Type</JoyText >
                    <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30 }} multiline={true} placeholder="Enter room type" onChangeText={(text) => { setType(text) }} />
                </View>

                <View>
                    <JoyText style={{ fontSize: TEXTS["4xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Name</JoyText >
                    <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30 }} multiline={true} placeholder="Enter room name" onChangeText={(text) => { setName(text) }} />
                </View>

                <View>
                    <JoyText style={{ fontSize: TEXTS["4xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Description</JoyText >
                    <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30 }} multiline={true} placeholder="Enter description" onChangeText={(text) => { setDes(text) }} />
                </View>

                <JoyText style={{ fontSize: TEXTS["4xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Room Information</JoyText >
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 30, width: 30, borderRadius: 5 }} source={require('../../assets/mod/area.png')} />
                        <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30, marginLeft: 20 }} keyboardType="numeric" multiline={true} placeholder="Enter Area" onChangeText={(text) => { setArea(Math.max(0, parseInt(text))) }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 30, width: 30, borderRadius: 5 }} source={require('../../assets/mod/bed.png')} />
                        <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30, marginLeft: 20 }} keyboardType="numeric" multiline={true} placeholder="Enter Number Of Beds" onChangeText={(text) => { setBed(Math.max(0, parseInt(text))) }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 30, width: 30, borderRadius: 5 }} source={require('../../assets/mod/people_black.png')} />
                        <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30, marginLeft: 20 }} keyboardType="numeric" multiline={true} placeholder="Enter Number Of People" onChangeText={(text) => { setPeople(Math.max(0, parseInt(text))) }} />
                    </View>

                </View>
                <View>
                    <JoyText style={{ fontSize: TEXTS["4xl"], fontWeight: 'bold', color: '#FF6400', marginBottom: 15, marginTop: 15 }}>Price Per Night</JoyText >
                    <TextInput style={{ fontSize: TEXTS.md, marginBottom: 30 }} multiline={true} keyboardType="numeric" placeholder="Enter price" onChangeText={(text) => { setPrice(Math.max(0, parseInt(text))) }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 25 }}>
                    <TouchableOpacity style={{ height: 50, flex: 1, borderRadius: 20, marginLeft: 10, backgroundColor: '#FF6400' }} onPress={async () => {
                        {
                            let sendAmenities = []
                            
                            for (let i = 0 ;i < amenities.length; ++i)
                            {
                                if(chosenAmenities[i] == true)
                                    sendAmenities.push(amenities[i])
                            }
                            setLoading(true)
                            try{

                                e = await MController("ADDROOM", {
                                    name: name,
                                    room_type: type,
                                    bedroom: bed,
                                    area: area,
                                    description: des,
                                    bathroom: 1,
                                    isAccepted: false,
                                    isBooked: false,
                                    price: price,
                                    guest: people,
                                    image: imageData,
                                    chosenAmenities: sendAmenities,
                                }); 
                                ToastAndroid.show('Add successfully', ToastAndroid.SHORT)
                            }
                            catch(error)
                            {
                                ToastAndroid.show('Failed please try again', ToastAndroid.SHORT)

                            }
                            setLoading(false)
                            navigation.navigate("RoomPage")
                            route.params.onLoading()
                        }
                    }} >
                        <JoyText style={{ textAlign: 'center', paddingTop: 12, color: 'white', fontWeight: 'bold', fontSize: TEXTS.lg }}> {"CREATE"} </JoyText >
                    </TouchableOpacity>

                </View>


            </View>
        </ScrollView >
    );
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
