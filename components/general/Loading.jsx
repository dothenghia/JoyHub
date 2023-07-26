import { useState } from "react";
import { StyleSheet, Text, Modal, View, ActivityIndicator } from "react-native";

// Import Style & Theme
import { COLORS, TEXTS } from '../../constants/theme'
import generalStyles from '../../styles/general'

export default function RecoveryScreen({ navigation }) {

    const [modalVisibility, setModalVisibility] = useState(false)


    // ------ UI Renderer
    return (
        <View style={generalStyles.page_container}>

            {/* ======= Recovery Modal ====== */}
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisibility}
                onRequestClose={() => {
                    setModalVisibility(false);
                }}
            >
                <View style={styles.modal_page}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    modal_page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
