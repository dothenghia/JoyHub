import { createBottomTabNavigator, useIsFocused } from "@react-navigation/bottom-tabs";
import React, { lazy, Suspense} from "react";
import { Text, Image } from "react-native";
import { COLORS } from "../../constants/theme";
import HomeLogo from "../../assets/general/logo.svg";

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
                    tabBarIcon: ({ focused, size }) => (
                        <HomeLogo
                            width={size}
                            height={size}
                            fill={focused ? COLORS.primary : COLORS.disable}
                        />
                    ),
                }}
            />
            <tab.Screen name="HotelPage" component={HotelScreen} />
            <tab.Screen name="ReportPage" component={ReportScreen} />
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
        </tab.Navigator>
    );
}
