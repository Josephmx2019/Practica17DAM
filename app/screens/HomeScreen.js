import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from '@react-navigation/native'
import { TouchableOpacity } from "react-native-web";

export default function HomeScreen() {
    const [username, setUsername] = useState('')
    const [items, setItems] = useState([]); // Guardamos los datos que recibimos de la API
    const [loading, setLoading] = useState(true); // Nos permite mostrar el mensaje de "Cargando datos"
    const navigation = useNavigation()

    useEffect(() => {
        const loadUsername = async () => {
            try {
                const storedUsername = await AsyncStorage.getItem('username')
                if(storedUsername){
                    setUsername(storedUsername)
                }
            } catch (error) {
                console.log('Error al obtener los datos: ', error);
            }
        };
        loadUsername();

        const fetchItems = async () =>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/user')
                const data = await response.json()
                setItems(data)
                setLoading(false)
            } catch(error){
                console.log('Error al obtener los datos: ', error)
            }
        };
        fetchItems();
    }, []);

    const handlePressItem = (item) =>{
        navigation.navigate('Details', {
            name: item.name,
            email: item.email,
            phone: item.phone,
        });
    };


    return (
        <View style={styles.container}>
            <Text>Bienvenido, {username}</Text>
            {loading ? (
                <Text> Cargando datos...</Text>
            ) : (
                <FlatList 
                    data={items}
                    renderItem={({ item }) => {
                        <TouchableOpacity onPress={() => handlePressItem(item)}>
                            <Text style={styles.item}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
}

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