import { useNavigation } from "@react-navigation/native"; // Cambia la importación
import { Button, Text, TextInput, View } from "react-native"; // Importa desde react-native
import React, { useState } from "react";

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            navigation.navigate('Home'); // Navegar a HomeScreen
        } else {
            console.log('Credenciales incorrectas');
        }
    };

    return (
        <View>
            <Text>Inicio de Sesión</Text>
            <TextInput
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
    );
}