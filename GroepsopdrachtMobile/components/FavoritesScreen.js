import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, FlatList, StyleSheet } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';


export default FavoritesScreen = (route) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    let keys = []

    //////////////////////////////////////////// versie 1 
    
    const getAllKeys = async () => {
        try {
            keys = await AsyncStorage.getAllKeys()
        }
        catch (e) {

        }
        keys.forEach(async function (value) {
            let item = await AsyncStorage.getItem(value);
            var data = data + JSON.parse(item);
            console.log('DENDEZE',JSON.parse(item));
            setLoading(false);
        })
        console.log('HIER STAAT DATA:')
    }
    //useEffect(() => {getAllKeys();}, [data]);
  //  console.log(getAllKeys())
    console.log('hier stopt data');

    ///////////////////////////////////////// versie 2
/*
    const loadAsyncData = async () => {
        try {
            const jsonItem = await AsyncStorage.getItem('@storage_Key') //key ??
            setData(jsonItem != null ? JSON.parse(jsonItem) : null)
            if (data !== null) {
                setLoading(false);
                console.log('data2 ',data);
            }
        }
        catch (e) { 
            console.log('uhoh');
        }
    }
    useEffect(() => {
        loadAsyncData();
    }, [data]);

*/
    console.log('data1: ',data);
    console.log('loading: ',isLoading);



    const Item = ({ title, adres }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.adres}>{adres}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('DetailScreen', { location: item })}>
            <Item
                title={item.attributes.NAAM}
                adres={item.attributes.Adres}
                id={item.attributes.OBJECTID}
            />
        </Pressable>
    );

    return (
        <View style={styles.container}>
            {isLoading ? <Text style={{backgroundColor:'purple'}}>Loading...</Text> :
                <FlatList style={{backgroundColor:'yellow'}}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            }
            <StatusBar style="auto" />
        </View>
    )
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
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});
