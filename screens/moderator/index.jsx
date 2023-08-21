import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./MainScreen";
import RoomScreen from "./RoomScreen";
import NotificationScreen from './NotificationScreen';
import UserScreen from "./UserScreen";
import AddRoomScreen from "./AddRoomScreen";
import DetailedRoomScreen from "./DetailedRoomScreen";
import WalletScreen from "./WalletScreen";

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function ModeratorMain() {
    return (
        <Tab.Navigator
            initialRouteName="MainPage"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#FF6400",
                tabBarStyle: [
                    {
                        "display": "flex",
                        height: 58,
                        paddingTop: 6,
                        paddingBottom: 6,
                    },
                ]
            }}
            backBehavior="history"
        >
            <Tab.Screen name="MainPage" component={MainScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="RoomPage" component={RoomScreen}
                options={{
                    tabBarLabel: 'Rooms',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="bed" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="NotificationPage" component={NotificationScreen}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="UserPage" component={UserScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="AddRoomPage" component={AddRoomScreen} options={{ tabBarButton: (props) => (null), }} />
            <Tab.Screen name="DetailedRoomPage" component={DetailedRoomScreen} options={{ tabBarButton: (props) => (null), }} />
            <Tab.Screen name="WalletPage" component={WalletScreen} options={{ tabBarButton: (props) => (null), }} />

        </Tab.Navigator>
    );
}
