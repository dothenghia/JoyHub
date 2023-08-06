import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Controller
import CController from "../../controllers/customerController";

// Import Component
import HotelCard from "../../components/customer/main/HotelCard";


export default function MainScreen({ navigation }) {
    console.log('[Customer] MainScreen')
    // ------ Data State
    const [hotelList, setHotelList] = useState([])
    const [searchInput, setSearchInput] = useState('')

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchHotelList = async () => {
            let data = await CController('GETHOTELLIST')
            setHotelList(data)
        }

        fetchHotelList()
    }, [])



    return (
        <ScrollView style={customerStyles.page_container}>
            {/* Logo JOY-HUB text */}
            <View style={styles.logo}>
                <Image
                    source={require('../../assets/customer/joyhub.png')}
                    style={styles.logo_image}
                />
            </View>

            {/* Search Input */}
            <View style={{ paddingHorizontal: 24 }}>
                <TextInput
                    style={styles.search_input}
                    placeholder='Search Hotel Name'
                    placeholderTextColor={COLORS.subheading_text}
                    autoCapitalize="none"
                    onChangeText={(e) => setSearchInput(e)}
                />
            </View>

            {/* Filer Location Line */}
            <View style={{ paddingHorizontal: 24 }}>
                <TouchableOpacity style={styles.filer_line}>
                    <Text style={{color: COLORS.text}}>
                        Hồ Chí Minh City
                    </Text>
                    <Text style={{ color: COLORS.primary, fontWeight: '600', marginLeft: 3 }}>
                        ^
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Hotel List */}
            <View style={customerStyles.section_container}>
                {
                    hotelList.map((hotel) => {
                        return (<HotelCard key={hotel.id} props={hotel} navigation={navigation}/>)
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width:100,
        height: 32,
        marginTop: 16,
        marginLeft: 32,
        alignItems : 'flex-start',
    },
    logo_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    search_input: {
        width: '100%',
        height: 50,
        marginTop: 14,
        backgroundColor: COLORS.input_background,

        paddingHorizontal: 20,
        borderColor: COLORS.input_border,
        borderWidth: 2,
        borderRadius: 50,

        fontSize: TEXTS.md,
        color: COLORS.text
    },

    filer_line: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
