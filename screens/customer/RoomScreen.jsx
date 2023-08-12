import { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, ScrollView, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import JoyText from '../../components/general/JoyText'
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.88);

const renderItem = ({ item }) => {
    return (
        <ImageBackground
            source={{
                uri: item.url,
            }}
            resizeMode="cover"
            style={styles.slider_image}
        >
        </ImageBackground>
    );
};

export default function RoomScreen({ navigation, route }) {
    console.log('[Customer] RoomScreen')

    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    const SliderItems = [
        { id: 1, url: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/364948962_948012216497505_6791312942664554980_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=Oy-c3LkHLb0AX8daFF4&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdQB_0n0EFZaRUtStFfHPxCQ_EhleFf7USAQhLBd82yMhA&oe=64FE85F7' },
        { id: 2, url: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/364428559_1719210895196107_5437612367951079772_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=_1Kpu1OCwgIAX-SVyz_&_nc_ht=scontent.fsgn2-8.fna&oh=03_AdSb-qfZnGDK4vooNBDZf5nkUemPRADmZ8GU-XOtkNBcVQ&oe=64FE6FC3' },
        { id: 3, url: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/363905976_208169411906510_696484087669685590_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=xEywbgEpCykAX9XZ2ou&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdQbz1ZFcYE_5Fi6cchVbGeDQtBxK-uk6TwWkX8kkW0E1w&oe=64FE7EDA' },
        { id: 4, url: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/356972542_1024286308987579_5149156721244225163_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=KJmu10PO1YkAX_p4L8u&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdQ2fvoENIizLOtJwdqGWvKiTr64I0yPcsctqBB7ZKVkJw&oe=64FE6CDA' },
        { id: 5, url: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/358822586_742771977620993_6308341829672982832_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=ThDj6VjGnwEAX-P5vfJ&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdQC6tNkmHgjGJCNqLoAsDpUjZAhYN2DPtkwAMnn7yQRTQ&oe=64FE9C81' },
    ];

    return (
        <View style={customerStyles.page_container}>

            {/* Room Screen Scroll View */}
            <ScrollView style={{ flex: 1, marginBottom: 140 }}>
                {/* Top Bar */}
                <View style={customerStyles.top_bar}>
                    <TouchableOpacity
                        style={customerStyles.top_bar_button}
                        onPress={
                            () => { navigation.goBack() }
                        }
                    >
                        <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                    <JoyText style={customerStyles.top_bar_title}>Detail Room</JoyText>
                </View>

                {/* Thumbnail Slider */}
                <View style={{ marginTop: 12 }}>
                    <Carousel
                        ref={isCarousel}
                        data={SliderItems}
                        renderItem={renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        onSnapToItem={index => setIndex(index)}
                    />
                    <Pagination
                        dotsLength={SliderItems.length}
                        activeDotIndex={index}
                        carouselRef={isCarousel}
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



                {/* Room Information */}
                <View style={customerStyles.section_container}>
                    <JoyText style={customerStyles.page_title}>Deluxe room</JoyText>
                    <JoyText>Bla bla</JoyText>
                </View>

                <View style={customerStyles.divider}></View>


                {/* Payment Information */}
                <View style={customerStyles.section_container}>
                    <JoyText style={customerStyles.section_title}>Payment Information</JoyText>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.text}>Per night</JoyText>
                        <JoyText style={styles.text}>200.000 VND</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.text}>From</JoyText>
                        <JoyText style={styles.text}>Thu, 4/6/2023</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.text}>To</JoyText>
                        <JoyText style={styles.text}>Sat, 6/6/2023</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.text}>Total night</JoyText>
                        <JoyText style={styles.text}>2 night</JoyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <JoyText style={styles.primary_text}>Total</JoyText>
                        <JoyText style={styles.primary_text}>400.000 VND</JoyText>
                    </View>
                </View>

                <View style={customerStyles.divider}></View>


                {/* Cancellation Policy */}
                <View style={customerStyles.section_container}>
                    <JoyText style={customerStyles.section_title}>Cancellation Policy</JoyText>
                    <JoyText style={styles.text}>Free cancellation 1 hour before check-in</JoyText>
                </View>

            </ScrollView>


            {/* Fixed Booking Bar */}
            <View style={fixedBarStyle.bar_container}>
                {/* Choose Date */}
                <TouchableOpacity
                    style={fixedBarStyle.bar_calendar}
                >
                    <FontAwesome5Icon name={"calendar-alt"} size={28} color={COLORS.primary} />
                    <JoyText style={fixedBarStyle.calendar_text}>Thu, 4/6/2023 - Sat, 6/6/2023</JoyText>
                </TouchableOpacity>


                {/* Price - Book button */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <JoyText style={fixedBarStyle.bar_price}>400.000 VND</JoyText>
                    <TouchableOpacity
                        style={fixedBarStyle.book_button}
                        onPress={() => { navigation.navigate('PaymentPage') }}>
                        <JoyText style={fixedBarStyle.book_button_text}>Book</JoyText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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

    text: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,
        fontWeight: '500',

        marginTop: 8,
    },
    primary_text: {
        color: COLORS.primary,
        fontSize: TEXTS.xl,
        fontWeight: '600',

        marginTop: 8,
    },
});

const fixedBarStyle = StyleSheet.create({
    bar_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 140,
        elevation: 20,
        // justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 12,
    },
    bar_calendar: {
        height: 52,
        width: '100%',
        backgroundColor: COLORS.primary_50,
        borderRadius: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    calendar_text: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: TEXTS.md,
    },
    bar_price: {
        color: COLORS.heading_text,
        fontSize: TEXTS.xxl,
        fontWeight: '600',
        alignSelf: 'center'
    },
    book_button: {
        backgroundColor: COLORS.primary,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '45%',
    },
    book_button_text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: TEXTS.lg
    },
})