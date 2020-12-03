import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


export default MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} mapType={"standard"}
        region={{
          latitude: 51.231107,
          longitude: 4.415127,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  mapStyle: {
    flex: 1,
  }
});
