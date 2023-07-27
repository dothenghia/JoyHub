import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, {lazy, Suspense} from "react";
import {Text} from "react-native";

const LazyLoadScreen = (Component) => (props) => (
    <Suspense fallback={<Text>Loading...</Text>}>
        <Component {...props} />
    </Suspense>
);

const MainScreen = LazyLoadScreen(lazy(() => import("./MainScreen")));
const HotelScreen = LazyLoadScreen(lazy(() => import("./HotelScreen")));
const ReportScreen = LazyLoadScreen(lazy(() => import("./ReportScreen")));

const tab = createBottomTabNavigator();

export default function AdminMain() {
    return (
        <tab.Navigator initialRouteName="MainPage" screenOptions={{ headerShown: false }}>
            <tab.Screen name="MainPage" component={MainScreen} />
            <tab.Screen name="HotelPage" component={HotelScreen} />
            <tab.Screen name="ReportPage" component={ReportScreen} />
        </tab.Navigator>
    );
}