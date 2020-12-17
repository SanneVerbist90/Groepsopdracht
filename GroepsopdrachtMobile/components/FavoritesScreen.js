import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, FlatList, StyleSheet } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';


export default FavoritesScreen = (route) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const loadAsyncData = async () => {
        try {
            const jsonItem = await AsyncStorage.getItem('@storage_Key') //key ??
            setData(jsonItem != null ? JSON.parse(jsonItem) : null)
            if (data !== null) {
                setLoading(false);
            }
        }
        catch (e) {
            console.log('uhoh');
        }
    }
    
    useEffect(() => {
        loadAsyncData();
    }, []);

    console.log('data1: ', data);
    console.log('loading: ', isLoading);

    const Item = ({ title, adres }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.adres}>{adres}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('DetailScreen', { location: item })}>
            <Item
                title={data.NAAM}
                adres={data.Adres}
                id={data.OBJECTID}
            />
        </Pressable>
    );

    return (
        <View style={styles.container}>
            {isLoading ? <Text style={{ backgroundColor: 'purple' }}>Loading...</Text> : 
            (<Text>{data.NAAM}</Text>
            )}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'lightslategrey',
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
      },
      adres:{
        fontSize: 15,
        color:'gray',             //aanpassen android
      },
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});
