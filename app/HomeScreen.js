import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"; // Importa FlatList

export default function HomeScreen() {
    const [items, setItems] = useState([]); // Guardamos los datos que recibimos de la API
    const [loading, setLoading] = useState(true); // Nos permite mostrar el mensaje de "Cargando datos"

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            padding: 20,
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
    });

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); // URL de ejemplo
                const data = await response.json();
                setItems(data); // Guardar los datos obtenidos en el estado
                setLoading(false); // Corregido: Desactivar el estado de carga
            } catch (error) {
                console.log('Error al obtener los datos: ', error);
            }
        };
        fetchItems();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Cargando datos...</Text>
            ) : (
                <FlatList
                    data={items}
                    renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
}
