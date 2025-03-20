import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native"; 

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMesage, setErrorMessage] = useState('')
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (username && password) {
            try{
                // Guardar el nombre de usuario en AsyncStorage
                await AsyncStorage.setItem('username', username)
                navigation.replace('Home') // Reemplazar el stack para que no se pueda volver a Loggin
            } catch(error){
                console.log("Error al guardar el nombre de usuario: ", error)
            }
        } else {
            setErrorMessage("Por favor ingresa usuario y contraseña")
        }
    };

    return (
        <View>
            <Text style={styles.container}>Iniciar sesión</Text>
            {errorMesage ? <Text style={styles.error}>{errorMesage}</Text>: null}
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Iniciar sesión" onPress={handleLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
})
