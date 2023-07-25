import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import ScheduleScreen from "./ScheduleScreen";
import NotificationScreen from './NotificationScreen';
import UserScreen from "./UserScreen";
import AddRoomScreen from "./AddRoomScreen";

const Tab = createBottomTabNavigator();

export default function ModeratorMain() {
    return (
        <Tab.Navigator 
            initialRouteName="MainPage"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="MainPage" component={MainScreen} />
            <Tab.Screen name="SchedulePage" component={ScheduleScreen} />
            <Tab.Screen name="NotificationPage" component={NotificationScreen} />
            <Tab.Screen name="UserPage" component={UserScreen} />
            <Tab.Screen name="AddRoomPage" component={AddRoomScreen} options={{tabBarButton: (props) => (null),}}/>

        </Tab.Navigator>
    );
}
