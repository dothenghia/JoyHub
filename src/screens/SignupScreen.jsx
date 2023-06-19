import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Style & Theme
import { COLORS, TEXTS } from '../constants/theme'
import generalStyles from "../styles";

export default function SignupScreen({ navigation }) {

    // ------ Render UI
    return (
        <View style={generalStyles.page_container}>

            <View style={{ alignItems: 'flex-start', marginTop: 28 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginPage')}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={{ marginTop: 180, color: COLORS.heading_text, fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
                You are
            </Text>

            <View
                style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-between' }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('CustomerRegisterPage')}
                    style={styles.role_button}
                >
                    <Text style={styles.button_title}>Customer</Text>

                    <View style={styles.button_image_wrapper}>
                        <Image
                            source={require('../assets/icons/client.png')}
                            style={styles.button_image}
                        />
                    </View>

                    <Text style={styles.button_description}>who want to book accommodation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ModeratorRegisterPage')}
                    style={styles.role_button}
                >
                    <Text style={styles.button_title}>Moderator</Text>

                    <View style={styles.button_image_wrapper}>
                        <Image
                            source={require('../assets/icons/hotel.png')}
                            style={styles.button_image}
                        />
                    </View>

                    <Text style={styles.button_description}>who provide accommodation</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    role_button: {
        width: 156,
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 16,

        elevation: 10,
    },
    button_title: {
        color: COLORS.primary,
        fontSize: TEXTS.xl,
        fontWeight: 'bold',
    },
    button_image_wrapper: {
        width: 116,
        height: 116,
        padding: 24,
        marginTop: 10,
        alignItems: 'center',

        borderWidth: 3,
        borderRadius: 100,
        borderColor: COLORS.primary,
    },
    button_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    button_description: {
        marginTop: 12,
        color: COLORS.subheading_text,
        textAlign: 'center',
        fontSize: TEXTS.xs,
    },
});
