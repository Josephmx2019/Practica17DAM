import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from "./screens/DetailsScreen";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLeggedIn, setIsLoggedIn] = useState(null); // Estado para almacenar si el usuario está autenticado

    useEffect(() => {
        const checkLoginStatus = async () => {
            try{
                const storedUsername = await AsyncStorage.getItem('username')
                if (storedUsername){
                    setIsLoggedIn(true) // Si hay un usuario guardado, el estado del login se actualiza
                } else {
                    setIsLoggedIn(false) // Si no hay usuario, redirigimos a login
                }
            } catch(error){
                console.log("Error al verificar el estado de autenticación: ", error)
                setIsLoggedIn(false)
            }
        }

        checkLoginStatus()
    }, [])

    if(isLeggedIn === null){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#000ff" />
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLeggedIn ? "Home": "Login"}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
