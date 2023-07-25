import { useState } from "react";
import { StyleSheet, Text, Modal, View, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";

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
    }


    // ------ UI Renderer
    return (
        <ScrollView style={generalStyles.page_container}>

            {/* Back button */}
            <View style={{ alignItems: 'flex-start', marginTop: 28 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RecoveryPage')}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>


            {/* Heading & Subheading */}
            <Text style={generalStyles.heading_1}>Create New Password</Text>
            <Text style={generalStyles.subheading_2}>Your new password must be unique from those previously used</Text>

            
            {/* ====== Input ====== */}
            <Text style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 20 }}>New Password</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter New Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
            />

            <Text style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Confirm New Password</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Confirm New Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setConfirm(e)}
            />

            {/* Reset Password button */}
            <View style={{ marginBottom: 50 }}>
                <TouchableOpacity
                    onPress={submitHandler}
                    style={{ backgroundColor: COLORS.primary, height: 52, marginTop: 24, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
                >
                    <Text style={{ color: '#fff', fontWeight: '800', fontSize: TEXTS.lg }}>
                        Reset Password
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

});
