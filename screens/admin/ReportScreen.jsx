import React, {Suspense, useEffect, useState} from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import generalStyles from "../../styles/general";
import { TopBar, SearchBar } from "../../components/admin/Bar";
import { ReportCard } from "../../components/admin/Card";
import {useIsFocused} from "@react-navigation/native";
import AController from "../../controllers/adminController";

const LazyLoadScreen = (Component) => (props) =>
    (
        <Suspense fallback={<Text>Loading...</Text>}>
            <Component {...props} />
        </Suspense>
    );

const ReportItem = ({ item, navigation }) => {
    return (
            (item) ?
            <TouchableOpacity onPress={
                async () => {
                    if (!item.isRead) {
                        await AController("MARK_AS_READ", item.hotel_id);
                    }
                    navigation.navigate("AdminDetailReport", { hotel_name: item.hotel.name, hotel_id: item.hotel_id });
                }
            }>
                <ReportCard
                    hotel={(item.hotel)? item.hotel.name : "No hotel"}
                    title={(item.latest_report) ? item.latest_report.title : "No title"}
                    isRead={item.isRead}
                    date={item.date}
                />
            </TouchableOpacity> : <Text>Empty</Text>
    )
}

const LazyReportItem = LazyLoadScreen(ReportItem);

const ReportList = ({ data, navigation, markAsRead }) => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.hotel_id}
        renderItem={({ item }) => (
            <LazyReportItem item={item} navigation={navigation} markAsRead={markAsRead}/>
        )}
    />
);

const SearchAndHeader = ({ searchQuery, handleSearch }) => (
    <View>
        <TopBar Title={"Report Control"} />
        <SearchBar
            placeholder={"Type here..."}
            onChangeText={handleSearch}
            value={searchQuery}
        />
    </View>
);

// --------------- Function ---------------
const fetchReport = async (setReports) => {
    try {
        const response = await AController("GET_REPORT_LIST");
        setReports(response);
    } catch (error) {
        console.error(error);
    }
}

const filterReport = (data, text) => {
    return data.filter((item) => {
        return item.name.toLowerCase().includes(text.toLowerCase());
    });
}

export default function ReportScreen({ navigation }) {
    const isFocused = useIsFocused();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        if (isFocused) {
            fetchReport(setReports);
        }
    }, [isFocused]);

    useEffect(() => {
        setFilteredData(reports);
    }, [reports]);

    const handleSearch = (text) => {
        setSearchQuery(text);
        // Filter data
        const filtered = filterReport(reports, text);
        setFilteredData(filtered);
    };

    const markAsRead = (id) => {
        const updatedData = filteredData.map(async (item) => {
            console.log(item.hotel_id);
            if (item.hotel_id === id) {
                await AController("MARK_AS_READ", item.hotel_id);
            }
            return item;
        });
        setFilteredData(updatedData);
    }

    return (
        <View style={generalStyles.page_container}>
            <SearchAndHeader searchQuery={searchQuery} handleSearch={handleSearch} />
            <ReportList data={filteredData} navigation={navigation} markAsRead={markAsRead}/>
        </View>
    );
}
