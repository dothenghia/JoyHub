import { StyleSheet, ToastAndroid, View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'
import { useState, useEffect } from "react";

// Import Controller
import CController from "../../controllers/customerController";

// Import Loading Modal
import LoadingModal from '../../components/general/LoadingModal'

export default function EditInformationScreen({ navigation, route }) {
    console.log('[Customer] EditInformationScreen')


    // ------ Data State
    const [loading, setLoading] = useState(false)

    const [username, setUsername] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)

    // ------ Fetch Data at first render
    useEffect(() => {
        console.log('Edit :', route.params.info)
        setUsername(route.params.info.full_name)
        setPhone(route.params.info.phone)
        setEmail(route.params.info.email)
    }, [route.params])


    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }

    const submitEditHandler = () => {
        const sendEdit = async () => {
            setLoading(true);
            let data = await CController('SENDEDIT', email, phone, username)
            ToastAndroid.show('Edit successfully', ToastAndroid.SHORT)
            navigation.navigate('UserPage')
            setLoading(false);
        }

        sendEdit()
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
                <JoyText style={styles.input_label}>Username</JoyText>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Username'
                    value={username}
                    allowFontScaling={false}
                    placeholderTextColor={COLORS.subheading_text}
                    onChangeText={(e) => setUsername(e)}
                />

                <JoyText style={styles.input_label}>Phone number</JoyText>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Phone Number'
                    value={phone}
                    allowFontScaling={false}
                    placeholderTextColor={COLORS.subheading_text}
                    onChangeText={(e) => setPhone(e)}
                />

                <JoyText style={styles.input_label}>Email</JoyText>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email Address'
                    value={email}
                    allowFontScaling={false}
                    placeholderTextColor={COLORS.subheading_text}
                    onChangeText={(e) => setEmail(e)}
                />

                <TouchableOpacity
                    style={styles.bottom_button}
                    onPress={submitEditHandler}
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
        marginTop: 40,
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
});
