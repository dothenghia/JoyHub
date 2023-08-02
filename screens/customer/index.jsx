import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./MainScreen";
import ScheduleScreen from "./ScheduleScreen";
import NotificationScreen from './NotificationScreen';
import UserScreen from "./UserScreen";
import HotelScreen from "./HotelScreen";
import RoomScreen from "./RoomScreen";

const Tab = createBottomTabNavigator();

export default function CustomerMain() {
    return (
        <Tab.Navigator 
            initialRouteName="MainPage"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="MainPage" component={MainScreen} />
            <Tab.Screen name="SchedulePage" component={ScheduleScreen} />
            <Tab.Screen name="NotificationPage" component={NotificationScreen} />
            <Tab.Screen name="UserPage" component={UserScreen} />

            <Tab.Screen name="HotelPage" component={HotelScreen}
                options={{
                    tabBarButton: (props) => (null), 
                    tabBarStyle: {display: 'none'}}}
            />
            <Tab.Screen name="RoomPage" component={RoomScreen}
                options={{
                    tabBarButton: (props) => (null), 
                    tabBarStyle: {display: 'none'}}}
            />

        </Tab.Navigator>
    );
}
