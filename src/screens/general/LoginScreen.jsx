import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import generalStyles from "../../styles";

// Import Dispatcher
import GController from "../../controller/generalController";


export default function LoginScreen({ navigation }) {

    // ------ Data State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // ------ Event Handlers
    // Function called when the user presses Login button
    const loginHandler = async () => {
        const accessInfo = {
            username: username,
            password: password
        }
        const ThanhThao = await GController('CHECKLEGIT', accessInfo)
        console.log('Received Data from Server : ', ThanhThao)
    }

    // Function called when the user presses Forgot Password button
    const forgotPasswordHandler = () => {
        alert('nothing');
    }


    // ------ UI Renderer
    return (
        <View style={generalStyles.page_container}>

            {/* Logo HOME */}
            <View style={styles.logo1}>
                <Image
                    source={require('../../assets/icons/home.png')}
                    style={styles.logo_image}
                />
            </View>

            {/* Logo JOYHUB text */}
            <View style={styles.logo2}>
                <Image
                    source={require('../../assets/icons/joyhub.png')}
                    style={styles.logo_image}
                />
            </View>

            {/* Slogan */}
            <Text style={{ ...generalStyles.subheading_1, paddingHorizontal: 80, textAlign: 'center' }}>where you can discover, book or host a room</Text>

            {/* Input */}
            <Text style={generalStyles.input_label}>Username</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Username'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                onChangeText={(e) => setUsername(e)}
            />

            {/* Input */}
            <Text style={generalStyles.input_label}>Password</Text>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
            />

            {/* Forgot Passowrd button */}
            <View style={{ alignItems: 'flex-end', marginTop: 4 }}>
                <TouchableOpacity
                    onPress={forgotPasswordHandler}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                        Forget password?
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Log in button */}
            <View >
                <TouchableOpacity
                    onPress={loginHandler}
                    style={{ backgroundColor: COLORS.primary, height: 52, marginTop: 24, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
                >
                    <Text style={{ color: '#fff', fontWeight: '800', fontSize: TEXTS.lg }}>
                        Log in
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Log in as Guest button */}
            <View style={{ alignItems: 'center', marginTop: 28 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CustomerMain")}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                        Log in as guest
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={{ marginTop: 40, width: '100%', height: 2, backgroundColor: '#DEDEDE' }}></View>


            {/* Sign up Line */}
            <View style={styles.signupLine}>
                <Text>
                    If you don't have an account,
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignupPage")}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600', marginLeft: 3 }}>
                        Create one
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    logo1: {
        width: '100%', height: 120, marginTop: 76, alignItems: 'center'
    },
    logo2: {
        width: '100%', height: 50, marginTop: 10, alignItems: 'center'
    },
    logo_image: {
        width: '100%', height: '100%', resizeMode: 'contain'
    },

    signupLine: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        color: COLORS.text,
    },
});

