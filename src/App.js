import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CusRegisterScreen from './screens/CusRegisterScreen';
import ModRegisterScreen from './screens/ModRegisterScreen';

import CustomerIndex from './screens/Customer'
import ModeratorIndex from './screens/Moderator'
import AdminIndex from './screens/Customer'

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="LoginPage" component={LoginScreen} />
				<Stack.Screen name="SignupPage" component={SignupScreen} />
				<Stack.Screen name="CustomerRegisterPage" component={CusRegisterScreen} />
				<Stack.Screen name="ModeratorRegisterPage" component={ModRegisterScreen} />
				<Stack.Screen name="CustomerMain" component={CustomerIndex} />
				<Stack.Screen name="ModeratorMain" component={ModeratorIndex} />
                <Stack.Screen name="AdminMain" component={AdminIndex} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
