import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation()

    const handleLogout = async () => {
        try {
            // Eliminar el nombre de usuario de AsyncStorage
            await AsyncStorage.removeItem('username')
            // Redirigir al usuario a la pantalla de inicio de sesión
            navigation.replace('Login')
        } catch(error){
            console.log("Error al cerrar sesión: ", error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bienvenido a la pantalla principal</Text>
            <Button title="Cerrar sesión" onPress={handleLogout}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
});