import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import LocationView from './LocationView';

export default LocationPermission = () => {
    const [hasPermission, setHasPermission] = useState(null);
   
    useEffect(() => {
        (async () => {
            const { status } = await Location.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            console.log(status);
        })();
    });
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to location</Text>
    }
    return (
            LocationView()
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });