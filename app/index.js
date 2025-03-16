import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Inicio de Sesión' }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Bienvenido' }}
            />
        </Stack.Navigator>
    );
}



/*import React from 'react';
import { Stack } from 'expo-router';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Inicio de Sesión' }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Bienvenido' }}
            />
        </Stack.Navigator>
    );
}*/