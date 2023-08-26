import { useContext, useState, useEffect, useCallback } from "react";
import { StyleSheet, RefreshControl, View, ScrollView, TouchableOpacity } from "react-native";
import JoyText from '../../components/general/JoyText'
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import customerStyles from '../../styles/customer'

// Import Controller
import CController from "../../controllers/customerController";

// Import Context
import { globalContext } from "../../contexts/GlobalContext";

// Import Loading Modal
import LoadingModal from '../../components/general/LoadingModal'

export default function UserScreen({ navigation }) {
    const { role, setRole } = useContext(globalContext)
    console.log('[Customer] UserScreen')

    // ------ Data State
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(false)


    // Refresh Control
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        if (role === 'customer') {
            const fetchUserInformation = async () => {
                setRefreshing(true);
                let data = await CController('GETUSERINFORMATION')
                setUserInfo(data)
                setRefreshing(false);
            }

            fetchUserInformation()
        }
    }, []);

    // ------ Fetch Data at first render
    useEffect(() => {
        if (role === 'customer') {
            const fetchUserInformation = async () => {
                setLoading(true);
                let data = await CController('GETUSERINFORMATION')
                setUserInfo(data)
                setLoading(false);
            }

            fetchUserInformation()
        }
    }, [])


    // ------ Event Handlers
    const editInformationHandler = () => {
        navigation.navigate('EditInformationPage', { info: userInfo })
    }

    const topupHandler = () => {
        navigation.navigate('TopupPage')
    }

    const recentlyViewHandler = () => {
        navigation.navigate('RecentlyViewPage')
    }

    const favoriteHandler = () => {
        navigation.navigate('FavoriteHotelPage')
    }

    const logoutHandler = () => {
        setRole('guest')
        navigation.navigate('LoginPage')
    }

    return (
        <ScrollView
            style={customerStyles.page_container}
            refreshControl={ // DÙNG ĐỂ VUỐT XUỐNG RELOAD TRANG
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#FF6400']}
                />
            }
        >
            <View style={customerStyles.fixed_top_bar}>
                <JoyText style={{ ...customerStyles.top_bar_title, top: 12 }}>Profile</JoyText>
            </View>

            {/* ------ LOADING MODAL ------ */}
            <LoadingModal isLoading={loading} />

            {
                role === 'guest' && (
                    <View style={{ flex: 1, marginTop: 400 - 6, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
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
                role === 'customer' && userInfo && (
                    <ScrollView style={{ flex: 1, marginTop: 60 }}>
                        <View style={styles.info_container}>
                            <View style={styles.icon_wrapper}>
                                <FontAwesome5Icon name={"user-circle"} solid size={90} color={COLORS.primary} />
                            </View>
                            <View style={styles.text_container}>
                                <JoyText style={styles.username}>{userInfo.full_name}</JoyText>
                                <JoyText style={styles.joycoin}>JoyCoin : {userInfo.wallet}</JoyText>
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


        </ScrollView>
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
