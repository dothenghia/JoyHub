import { useContext } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Context
import { globalContext } from "../../contexts/GlobalContext";

export default function UserScreen({ navigation }) {
    const { role, setRole } = useContext(globalContext)
    console.log('[Customer] UserScreen')

    const editInformationHandler = () => {
        navigation.navigate('EditInformationPage')
    }

    const topupHandler = () => {
        navigation.navigate('TopupPage')
    }

    const recentlyViewHandler = () => {

    }

    const favoriteHandler = () => {

    }

    const logoutHandler = () => {
        setRole('guest')
        navigation.navigate('LoginPage')
    }

    return (
        <View style={customerStyles.page_container}>
            <View style={customerStyles.fixed_top_bar}>
                <JoyText style={{ ...customerStyles.top_bar_title, top: 12 }}>Profile</JoyText>
            </View>

            {
                role === 'guest' && (
                    <View style={{ flex: 1, marginTop: 60 - 6, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.heading_text }}>Please </JoyText>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('LoginPage') }}
                        >
                            <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.primary, fontWeight: '600' }}>Log in</JoyText>
                        </TouchableOpacity>
                        <JoyText style={{ fontSize: TEXTS.xl, color: COLORS.heading_text }}> to see your Profile</JoyText>
                    </View>
                )
            }

            {
                role === 'customer' && (
                    <ScrollView style={{ flex: 1, marginTop: 60 }}>
                        <View style={styles.info_container}>
                            <View style={styles.icon_wrapper}>
                                <FontAwesome5Icon name={"user-circle"} solid size={90} color={COLORS.primary} />
                            </View>
                            <View style={styles.text_container}>
                                <JoyText style={styles.username}>The Nghia</JoyText>
                                <JoyText style={styles.joycoin}>JoyCoin : 200.000</JoyText>
                            </View>
                        </View>

                        <View style={customerStyles.section_container}>
                            <TouchableOpacity style={styles.button}
                                onPress={editInformationHandler}
                            >
                                <JoyText style={styles.button_text}>
                                    Edit information
                                </JoyText>
                                <FontAwesome5Icon style={styles.button_icon} name={"user-edit"} solid size={24} color={COLORS.heading_text} />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.button}
                                onPress={topupHandler}
                            >
                                <JoyText style={styles.button_text}>
                                    Top up JoyCoin
                                </JoyText>
                                <FontAwesome5Icon style={styles.button_icon} name={"coins"} solid size={24} color={COLORS.heading_text} />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.button}
                                onPress={recentlyViewHandler}
                            >
                                <JoyText style={styles.button_text}>
                                    Recently view
                                </JoyText>
                                <FontAwesome5Icon style={styles.button_icon} name={"eye"} solid size={24} color={COLORS.heading_text} />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.button}
                                onPress={favoriteHandler}
                            >
                                <JoyText style={styles.button_text}>
                                    My favorite Hotel
                                </JoyText>
                                <FontAwesome5Icon style={styles.button_icon} name={"heart"} solid size={24} color={COLORS.heading_text} />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.button}
                                onPress={logoutHandler}
                            >
                                <JoyText style={styles.button_text}>
                                    Log out
                                </JoyText>
                                <FontAwesome5Icon style={styles.button_icon} name={"sign-out-alt"} solid size={24} color={COLORS.heading_text} />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )
            }


        </View>
    );
}

const styles = StyleSheet.create({
    info_container: {
        marginTop: 10,
        paddingTop: 10,
        paddingHorizontal: 24,
        marginBottom: 20,
        flexDirection: 'row',
        width: '100%',
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon_wrapper: {
        width: '30%',
        height: '100%',
        marginLeft: 18,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    text_container: {
        flex: 1,
    },
    username: {
        fontSize: TEXTS["3xl"],
        fontWeight: 'bold',
        color: COLORS.heading_text,
    },
    joycoin: {
        marginTop: 8,
        fontSize: TEXTS.lg,
        color: COLORS.heading_text,
    },

    button: {
        width: '100%',
        height: 72,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#DEDEDE',
    },
    button_icon: {
        marginRight: 8,
    },
    button_text: {
        fontSize: TEXTS.xxl,
        color: COLORS.heading_text,
        fontWeight: 'bold',
        marginLeft: 4,
    },
});
