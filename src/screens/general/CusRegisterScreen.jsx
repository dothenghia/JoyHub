import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';


// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import generalStyles from "../../styles";


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
        alert('Register successfully');
    }

    // ------ UI Renderer
    return (
        <ScrollView style={generalStyles.page_container}>

            {/* Back button */}
            <View style={{ alignItems: 'flex-start', marginTop: 28 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignupPage')}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Register icon */}
            <View style={styles.icon_wrapper}>
                <Image
                    source={require('../../assets/icons/register.png')}
                    style={styles.icon_image}
                />
            </View>

            {/* Heading & Subheading */}
            <Text style={generalStyles.heading_1}>Customer Register</Text>
            <Text style={generalStyles.subheading_2}>Enter your personal information</Text>

            
            {/* ====== Input ====== */}
            <Text style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2, marginTop: 20 }}>Username</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Username'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                onChangeText={(e) => setUsername(e)}
            />

            <Text style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Full Name</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Full Name'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                onChangeText={(e) => setFullname(e)}
            />

            <Text style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Email</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Email'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                onChangeText={(e) => setEmail(e)}
            />

            <Text style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Password</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
            />

            <Text style={{ ...generalStyles.input_label, fontWeight: 'bold', marginTop: 2 }}>Confirm Password</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Confirm Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setConfirm(e)}
            />

            {/* Checkbox Term of Service */}
            <View style={ styles.checkboxLine }>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#FF6400' : undefined}
                />
                <Text>
                    I accept the 
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: COLORS.primary, marginLeft: 3}}>
                        Terms of Service
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Submit button */}
            <View style={{ marginBottom: 50 }}>
                <TouchableOpacity
                    onPress={submitHandler}
                    style={{ backgroundColor: COLORS.primary, height: 52, marginTop: 24, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
                >
                    <Text style={{ color: '#fff', fontWeight: '800', fontSize: TEXTS.lg }}>
                        Register
                    </Text>
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
