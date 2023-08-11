import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import generalStyles from '../../styles/general'

export default function SignupScreen({ navigation }) {

    // ------ UI Renderer
    return (
        <View style={generalStyles.page_container}>

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

            <JoyText style={{ marginTop: 180, color: COLORS.heading_text, fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
                You are
            </JoyText>

            {/* Select-Role buttons */}
            <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                {/* Role button */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('CustomerRegisterPage')}
                    style={styles.role_button}
                >
                    <JoyText style={styles.button_title}>Customer</JoyText>

                    <View style={styles.button_image_wrapper}>
                        <Image
                            source={require('../../assets/general/client.png')}
                            style={styles.button_image}
                        />
                    </View>

                    <JoyText style={styles.button_description}>who want to book accommodation</JoyText>
                </TouchableOpacity>

                {/* Role button */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('ModeratorRegisterPage')}
                    style={styles.role_button}
                >
                    <JoyText style={styles.button_title}>Moderator</JoyText>

                    <View style={styles.button_image_wrapper}>
                        <Image
                            source={require('../../assets/general/hotel.png')}
                            style={styles.button_image}
                        />
                    </View>

                    <JoyText style={styles.button_description}>who provide accommodation</JoyText>
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
        paddingHorizontal: 12,
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
        fontSize: TEXTS.sm,
    },
});
