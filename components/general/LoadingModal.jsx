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
                <ActivityIndicator size="large" color={COLORS.primary} />

            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
