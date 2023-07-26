import { StyleSheet, Modal, View, ActivityIndicator } from "react-native";

// Import Style & Theme
import { COLORS } from '../../constants/theme'

// ====== Component này sẽ nhận tham số boolean là 'isLoading' ======
export default function LoadingModal(props) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.isLoading}
            statusBarTranslucent={true}
        >
            <View style={styles.modal_page}>
                {/* <View style={styles.modal_container}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View> */}

                <ActivityIndicator size="large" color={COLORS.primary} />

            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_container: {
        width: 80,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
