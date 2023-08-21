import React, {useState, Suspense, useEffect,} from "react";
import {useIsFocused} from "@react-navigation/native";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import generalStyles from "../../styles/general";
import {SearchBar, TopBar} from "../../components/admin/Bar";
import {AvatarCard} from "../../components/admin/Card";
import {TEXTS} from "../../constants/theme";
import AController from "../../controllers/adminController";

const LazyLoadScreen = (Component) => (props) => (<Suspense fallback={<Text>Loading...</Text>}>
        <Component {...props} />
    </Suspense>);
// Component
export const ModeratorItem = ({item, navigation}) => (<TouchableOpacity
        onPress={() => {
            navigation.navigate("AdminDetailHotel", {hotel: item});
        }}>
        <AvatarCard
            Title={item.name}
            ImageUri={"https://unsplash.com/photos/M7GddPqJowg"}
            Address={item.address}
        />
    </TouchableOpacity>)

const LazyModeratorItem = LazyLoadScreen(ModeratorItem);

const ModeratorList = ({data, navigation}) => (<FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (<LazyModeratorItem item={item} navigation={navigation}/>)}
    />);

const SearchAndHeader = ({searchQuery, handleSearch}) => (<View>
        <TopBar
            Title={"Moderator Control"}
        />
        <SearchBar
            placeholder={"Type here..."}
            onChangeText={handleSearch}
            value={searchQuery}
        />
        <Text style={{fontSize: TEXTS.xl, fontWeight: "900"}}>
            Waiting for accept
        </Text>
    </View>);

// ------------------------------

// Function
const fetchModerator = async (setModerators) => {
    try {
        const response = await AController("GETMODERATOR");
        setModerators(response);
    } catch (error) {
        console.log(error);
    }
};

const filterData = (data, text) => {
    return data.filter((item) => {
        return item.name.toLowerCase().includes(text.toLowerCase());
    });
};

const MainScreen = ({navigation}) => {
    const isFocused = useIsFocused();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [moderators, setModerators] = useState([]);

    useEffect(() => {
        if (isFocused) {
            fetchModerator(setModerators);
        }
    }, [isFocused]);

    useEffect(() => {
        setFilteredData(moderators);
    }, [moderators]);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = filterData(moderators, text);
        setFilteredData(filtered);
    };

    return (<View style={generalStyles.page_container}>
            <SearchAndHeader
                searchQuery={searchQuery}
                handleSearch={handleSearch}
            />
            {/*if data is null, display a string*/}
            {filteredData.length === 0 ? (<Text style={{fontSize: TEXTS.xxl, fontWeight: "900", textAlign: "center", textAlignVertical: "center", height: "70%"}}>
                    THERE IS NO MODERATOR
                </Text>) : (<ModeratorList data={filteredData} navigation={navigation}/>)}
        </View>);
};

export default MainScreen;
