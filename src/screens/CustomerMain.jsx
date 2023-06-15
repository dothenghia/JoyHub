import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from './MainScreen'
import ScheduleScreen from './ScheduleScreen'
import NotificationScreen from './NotificationScreen'

const Tab = createBottomTabNavigator();

export default function CustomerMain() {
    return (
        <Tab.Navigator 
            initialRouteName="main"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="MainPage" component={MainScreen} />
            <Tab.Screen name="SchedulePage" component={ScheduleScreen} />
            <Tab.Screen name="NotificationPage" component={NotificationScreen} />
        </Tab.Navigator>
    );
}
