import { StyleSheet, ToastAndroid, View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import JoyText from '../../components/general/JoyText'
import SelectDropdown from 'react-native-select-dropdown'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'
import { useState, useEffect } from "react";

// Import Controller
import CController from "../../controllers/customerController";

// Import Loading Modal
import LoadingModal from '../../components/general/LoadingModal'


const bankList = [
    {
        name: 'Agribank'
    },
    {
        name: 'Vietcombank'
    },
    {
        name: 'Sacombank'
    }

]

export default function TopupScreen({ navigation, route }) {
    console.log('[Customer] TopupScreen')

    // ------ Data State
    const [loading, setLoading] = useState(false)

    const [bank, setBank] = useState()
    const [credit, setCredit] = useState()
    const [coinInput, setCoinInput] = useState('0')



    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }

    const submitTopupHandler = () => {
        const sendTopup = async () => {
            setLoading(true);
            let data = await CController('SENDTOPUP', route.params.info, coinInput)
            ToastAndroid.show('Top up successfully', ToastAndroid.SHORT)
            navigation.navigate('UserPage')
            setLoading(false);
        }

        sendTopup()
    }

    return (
        <View style={customerStyles.page_container}>

            {/* ------ LOADING MODAL ------ */}
            <LoadingModal isLoading={loading} />

            <View style={{ ...customerStyles.top_bar, justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={customerStyles.top_bar_button}
                    onPress={backHandler}
                >
                    <AntDesign name={"arrowleft"} size={18} color={COLORS.primary} />
                </TouchableOpacity>
                <JoyText style={customerStyles.top_bar_title}>Edit Information</JoyText>
            </View>



            <View style={customerStyles.section_container}>
                <JoyText style={styles.input_label}>Select Bank</JoyText>

                <SelectDropdown
                    data={bankList}
                    buttonStyle={styles.dropdown}
                    dropdownStyle={{ marginTop: -24 }}
                    rowStyle={styles.dropdown_text}
                    selectedRowStyle={{ backgroundColor: COLORS.primary }}
                    selectedRowTextStyle={{ color: 'white' }}
                    defaultButtonText="Select Bank"
                    onSelect={(bank, index) => {
                        setBank(bank)
                    }}
                    buttonTextAfterSelection={(bank, index) => {
                        return bank.name
                    }}
                    rowTextForSelection={(bank, index) => {
                        return bank.name
                    }}
                />

                <JoyText style={styles.input_label}>Credit card number</JoyText>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Credit card number'
                    value={credit}
                    allowFontScaling={false}
                    keyboardType="numeric"
                    placeholderTextColor={COLORS.subheading_text}
                    onChangeText={(e) => setCredit(e)}
                />

                <JoyText style={styles.input_label}>Joycoin</JoyText>
                <TextInput
                    style={styles.input}
                    placeholder='Enter the amount of Joycoin'
                    value={coinInput}
                    allowFontScaling={false}
                    keyboardType="numeric"
                    placeholderTextColor={COLORS.subheading_text}
                    onChangeText={(e) => setCoinInput(e)}
                />

                <TouchableOpacity
                    style={styles.bottom_button}
                    onPress={submitTopupHandler}
                >
                    <JoyText style={styles.bottom_button_text}>Submit</JoyText>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 52,
        marginBottom: 14,
        backgroundColor: COLORS.input_background,

        paddingHorizontal: 6,
        borderColor: COLORS.divider,
        borderBottomWidth: 2,

        fontSize: TEXTS.lg,
        color: COLORS.text
    },
    input_label: {
        color: COLORS.heading_text,
        fontSize: TEXTS.lg,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 6,
    },

    bottom_button: {
        marginTop: 300,
        backgroundColor: COLORS.primary,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
    },
    bottom_button_text: {
        color: COLORS.white,
        fontSize: TEXTS.xl,
        fontWeight: '600',
    },



    dropdown: {
        marginTop: 12,
        width: '100%',
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
