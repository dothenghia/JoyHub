import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import customerStyles from '../../styles/customer'
import { COLORS, TEXTS } from '../../constants/theme'

// Import Controller
import CController from "../../controllers/customerController";

export default function FavoriteHotelScreen({ navigation }) {
    console.log('[Customer] FavoriteHotelScreen')

    // ------ Data State
    const [favoriteList, setFavoriteList] = useState([])

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchFavoriteList = async () => {
            let data = await CController('GETFAVORITELIST')
            setFavoriteList(data)
        }

        fetchFavoriteList()
    }, [])

    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }


    return (
        <View style={customerStyles.page_container}>
            {/* Top Bar */}
            <View style={{ ...customerStyles.top_bar, height: 72, justifyContent: 'space-between', backgroundColor: 'white', paddingBottom: 12 }}>
                <TouchableOpacity
                    style={customerStyles.top_bar_button}
                    onPress={backHandler}
                >
                    <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                </TouchableOpacity>
                <JoyText style={customerStyles.top_bar_title}>My Favorite</JoyText>
            </View>

            {
                favoriteList && favoriteList.length === 0 && (
                    <View style={{ flex: 1, marginBottom: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <JoyText style={{ fontSize: TEXTS.xxl, color: COLORS.heading_text }}>You have not saved any favorite hotel</JoyText>

                        <TouchableOpacity style={{ marginTop: 12 }}
                            onPress={() => { navigation.navigate('MainPage') }}
                        >
                            <JoyText style={{ fontSize: TEXTS.xxl, color: COLORS.primary, fontWeight: '600' }}>Explore hotels</JoyText>
                        </TouchableOpacity>
                    </View>
                )
            }

            {
                favoriteList && favoriteList.length > 0 && (
                    <ScrollView>
                        {
                            favoriteList.map((hotel, index) => (
                                <View>
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.card_container}
                                    // onPress={() => {navigation.navigate('HotelPage', )}}
                                    >
                                        <View style={styles.thumbnail_wrapper}>
                                            <Image
                                                source={require('../../assets/customer/demo.jpg')}
                                                style={styles.thumbnail_image}
                                            />
                                        </View>

                                        <View style={styles.text_container}>
                                            <JoyText style={styles.hotel_name}>{hotel.hotel_name}</JoyText>
                                            <JoyText style={styles.location}>{hotel.address}</JoyText>
                                            <JoyText style={styles.price}>{hotel.price} Joycoin</JoyText>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={customerStyles.divider}></View>

                                </View>
                            ))
                        }
                    </ScrollView>
                )
            }



        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        height: 190,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    thumbnail_wrapper: {
        width: '30%',
        height: '88%',
        marginLeft: 12,
        borderRadius: 8,
        overflow: 'hidden',
    },
    thumbnail_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    text_container: {
        color: 'white',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 6,
    },

    hotel_name: {
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        color: COLORS.heading_text,
        marginTop: 4,
    },
    location: {
        fontSize: TEXTS.lg,
        color: COLORS.subheading_text,
        marginTop: 2,
    },
    price: {
        fontSize: TEXTS.xxl,
        fontWeight: '900',
        color: COLORS.primary,
        marginTop: 2,
    },
});