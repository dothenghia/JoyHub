import { useState } from "react";
import { StyleSheet, ToastAndroid, View, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';
import JoyText from '../../components/general/JoyText'


// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import generalStyles from '../../styles/general'


export default function CusRegisterScreen({ navigation }) {

    // ------ Data State
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [isChecked, setChecked] = useState(false);

    // ------ Event Handlers
    const submitHandler = () => {
        navigation.navigate("LoginPage")
        ToastAndroid.show('Register successfully', ToastAndroid.SHORT)
    }

    // ------ UI Renderer
    return (
        <ScrollView style={generalStyles.page_container}>

            {/* Back button */}
            <View style={{ alignItems: 'flex-start', marginTop: 28 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignupPage')}
                >
                    <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                        Back
                    </JoyText>
                </TouchableOpacity>
            </View>

            {/* Register icon */}
            <View style={styles.icon_wrapper}>
                <Image
                    source={require('../../assets/general/register.png')}
                    style={styles.icon_image}
                />
            </View>

            {/* Heading & Subheading */}
            <JoyText style={generalStyles.heading_1}>Customer Register</JoyText>
            <JoyText style={generalStyles.subheading_2}>Enter your personal information</JoyText>


            {/* ====== Input ====== */}
            <JoyText style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 20 }}>Username</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Username'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                onChangeText={(e) => setUsername(e)}
            />

            <JoyText style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Full Name</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Full Name'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                onChangeText={(e) => setFullname(e)}
            />

            <JoyText style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Email</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Email'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                onChangeText={(e) => setEmail(e)}
            />

            <JoyText style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Password</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
            />

            <JoyText style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Confirm Password</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Confirm Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setConfirm(e)}
            />

            {/* Checkbox Term of Service */}
            <View style={styles.checkboxLine}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#FF6400' : undefined}
                />
                <JoyText style={{ fontSize: TEXTS.lg }}>
                    I accept the
                </JoyText>
                <TouchableOpacity>
                    <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, marginLeft: 3 }}>
                        Terms of Service
                    </JoyText>
                </TouchableOpacity>
            </View>

            {/* Submit button */}
            <View style={{ marginBottom: 50, marginTop: 8 }}>
                <TouchableOpacity
                    onPress={submitHandler}
                    style={generalStyles.button_1}
                >
                    <JoyText style={generalStyles.button_text_1}>
                        Register
                    </JoyText>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    icon_wrapper: {
        marginTop: 10,
        alignSelf: 'center',
        width: 116,
        height: 116,
        padding: 28,
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 100, 0, .1)',
    },
    icon_image: {
        marginLeft: 9,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    checkboxLine: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.text,
    },
    checkbox: {
        marginRight: 6,
        width: 28,
        height: 28,
        borderRadius: 6,
    },
});
