import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from './screens/general/LoginScreen';
import SignupScreen from './screens/general/SignupScreen';
import CusRegisterScreen from './screens/general/CusRegisterScreen';
import ModRegisterScreen from './screens/general/ModRegisterScreen';
import RecoveryScreen from './screens/general/RecoveryScreen';
import ResetPasswordScreen from './screens/general/ResetPasswordScreen';

import CustomerIndex from './screens/customer/index'
import ModeratorIndex from './screens/moderator/index'
import AdminIndex from './screens/admin/index'


const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="LoginPage" component={LoginScreen} />
				<Stack.Screen name="SignupPage" component={SignupScreen} />
				<Stack.Screen name="RecoveryPage" component={RecoveryScreen} />
				<Stack.Screen name="ResetPasswordPage" component={ResetPasswordScreen} />
				<Stack.Screen name="CustomerRegisterPage" component={CusRegisterScreen} />
				<Stack.Screen name="ModeratorRegisterPage" component={ModRegisterScreen} />
				
				<Stack.Screen name="CustomerMain" component={CustomerIndex} />
				<Stack.Screen name="ModeratorMain" component={ModeratorIndex} />
                <Stack.Screen name="AdminMain" component={AdminIndex} />

			

			</Stack.Navigator>
		</NavigationContainer>
	);
}
