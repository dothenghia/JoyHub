import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

// Style & Theme
import { COLORS } from '../constants/theme'
import generalStyles from "../styles";

// Components & Assets
import InputField from "../components/common/InputField/InputField";

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.background_color, marginTop: 33, paddingHorizontal: 32 }}>
            
            <View style={{width: '100%', height: 120, marginTop: 76, alignItems: 'center'}}>
                <Image 
                    source={require('../assets/icons/home.png')}
                    style={{width: '100%', height: '100%', resizeMode: 'contain' }}
                />
            </View>

            <View style={{ width: '100%', height: 50, marginTop: 10, alignItems: 'center'}}>
                <Image 
                    source={require('../assets/icons/joyhub.png')}
                    style={{width: '100%', height: '100%', resizeMode: 'contain' }}
                />
            </View>

            <Text style={{...generalStyles.subheading_1 , paddingHorizontal: 80}}>where you can discover, book or host a room</Text>

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
            

            <View style={{ backgroundColor: 'salmon' }}>
                <Button
                    title="Sign up"
                    onPress={() => navigation.navigate("SignupPage")}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

});
