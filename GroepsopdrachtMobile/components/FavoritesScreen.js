import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, FlatList } from 'react-native';
import AsyncStorage, { useAsyncStorage} from '@react-native-community/async-storage';


export default FavoritesScreen = (route) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    let keys = []
    
//////////////////////////////////////////// versie 1 
    const getAllKeys = async () => {
    try {keys = await AsyncStorage.getAllKeys()} 
    catch(e) { }
    keys.forEach(async function (value) {
        let item = await AsyncStorage.getItem(value);
        var data = data + JSON.parse(item);
            console.log(JSON.parse(item));
        })
    console.log('HIER STAAT DATA:')
    }
    //useEffect(() => {getAllKeys();}, [data]);
    console.log(getAllKeys())


 ///////////////////////////////////////// versie 2
    const loadAsyncData = async () => {
      try {
        const jsonItem = await AsyncStorage.getItem(keys) //key ??
        setData(jsonItem != null ? JSON.parse(jsonItem) : null)
      }
      catch(e) { }
    }
    useEffect(() => {loadAsyncData();}, [data]);
    console.log(loadAsyncData())



    const Item = ({ title, adres }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.adres}>{adres}</Text>
        </View>
      );

    const renderItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('DetailScreen',{location:item})}>
        <Item 
        title={item.attributes.NAAM} 
        adres={item.attributes.Adres}
        id={item.attributes.OBJECTID}
        />
        </Pressable>
      );

    return (
        <View>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item , index) => index.toString()}
            />
            )}
        <StatusBar style="auto"/> 
        </View>
    )
};

