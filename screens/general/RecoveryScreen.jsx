import { useState } from "react";
import { StyleSheet, Modal, View, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import generalStyles from '../../styles/general'

export default function RecoveryScreen({ navigation }) {

    // ------ Data State
    const [username, setUsername] = useState('');
    const [otp, setOTP] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false)


    // ------ Event Handlers
    const sendCodeHandler = () => {
        setModalVisibility(true)
    }

    const verifyHandler = () => {
        setModalVisibility(false)
        navigation.navigate('ResetPasswordPage')
    }

    const resendHandler = () => {
        alert('Resend Hehe')
    }

    // ------ UI Renderer
    return (
        <ScrollView style={generalStyles.page_container}>
            {/* ======= Recovery Screen ====== */}
            <View>
                {/* Back button */}
                <View style={{ alignItems: 'flex-start', marginTop: 28 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginPage')}
                    >
                        <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                            Back
                        </JoyText>
                    </TouchableOpacity>
                </View>

                {/* Recovery icon */}
                <View style={styles.icon_wrapper}>
                    <Image
                        source={require('../../assets/general/recovery.png')}
                        style={styles.icon_image}
                    />
                </View>

                {/* Heading & Subheading */}
                <JoyText style={generalStyles.heading_1}>Forgot Password?</JoyText>
                <JoyText style={generalStyles.subheading_2}>Don’t worry! Enter the username, we will send recovery code to your email.</JoyText>


                {/* ====== Input ====== */}
                <JoyText style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 20 }}>Username</JoyText>
                <TextInput
                    style={generalStyles.input_field}
                    placeholder='Enter Username'
                    placeholderTextColor={COLORS.subheading_text}
                    autoCapitalize="none"
                    onChangeText={(e) => setUsername(e)}
                />


                {/* Send Code button */}
                <View style={{ marginBottom: 50 }}>
                    <TouchableOpacity
                        onPress={sendCodeHandler}
                        style={ generalStyles.button_1 }
                    >
                        <JoyText style={ generalStyles.button_text_1 }>
                            Send Code
                        </JoyText>
                    </TouchableOpacity>
                </View>
            </View>




            {/* ======= Recovery Modal ====== */}
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisibility}
                onRequestClose={() => {
                    setModalVisibility(false);
                }}
            >
                <View style={styles.modal_page}>
                    <View style={styles.modal_container}>

                        {/* Heading & Subheading */}
                        <JoyText style={generalStyles.heading_1}>OTP Verification</JoyText>
                        <JoyText style={generalStyles.subheading_2}>Enter the recovery code we just sent to your email address</JoyText>

                        {/* ====== Input ====== */}
                        <TextInput
                            style={{ ...generalStyles.input_field, marginTop: 20, marginBottom: 6 }}
                            placeholder='Enter OTP Code'
                            placeholderTextColor={COLORS.subheading_text}
                            onChangeText={(e) => setOTP(e)}
                            autoCapitalize="none"
                        />

                        {/* Verify Code button */}
                        <View style={{ marginBottom: 30 }}>
                            <TouchableOpacity
                                onPress={verifyHandler}
                                style={ generalStyles.button_1 }
                            >
                                <JoyText style={ generalStyles.button_text_1 }>
                                    Verify
                                </JoyText>
                            </TouchableOpacity>
                        </View>


                        {/* Divider */}
                        <View style={{ alignSelf: 'center', width: '96%', height: 2, backgroundColor: '#DEDEDE' }}></View>


                        {/* Resend code Line */}
                        <View style={styles.resendLine}>
                            <JoyText style={{color: COLORS.text, fontSize: TEXTS.lg}}>
                                Didn't received code?
                            </JoyText>
                            <TouchableOpacity
                                onPress={resendHandler}
                            >
                                <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600', marginLeft: 4 }}>
                                    Resend
                                </JoyText>
                            </TouchableOpacity>
                        </View>

                        {/* Cancel button */}
                        <View style={{ marginTop: 12, maxWidth: '20%'}}>
                            <TouchableOpacity
                                onPress={() => setModalVisibility(false)}
                            >
                                <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                                    Cancel
                                </JoyText>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    icon_wrapper: {
        alignSelf: 'center',
        width: 400,
        height: 400,
    },
    icon_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_container: {
        width: 360,
        height: 396,
        backgroundColor: 'white',
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    resendLine: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        color: COLORS.text,
    },
});
