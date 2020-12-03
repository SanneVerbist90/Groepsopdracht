import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';


export default MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={ styles.mapStyle} mapType={"standard"}
        region={{
          latitude: 51.212652,
          longitude: 4.413971,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        >

        </MapView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    flex: 1
  }
});
