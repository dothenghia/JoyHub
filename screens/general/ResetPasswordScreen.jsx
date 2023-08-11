import { useState } from "react";
import { StyleSheet, ToastAndroid, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import generalStyles from '../../styles/general'

export default function ResetPasswordScreen({ navigation }) {

    // ------ Data State
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');


    // ------ Event Handlers
    const submitHandler = () => {
        navigation.navigate('LoginPage')
        ToastAndroid.show('Reset password successfully', ToastAndroid.SHORT)
    }


    // ------ UI Renderer
    return (
        <ScrollView style={generalStyles.page_container}>

            {/* Back button */}
            <View style={{ alignItems: 'flex-start', marginTop: 28 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RecoveryPage')}
                >
                    <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                        Back
                    </JoyText>
                </TouchableOpacity>
            </View>


            {/* Heading & Subheading */}
            <JoyText style={generalStyles.heading_1}>Create New Password</JoyText>
            <JoyText style={generalStyles.subheading_2}>Your new password must be unique from those previously used</JoyText>

            
            {/* ====== Input ====== */}
            <JoyText style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 20 }}>New Password</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter New Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
            />

            <JoyText style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Confirm New Password</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Confirm New Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setConfirm(e)}
            />

            {/* Reset Password button */}
            <View>
                <TouchableOpacity
                    onPress={submitHandler}
                    style={ generalStyles.button_1 }
                >
                    <JoyText style={ generalStyles.button_text_1 }>
                        Reset Password
                    </JoyText>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

});
