import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function DetailsScreen({ route }){
    // Extraer los parámetros recibidos a través de la navegación
    const {name, email, phone} = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Detalles del usuario</Text>
            <Text style={styles.detail}>Nombre: {name}</Text>
            <Text style={styles.detail}>Correo electrónico: {email}</Text>
            <Text style={styles.detail}>Teléfono: {phone}</Text>
        </View>
    );
}

const styles = StyleSheet.create[{
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
    detail: {
        fontSize: 18,
        marginBottom: 10,
    },
}];