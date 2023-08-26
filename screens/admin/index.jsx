import { createBottomTabNavigator, useIsFocused } from "@react-navigation/bottom-tabs";
import React, { lazy, Suspense } from "react";
import { Text, Image } from "react-native";
import { COLORS } from "../../constants/theme";
import HomeLogo from "../../assets/general/logo.svg";
import Ionicons from 'react-native-vector-icons/Ionicons';
const LazyLoadScreen = (Component) => (props) =>
(
    <Suspense fallback={<Text>Loading...</Text>}>
        <Component {...props} />
    </Suspense>
);

const MainScreen = LazyLoadScreen(lazy(() => import("./MainScreen")));
const HotelScreen = LazyLoadScreen(lazy(() => import("./HotelScreen")));
const ReportScreen = LazyLoadScreen(lazy(() => import("./ReportScreen")));
const DetailHotel = LazyLoadScreen(lazy(() => import("./DetailHotel")));
const RoomScreen = LazyLoadScreen(lazy(() => import("./RoomScreen")));
const DetailRoom = LazyLoadScreen(lazy(() => import("./DetailRoom")));
const DetailReport = LazyLoadScreen(lazy(() => import("./DetailReport")));

const tab = createBottomTabNavigator();

export default function AdminMain() {

    return (
        <tab.Navigator
            initialRouteName="MainPage"
            screenOptions={{ headerShown: false }}
            backBehavior="history"
        >
            <tab.Screen
                name="MainPage"
                component={MainScreen}
                options={{
                    tabBarLabel: 'Main',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <tab.Screen name="HotelPage" component={HotelScreen}
                options={{
                    tabBarLabel: 'Hotel',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="business" color={color} size={size} />
                    ),
                }}

            />
            <tab.Screen name="ReportPage" component={ReportScreen}
                options={{
                    tabBarLabel: 'Report',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper" color={color} size={size} />
                    ),
                }}
            />
            {/* Hidden screen */}
            <tab.Screen
                name="AdminDetailHotel"
                component={DetailHotel}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: "none" },
                }}
            />
            <tab.Screen
                name="AdminRoomScreen"
                component={RoomScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: "none" },
                }}
            />
            <tab.Screen
                name="AdminDetailRoom"
                component={DetailRoom}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: "none" },
                }}
            />
            <tab.Screen
                name="AdminDetailReport"
                component={DetailReport}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: "none" },
                }}
            />

        </tab.Navigator>
    );
}
