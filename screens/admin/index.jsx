import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import HotelScreen from "./HotelScreen";
import ReportScreen from "./ReportScreen";

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
