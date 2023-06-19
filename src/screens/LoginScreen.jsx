import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Style & Theme
import { COLORS, TEXTS } from '../constants/theme'
import generalStyles from "../styles";

// Components
import InputField from "../components/common/InputField/InputField";

export default function LoginScreen({ navigation }) {
    
    // ------ Handle data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        if (username === 'thao' && password === 'hien') {
            navigation.navigate("CustomerMain")
            alert('Log in successfully');
        }
        else {
            alert('username : thao\npassword : hien');
        }
    }

    const forgotPasswordHandler = () => {
        alert('username : thao\npassword : hien');
    }


    // ------ Render UI
    return (
        <View style={ generalStyles.page_container }>

            <View style={ styles.logo1 }>
                <Image
                    source={require('../assets/icons/home.png')}
                    style={ styles.logo_image }
                />
            </View>

            <View style={ styles.logo2 }>
                <Image
                    source={require('../assets/icons/joyhub.png')}
                    style={ styles.logo_image }
                />
            </View>

            <Text style={{ ...generalStyles.subheading_1, paddingHorizontal: 80, textAlign: 'center' }}>where you can discover, book or host a room</Text>

            <Text style={generalStyles.input_label}>Username</Text>
            <InputField
                plhd='Enter Username'
                setTextValue={setUsername}
            />

            <Text style={generalStyles.input_label}>Password</Text>
            <InputField
                plhd='Enter Password'
                setTextValue={setPassword}
            />

            <View style={{ alignItems: 'flex-end', marginTop: 4 }}>
                <TouchableOpacity
                    onPress={forgotPasswordHandler}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                        Forget password?
                    </Text>
                </TouchableOpacity>
            </View>

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

            <View style={{ alignItems: 'center', marginTop: 28 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CustomerMain")}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                        Log in as guest
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 40, width: '100%', height: 2, backgroundColor: '#DEDEDE' }}></View>

            
            <View style={ styles.signupLine }>
                <Text>
                    If you don't have an account,
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignupPage")}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600', marginLeft: 3}}>
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

