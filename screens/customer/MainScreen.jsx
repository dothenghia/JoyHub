import { useState, useEffect } from "react";
import { StyleSheet, View, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SelectDropdown from 'react-native-select-dropdown'

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
    const [locationList, setLocationList] = useState([])
    const [city, setCity] = useState({})

    // ------ Fetch Data at first render
    useEffect(() => {
        const fetchHotelList = async () => {
            let data = await CController('GETHOTELLIST')
            setHotelList(data)
        }

        fetchHotelList()
    }, [])

    useEffect(() => {
        const fetchLocationList = async () => {
            const data = await CController('GETLOCATIONLIST')
            setLocationList(data)
        }

        fetchLocationList()
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
            <View style={{ ...customerStyles.section_container_no_py, marginTop: 14, flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    style={styles.search_input}
                    placeholder='Search Hotel Name'
                    placeholderTextColor={COLORS.subheading_text}
                    autoCapitalize="none"
                    onChangeText={(e) => setSearchInput(e)}
                />
                <TouchableOpacity
                    style={styles.search_button}

                >
                    <AntDesign name={"search1"} size={24} color={COLORS.subheading_text} />
                </TouchableOpacity>
            </View>

            {/* Filer Location Line */}
            <View style={styles.dropdowns_container}>

                <SelectDropdown
                    data={locationList}
                    buttonStyle={styles.dropdown}
                    dropdownStyle={{ marginTop: -24 }}
                    rowStyle={styles.dropdown_text}
                    selectedRowStyle={{ backgroundColor: COLORS.primary }}
                    selectedRowTextStyle={{ color: 'white' }}
                    defaultButtonText="Select City"
                    onSelect={(city, index) => {
                        setCity(city)
                    }}
                    buttonTextAfterSelection={(city, index) => {
                        // console.log(city.name)
                        return city.name
                    }}
                    rowTextForSelection={(city, index) => {
                        // console.log(city.name)
                        return city.name
                    }}
                />

                <SelectDropdown
                    data={city.districts}
                    buttonStyle={styles.dropdown}
                    dropdownStyle={{ marginTop: -24 }}
                    rowStyle={styles.dropdown_text}
                    selectedRowStyle={{ backgroundColor: COLORS.primary }}
                    selectedRowTextStyle={{ color: 'white' }}
                    defaultButtonText="Select District"
                    // onSelect={(district, index) => {
                    //     console.log(district, index)
                    // }}
                    buttonTextAfterSelection={(district, index) => {
                        // console.log(district.name)
                        return district.name
                    }}
                    rowTextForSelection={(district, index) => {
                        // console.log(district.name)
                        return district.name
                    }}
                />
            </View>



            {/* Hotel List */}
            <View style={customerStyles.section_container}>
                {
                    hotelList.map((hotel) => {
                        return (<HotelCard key={hotel.id} props={hotel} navigation={navigation} />)
                    })
                }
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 32,
        marginTop: 16,
        marginLeft: 32,
        alignItems: 'flex-start',
    },
    logo_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    search_input: {
        // width: '%',
        flex: 1,
        height: 50,
        backgroundColor: COLORS.input_background,

        paddingHorizontal: 20,
        borderColor: COLORS.input_border,
        borderWidth: 2,
        borderRadius: 10,
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,

        fontSize: TEXTS.sm,
        color: COLORS.text
    },
    search_button: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.input_background,
        borderColor: COLORS.input_border,
        borderWidth: 2,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dropdowns_container: {
        ...customerStyles.section_container_no_py,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
    dropdown: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: COLORS.top_button_border,
        borderWidth: 2,

    },
    dropdown_text: {
        width: '100%',
        backgroundColor: '#fff',

    },
});
