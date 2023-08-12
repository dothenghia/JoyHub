import React, { useReducer, useMemo, lazy, Suspense } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Used for set location of DatePicker
import { en, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en', en)

// Import Provider
import { LoadingProvider } from './contexts/LoadingContext';
import { GlobalProvider } from "./contexts/GlobalContext";

const Stack = createNativeStackNavigator();

const LazyLoadScreen = (Component) => (props) => (
    <Suspense fallback={<Text>Loading...</Text>}>
        <Component {...props} />
    </Suspense>
);

export default function App() {
    const screenOptions = useMemo(() => ({ headerShown: false }), []);
    return (
        <GlobalProvider>
            <LoadingProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={screenOptions}>
                        <Stack.Screen name="LoginPage"
                            component={LazyLoadScreen(lazy(() => import('./screens/general/LoginScreen')))} />
                        <Stack.Screen name="SignupPage"
                            component={LazyLoadScreen(lazy(() => import('./screens/general/SignupScreen')))} />
                        <Stack.Screen name="CustomerRegisterPage"
                            component={LazyLoadScreen(lazy(() => import('./screens/general/CusRegisterScreen')))} />
                        <Stack.Screen name="ModeratorRegisterPage"
                            component={LazyLoadScreen(lazy(() => import('./screens/general/ModRegisterScreen')))} />
                        <Stack.Screen name="RecoveryPage"
                            component={LazyLoadScreen(lazy(() => import('./screens/general/RecoveryScreen')))} />
                        <Stack.Screen name="ResetPasswordPage"
                            component={LazyLoadScreen(lazy(() => import('./screens/general/ResetPasswordScreen')))} />
                        <Stack.Screen name="CustomerMain"
                            component={LazyLoadScreen(lazy(() => import('./screens/customer/index')))} />
                        <Stack.Screen name="ModeratorMain"
                            component={LazyLoadScreen(lazy(() => import('./screens/moderator/index')))} />
                        <Stack.Screen name="AdminMain"
                            component={LazyLoadScreen(lazy(() => import('./screens/admin/index')))} />

                    </Stack.Navigator>
                </NavigationContainer>
            </LoadingProvider>
        </GlobalProvider>
    );
};
