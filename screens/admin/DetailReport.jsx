import React, {Suspense, useEffect} from "react";
import {useIsFocused} from "@react-navigation/native";
import {FlatList, Text, View} from "react-native";
import generalStyles from "../../styles/general";
import {RemoveBar, TopBar} from "../../components/admin/Bar";
import {ReportDetailCard} from "../../components/admin/Card";
import AController from "../../controllers/adminController";

const data = [
    {
        "bookingId": 1,
        "date": "06/02/2023",
        "title": "There is a mouse",
        "description": "There is a mouse in my room",
    },
    {
        "bookingId": 2,
        "date": "12/09/2023",
        "title": "Bad service",
        "description": "The service is bad",
    },
    {
        "bookingId": 3,
        "date": "18/06/2023",
        "title": "Scam",
        "description": "The hotel is a scam",
    },
    {
        "bookingId": 4,
        "date": "03/11/2023",
        "title": "Scam",
        "description": "The hotel is a scam",
    },
];

const LazyLoadScreen = (Component) => (props) =>
    (
        <Suspense fallback={<Text>Loading...</Text>}>
            <Component {...props} />
        </Suspense>
    );
const ReportItem = ({ item }) => {
    return (
        <ReportDetailCard
            IdBooking={item.booking_id}
            Date={item.date}
            Title={item.title}
            Description={item.content}
        />
    )
}
const LazyReportItem = LazyLoadScreen(ReportItem);

const ReportList = ({ data }) => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.booking_id}
        renderItem={({ item }) => (
            <LazyReportItem item={item} />
        )}
    />
);

// --------------- Function ---------------
const fetchReport = async (setReports, hotel_id) => {
    try {
        const response = await AController("GET_REPORT_OF_HOTEL", hotel_id);
        setReports(response);
    } catch (error) {
        console.error(error);
    }
}

export default function DetailReportScreen({ route, navigation }) {
    const { hotel_name, hotel_id } = route.params;
    const isFocused = useIsFocused();
    const [reports, setReports] = React.useState([]);

    useEffect(() => {
        if (isFocused) {
            fetchReport(setReports, hotel_id);
        }
    }, [isFocused]);


    return (
        <View style={generalStyles.page_container}>
            <TopBar Title={hotel_name + " (" + reports.length + ")"} backIcon={true} navigation={navigation} />
            <ReportList data={reports} />
            <RemoveBar contactText={"Contact"} removeText={"REMOVE THIS ACCOUNT"} />
        </View>
    );
}
