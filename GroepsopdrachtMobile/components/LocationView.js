import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default LocationView = () => {
    const [location, setLocation] = useState([]);
    useEffect(() =>{
        (async() => {
            let position = await Location.getCurrentPositionAsync();
            setLocation(position);
            console.log('VIEW');
        })
    },[]);
    console.log(location);
    return location
}