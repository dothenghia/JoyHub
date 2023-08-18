import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'
import { useState } from "react";


export default function EditInformationScreen({ navigation }) {
    console.log('[Customer] EditInformationScreen')


    const [username, setUsername] = useState('The Nghia')
    const [phone, setPhone] = useState('19001234')
    const [email, setEmail] = useState('timemtrongbongdamn@gmail.com')

    // ------ Event Handlers
    const backHandler = () => {
        navigation.goBack()
    }

    const submitEditHandler = () => {

    }

    return (
        <View style={customerStyles.page_container}>
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
