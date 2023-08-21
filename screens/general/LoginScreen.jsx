// Import Hook & Component
import { useState, useContext } from "react";
import { StyleSheet, ToastAndroid, View, Image, TouchableOpacity, TextInput } from "react-native";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import generalStyles from '../../styles/general'

// Import Controller
import GController from "../../controllers/generalController";

// Import Context
import { globalContext } from "../../contexts/GlobalContext";


export default function LoginScreen({ navigation }) {
    // Get Context value (Global Variables)
    const { role, setRole } = useContext(globalContext)
    console.log('[Login] role :', role)

    // ------ Data State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // ------ Event Handlers
    // Function called when the user presses Login button
    const loginHandler = async () => {
        // for testing UI
        if (username === 'c') {
            navigation.navigate('CustomerMain')
            ToastAndroid.show('Login to CUSTOMER successfully', ToastAndroid.SHORT)
            setRole('customer')
        }
        else if (username === 'm') {
            navigation.navigate('ModeratorMain')
            ToastAndroid.show('Login to MODERATOR successfully', ToastAndroid.SHORT)
            setRole('moderator')
        }
        else if (username === 'a') {
            navigation.navigate('AdminMain')
            ToastAndroid.show('Login to ADMIN successfully', ToastAndroid.SHORT)
            setRole('admin')
        }
        // for testing server
        else {
            const { error, role } = await GController('LOGIN', username, password);
            if (error) {
                alert(error);
            }
            else {
                switch (role) {
                    case 'customer':
                        navigation.navigate('CustomerMain');
                        ToastAndroid.show('Login to CUSTOMER successfully', ToastAndroid.SHORT)
                        break;
                    case 'moderator':
                        navigation.navigate('ModeratorMain');
                        ToastAndroid.show('Login to MODERATOR successfully', ToastAndroid.SHORT)
                        break;
                    case 'admin':
                        navigation.navigate('AdminMain');
                        ToastAndroid.show('Login to ADMIN successfully', ToastAndroid.SHORT)
                        break;
                    default:
                        alert('Invalid role');
                        break;
                }
            }
        }
    }

    // Function called when the user presses Forgot Password button
    const forgotPasswordHandler = () => {
        navigation.navigate('RecoveryPage')
    }

    const guestHandler = () => {
        setRole('guest')
        navigation.navigate("CustomerMain")
    }

    const signupHandler = () => {
        navigation.navigate("SignupPage")
    }


    // ------ UI Renderer
    return (
        <View style={generalStyles.page_container}>

            {/* Logo HOME */}
            <View style={styles.logo1}>
                <Image
                    source={require('../../assets/general/home.png')}
                    style={styles.logo_image}
                />
            </View>

            {/* Logo JOY-HUB text */}
            <View style={styles.logo2}>
                <Image
                    source={require('../../assets/general/joyhub.png')}
                    style={styles.logo_image}
                />
            </View>

            {/* Slogan */}
            <JoyText style={{ ...generalStyles.subheading_1, paddingHorizontal: 80, textAlign: 'center' }}>where you can discover, book or host a room</JoyText>

            {/* Input */}
            <JoyText style={generalStyles.input_label}>Username</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Username'
                placeholderTextColor={COLORS.subheading_text}
                allowFontScaling={false}
                autoCapitalize="none"
                onChangeText={(e) => setUsername(e)}
            />

            {/* Input */}
            <JoyText style={generalStyles.input_label}>Password</JoyText>
            <TextInput
                style={generalStyles.input_field}
                placeholder='Enter Password'
                placeholderTextColor={COLORS.subheading_text}
                autoCapitalize="none"
                allowFontScaling={false}
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
            />

            {/* Forgot Password button */}
            <View style={{ alignItems: 'flex-end', marginTop: 4 }}>
                <TouchableOpacity
                    onPress={forgotPasswordHandler}
                >
                    <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                        Forget password?
                    </JoyText>
                </TouchableOpacity>
            </View>

            {/* Log in button */}
            <View >
                <TouchableOpacity
                    onPress={loginHandler}
                    style={generalStyles.button_1}
                >
                    <JoyText style={generalStyles.button_text_1}>
                        Log in
                    </JoyText>
                </TouchableOpacity>
            </View>

            {/* Log in as Guest button */}
            <View style={{ alignItems: 'center', marginTop: 28 }}>
                <TouchableOpacity
                    onPress={guestHandler}
                >
                    <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600' }}>
                        Log in as guest
                    </JoyText>
                </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={generalStyles.divider}></View>


            {/* Sign up Line */}
            <View style={styles.signupLine}>
                <JoyText style={{ color: COLORS.text, fontSize: TEXTS.lg }}>
                    If you don't have an account,
                </JoyText>
                <TouchableOpacity
                    onPress={signupHandler}
                >
                    <JoyText style={{ color: COLORS.primary, fontSize: TEXTS.lg, fontWeight: '600', marginLeft: 3 }}>
                        Create one
                    </JoyText>
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

    },
});
