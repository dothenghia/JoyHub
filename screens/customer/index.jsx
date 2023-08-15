import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./MainScreen";
import ReservationScreen from "./ReservationScreen";
import NotificationScreen from './NotificationScreen';
import UserScreen from "./UserScreen";
import HotelScreen from "./HotelScreen";
import RoomScreen from "./RoomScreen";
import PaymentScreen from "./PaymentScreen";
import AfterPaymentScreen from "./AfterPaymentScreen";

const Tab = createBottomTabNavigator();

export default function CustomerMain() {
    return (
        <Tab.Navigator 
            initialRouteName="MainPage"
            screenOptions={{ headerShown: false }}
            backBehavior="history"
        >
            <Tab.Screen name="MainPage" component={MainScreen} />
            <Tab.Screen name="ReservationPage" component={ReservationScreen} />
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
            <Tab.Screen name="PaymentPage" component={PaymentScreen}
                options={{
                    tabBarButton: (props) => (null), 
                    tabBarStyle: {display: 'none'}}}
            />
            <Tab.Screen name="AfterPaymentPage" component={AfterPaymentScreen}
                options={{
                    tabBarButton: (props) => (null), 
                    tabBarStyle: {display: 'none'}}}
            />

        </Tab.Navigator>
    );
}
