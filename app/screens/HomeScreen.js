import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Buttom } from "react-native";
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
            <Buttom title="Cerrar sesión" onPress={handleLogout}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    header: {
        fontFamily: 24,
        marginBottom: 20,
    },
});