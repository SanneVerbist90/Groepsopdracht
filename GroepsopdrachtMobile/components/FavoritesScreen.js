import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default FavoritesScreen = (route) => {
    const [isLoading, setLoading] = useState(true);
    const [dataArray, setData] = useState([]);

    useEffect(() => {
        loadAsyncData();
    }, []);

    const loadAsyncData = async () => {
        try {
            const jsonItem = await AsyncStorage.getItem('@Key')
            setData(jsonItem != null ? JSON.parse(jsonItem) : null)
            if (dataArray !== null) {
                setLoading(false);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const Item = ({ title, adres }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.adres}>{adres}</Text>
        </View>
    );

    const renderItem = ({ item }) => {
        return (
            <Item
                title={item.NAAM}
                adres={item.Adres}
                id={item.OBJECTID}
            />
        )
    };

    return (
        <View style={styles.container}>
            {isLoading ? <Text>Loading...</Text> :
                (<FlatList
                    data={dataArray}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={dataArray} />
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
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    adres: {
        fontSize: 15,
        color: 'gray',
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});
