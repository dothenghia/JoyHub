import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { TopBar } from "../../components/admin/Bar";
import { SearchBar } from "react-native-elements";

import { COLORS, TEXTS } from "../../constants/theme";
import generalStyles from "../../styles/general";
import { searchStyles } from "../../styles/admin";

export default function MainScreen({ navigation }) {
    const [search, setSearch] = React.useState("");
    return (
        <View style={generalStyles.page_container}>
            <TopBar Title={"Moderator"} />
            <SearchBar
                placeholder="Type here..."
                onChangeText={setSearch}
                value={search}
                lightTheme="true"
                round="true"
                containerStyle={{
                    backgroundColor: "transparent",
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                }}
                inputContainerStyle={searchStyles.input_container}
                inputStyle={searchStyles.search_input}
            />
        </View>
    );
}
